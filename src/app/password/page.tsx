"use client";

import { useState } from "react";
// import { useRouter } from "next/router";
import { useRouter, usePathname } from "next/navigation";

export default function Page() {
  const [input, setInput] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  // const searchParams = useSearchParams();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === "ComplexSystemsUX") {
      document.cookie = `caseStudyAccess=${input}; path=/`;
      router.push("/loadflightcasestudy");
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="password"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter password"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
