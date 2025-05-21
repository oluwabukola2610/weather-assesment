/* eslint-disable @typescript-eslint/no-unused-vars */
import { Message } from "@/types/types";
import { extractCity } from "@/utils/extractCities";
import { CornerRightUp, CloudRain } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import MessageBubble from "./msgbubble";

export default function ChatBot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content:
        "Hello! I can help you check the weather. Try asking about the weather in a specific location.",
      timestamp: new Date(),
    },
  ]);
  const [submitted, setSubmitted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);

  const handleSend = () => {
    if (!input.trim()) return;
    const city = extractCity(input);
    const newMessages: Message[] = [
      ...messages,
      { role: "user", content: input, timestamp: new Date() },
    ];

    if (city) {
      newMessages.push({
        role: "bot",
        content: (
          <div>
            <p>
              Here&apos;s a link to get detailed weather information for {city}:
            </p>
            <Link
              href={`/weather/${city}`}
              className="inline-block mt-1 bg-blue-600 text-white py-1 px-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              View Weather Forecast
            </Link>
          </div>
        ),
        timestamp: new Date(),
      });
    } else {
      newMessages.push({
        role: "bot",
        content:
          "I can help you check the weather forecast for any location. Just ask something like 'What's the weather in Tokyo?' or 'Show me the forecast for Paris.’",
        timestamp: new Date(),
      });
    }

    setMessages(newMessages);
    setInput("");
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
        setIsAnimating(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [submitted]);
  return (
    <div className="max-w-sm mx-auto bg-white shadow rounded p-4">
      <div className="flex items-center p-4 border-b border-gray-200 rounded-t-lg bg-white">
        <CloudRain className="text-blue-500 mr-2" size={24} />
        <h1 className="text-xl font-semibold text-gray-800">
          Weather Assistant
        </h1>
      </div>

      <div className="h-38 overflow-y-auto mb-4 space-y-2">
        {messages.map((msg, i) => (
          <MessageBubble key={i} {...msg} />
        ))}
      </div>

      <div className=" flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about the weather..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSend();
            }
          }}
          className="flex-1 border px-2 py-1 rounded"
        />
        <button
          type="button"
          onClick={handleSend}
          className="p-2 bg-gray-200 rounded"
        >
          {submitted ? (
            <div
              className="w-4 h-4 bg-black rounded-sm animate-spin"
              style={{ animationDuration: "3s" }}
            />
          ) : (
            <CornerRightUp
              className={`w-4 h-4 ${
                input ? "opacity-100" : "opacity-30"
              } transition-opacity`}
            />
          )}
        </button>
      </div>

      <p className="pl-4 h-4 text-xs text-gray-600 mt-2">
        {submitted ? "AI is thinking..." : "Ready to submit!"}
      </p>
    </div>
  );
}
