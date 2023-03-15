"use client";
import TextField from "@/components/TextField";
import { useWhisper } from "@chengsokdara/use-whisper";
import { useCallback } from "react";

export default function Home() {
  const { recording, transcript, startRecording, stopRecording } = useWhisper({
    apiKey: process.env.NEXT_PUBLIC_OPENAPI_KEY, // YOUR_OPEN_AI_TOKEN
  });
  const handleSpeakClick = useCallback(async () => {
    if (recording) {
      stopRecording();
      const data = await fetch("/api/openapi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: transcript }),
      });
      const response = await data.json();
      console.log(response);
    } else {
      startRecording();
    }
  }, [recording, startRecording, stopRecording]);
  return (
    <main className="m-0 box-border flex h-screen w-full flex-col items-center justify-between bg-black p-0 text-white">
      <h2 className="text-3xl font-extrabold">DOPEGPT-3</h2>
      <div className="sticky top-[100vh] py-5">
        <TextField onSpeakClick={handleSpeakClick} recording={recording} />
      </div>
    </main>
  );
}
