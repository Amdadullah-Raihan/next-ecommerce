"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button"; // Update path if needed
import { Input } from "@/components/ui";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed");
        return;
      }

      // Save token (or use cookies depending on your approach)
      localStorage.setItem("token", data.token);

      router.push("/"); // redirect to a protected page
    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-800  shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          name="email"
          type="email"
          label="Email"
          placeholder="Type your email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        <Input
          name="password"
          type="password"
          label="Password"
          placeholder="Type Your Password"
          value={form.password}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        {error && <p className="text-red-500">{error}</p>}
        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </div>
  );
}
