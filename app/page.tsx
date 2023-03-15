"use client";
import ResultCard from "@/components/ResultCard";
import TextField from "@/components/TextField";
import { fetchResponse } from "@/lib/FetchMessage";
import { useWhisper } from "@chengsokdara/use-whisper";
import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  const [fetching, setFetching] = useState(false);
  const { recording, transcript, startRecording, stopRecording } = useWhisper({
    apiKey: process.env.NEXT_PUBLIC_OPENAPI_KEY, // YOUR_OPEN_AI_TOKEN
  });
  const handleSpeakClick = async () => {
    if (recording) {
      stopRecording();
    } else {
      startRecording();
    }
  };
  useEffect(() => {
    (async () => {
      if (fetching) {
        const data = await fetchResponse(transcript);
        setData(data);
      }
    })();
    return () => {
      setData(null);
      setFetching(false);
    };
  }, [fetching]);

  return (
    <main className="m-0 box-border flex h-screen w-full flex-col items-center justify-between bg-black p-0 text-white">
      <h2 className="text-3xl font-extrabold">DOPEGPT-3</h2>
      {data?.data && <ResultCard message={data?.data} />}

      <div className="sticky top-[100vh] py-5">
        <TextField
          onSpeakClick={handleSpeakClick}
          recording={recording}
          transcript={transcript}
          setFetching={setFetching}
        />
      </div>
    </main>
  );
}
