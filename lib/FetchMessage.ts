import { UseWhisperTranscript } from "@chengsokdara/use-whisper/dist/types";

export const fetchResponse = async (transcript: UseWhisperTranscript) => {
  const data = await fetch("/api/openapi", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt: transcript }),
  });
  const response = await data.json();
  return response;
};
