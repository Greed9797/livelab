"use client";

import type { FieldDef } from "@/lib/bio/forms/types";

interface Props {
  field: FieldDef;
  value: string | string[];
  onChange: (value: string | string[]) => void;
}

const inputBase =
  "w-full rounded-[8px] border border-white/10 bg-black/40 px-[14px] py-[12px] text-[15px] text-white placeholder:text-white/40 focus:border-[#FE5206] focus:outline-none focus:ring-2 focus:ring-[#FE5206]/30";

export default function Field({ field, value, onChange }: Props) {
  return (
    <div className="flex flex-col gap-[8px]">
      <label className="text-[14px] font-medium text-white">
        {field.label}
        {field.required && <span className="ml-1 text-[#FE5206]">*</span>}
      </label>
      {field.helper && <p className="text-[12px] text-white/60">{field.helper}</p>}

      {(field.type === "text" || field.type === "tel" || field.type === "email") && (
        <input
          type={field.type}
          inputMode={field.type === "tel" ? "tel" : undefined}
          required={field.required}
          placeholder={field.placeholder}
          value={typeof value === "string" ? value : ""}
          onChange={(e) => onChange(e.target.value)}
          className={inputBase}
        />
      )}

      {field.type === "textarea" && (
        <textarea
          required={field.required}
          rows={4}
          placeholder={field.placeholder}
          value={typeof value === "string" ? value : ""}
          onChange={(e) => onChange(e.target.value)}
          className={inputBase + " resize-y"}
        />
      )}

      {field.type === "radio" && field.options && (
        <div className="flex flex-col gap-[8px]">
          {field.options.map((opt) => {
            const checked = value === opt;
            return (
              <label
                key={opt}
                className={`flex cursor-pointer items-start gap-[10px] rounded-[8px] border px-[14px] py-[12px] text-[14px] transition-colors ${
                  checked
                    ? "border-[#FE5206] bg-[#FE5206]/10 text-white"
                    : "border-white/10 bg-black/30 text-white/85 hover:border-white/20"
                }`}
              >
                <input
                  type="radio"
                  name={field.id}
                  value={opt}
                  checked={checked}
                  onChange={() => onChange(opt)}
                  required={field.required}
                  className="mt-[3px] h-[14px] w-[14px] accent-[#FE5206]"
                />
                <span>{opt}</span>
              </label>
            );
          })}
        </div>
      )}

      {field.type === "checkbox" && field.options && (
        <div className="flex flex-col gap-[8px]">
          {field.options.map((opt) => {
            const arr = Array.isArray(value) ? value : [];
            const checked = arr.includes(opt);
            return (
              <label
                key={opt}
                className={`flex cursor-pointer items-start gap-[10px] rounded-[8px] border px-[14px] py-[12px] text-[14px] transition-colors ${
                  checked
                    ? "border-[#FE5206] bg-[#FE5206]/10 text-white"
                    : "border-white/10 bg-black/30 text-white/85 hover:border-white/20"
                }`}
              >
                <input
                  type="checkbox"
                  value={opt}
                  checked={checked}
                  onChange={() => {
                    const next = checked ? arr.filter((v) => v !== opt) : [...arr, opt];
                    onChange(next);
                  }}
                  className="mt-[3px] h-[14px] w-[14px] accent-[#FE5206]"
                />
                <span>{opt}</span>
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
}
