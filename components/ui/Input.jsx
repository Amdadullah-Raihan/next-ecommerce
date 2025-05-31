import {} from "react";
import { cn } from "../../utils/cn";
import { isOnlyCharacters, isOnlyNumbers } from "@/utils/formValidation";

const InputField = ({
  // There is no need to spread values here as we can get all the values from chaining ...restprops but adding value will show suggetion while using this conponent which will enhance the ux.
  label,
  errorMsg,
  type = "text",
  className = "",
  icon,
  required,
  onChange,
  ...restProps
}) => {
  return (
    <div className="w-full text-wrap relative">
      <div
        className={cn(
          " border rounded-lg pb-2 px-4 transition",

          errorMsg
            ? "ring-2 ring-rose-500"
            : "focus-within:ring-2 focus-within:ring-primary",
          restProps.disabled && "opacity-70 cursor-not-allowed",

          className
        )}
      >
        {label && (
          <span className="text-xs py-1 text-gray-600 flex items-start gap-1">
            <span
              className={`${
                required == true
                  ? "text-red-500 text-lg absolute left-[6px] top-[1px] block"
                  : "hidden"
              }`}
            >
              *
            </span>{" "}
            {label}
          </span>
        )}
        <input
          type={type === "number" || type === "char" ? "" : type}
          className={cn(
            "w-full mx-auto focus:outline-none",
            icon && "pr-8",
            restProps.disabled && "cursor-not-allowed"
          )}
          value={restProps.value || ""}
          onChange={(e) => {
            const value = e.target.value;
            if (type === "char") {
              if (isOnlyCharacters(value)) {
                onChange(e);
              }
              return;
            }
            if (type === "number") {
              if (isOnlyNumbers(value)) {
                onChange(e);
              }
              return;
            }
            if (type !== "number" || type !== "char") {
              onChange(e);
            }
          }}
          {...restProps}
        />
        {icon && (
          <span className="absolute right-3  top-[1.35rem]">{icon}</span>
        )}
      </div>
      {errorMsg && (
        <p className="mt-1 text-xs   text-rose-500 italic">{errorMsg}</p>
      )}
    </div>
  );
};

export default InputField;
