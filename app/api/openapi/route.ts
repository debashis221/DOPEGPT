import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  organization: "org-GJ2uWoEO6kl79XgSsgjclY41",
  apiKey: process.env.NEXT_PUBLIC_OPENAPI_KEY,
});
export async function POST(request: Request) {
  const body = await request.json();
  const openai = new OpenAIApi(configuration);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: body.prompt.text,
    max_tokens: 100,
    temperature: 0.5,
  });
  return new Response(
    JSON.stringify({ data: response.data.choices[0].text, body })
  );
}
