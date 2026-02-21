import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();

  if (formData.get("website")) {
    return NextResponse.json({ ok: true });
  }

  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  return NextResponse.redirect(new URL("/en/contact?submitted=1", req.url));
}
