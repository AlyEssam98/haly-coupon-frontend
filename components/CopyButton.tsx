"use client";
import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center gap-1 px-2 py-1 rounded-md text-sm font-medium transition 
        ${copied ? "bg-green-100 text-green-700" : "hover:bg-blue-100 text-blue-600"}`}
    >
      {copied ? <Check size={16} /> : <Copy size={16} />}
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
