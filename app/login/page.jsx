"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLoginMutation } from "@/lib/api/authApi";
import { useDispatch } from "react-redux";
import { loginSuccess } from "@/lib/slices/authSlice";
import Button from "@/components/ui/Button";
import { Input } from "@/components/ui";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const user = await login(form).unwrap();

      dispatch(loginSuccess(user)); // Save to Redux store
      localStorage.setItem("token", user.token); // Optional if you're storing token manually

      router.push("/");
    } catch (err) {
      setError(err?.data?.error || "Login failed");
    }
  };

  return (
    <div className="max-w-md p-6 mx-auto mt-10 bg-gray-800 rounded-lg shadow">
      <h2 className="mb-4 text-2xl font-bold">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          name="email"
          type="email"
          label="Email"
          placeholder="Type your email"
          value={form.email}
          onChange={handleChange}
        />
        <Input
          name="password"
          type="password"
          label="Password"
          placeholder="Type your password"
          value={form.password}
          onChange={handleChange}
        />
        {error && <p className="text-red-500">{error}</p>}
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </Button>
      </form>
    </div>
  );
}
