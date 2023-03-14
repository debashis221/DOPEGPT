"use client";
import TextField from "@/components/TextField";
import { useWhisper } from "@chengsokdara/use-whisper";

export default function Home() {
  const {
    recording,
    speaking,
    transcribing,
    transcript,
    pauseRecording,
    startRecording,
    stopRecording,
  } = useWhisper({
    apiKey: process.env.NEXT_PUBLIC_OPENAPI_KEY, // YOUR_OPEN_AI_TOKEN
  });
  const handleSpeakClick = () => {
    if (recording) {
      stopRecording();
    } else {
      startRecording();
    }
  };
  console.log(recording);
  console.log(transcript.text);
  return (
    <main className="m-0 box-border flex h-screen w-full flex-col items-center justify-between bg-black p-0 text-white">
      <h2 className="text-3xl font-extrabold">DOPEGPT-3</h2>
      <div className="sticky top-[100vh] py-5">
        <TextField onSpeakClick={handleSpeakClick} />
      </div>
    </main>
  );
}
