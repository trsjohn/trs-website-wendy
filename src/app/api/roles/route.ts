import { NextResponse } from "next/server";
import { getRoles } from "../../../lib/api";

export async function GET() {
  try {
    const roles = await getRoles();
    return NextResponse.json(roles);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}


