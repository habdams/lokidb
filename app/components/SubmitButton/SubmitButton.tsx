"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-purple-600 rounded-lg px-4  py-2 text-purple-50 font-medium"
    >
      {pending ? "Loading..." : "Add your opinion"}
    </button>
  );
}
