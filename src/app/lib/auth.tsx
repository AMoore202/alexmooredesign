export const VALID_HASH =
  "17b6333037b36b438356232d3c40b4cbc56a0259efada015f5844939f87deb26";

export async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export async function checkPassword(password: string): Promise<boolean> {
  const hashedPassword = await hashPassword(password);
  return hashedPassword === VALID_HASH;
}

export async function isAuthenticated(): Promise<boolean> {
  const password = localStorage.getItem("password") || "";
  const hashedPassword = await hashPassword(password);
  return hashedPassword === VALID_HASH;
}
