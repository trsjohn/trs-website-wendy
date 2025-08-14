import OpenAI from "openai";

// This client should only be imported and used in server-side code.
export const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });


