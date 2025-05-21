"use client";
import React, { useState } from "react";
import SearchBar from "../searchContainer";
import { CloudRain, MessageCircle, X } from "lucide-react";
import PopulatedCities from "../populatedCities";
import { ChatBot } from "../chats";

export default function HomeWeather() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-md py-4">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <CloudRain className="w-8 h-8 text-blue-500 mr-2" />
            <h1 className="text-2xl font-bold text-gray-800">Weather App</h1>
          </div>
          <button
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="hidden md:flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Weather Assistant</span>
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto py-8 px-4">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-8 mb-8 text-white shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Check Weather Anywhere</h2>
          <p className="mb-6 text-blue-100">
            Enter a city name to get the latest weather forecast
          </p>
          <div className="max-w-lg">
            <SearchBar />
          </div>
        </div>

        <PopulatedCities />
      </main>

      <div
        className={`fixed transition-all duration-300 ease-in-out ${
          isChatOpen ? "bottom-0 right-0 md:right-4 md:bottom-4" : " opacity-0"
        }`}
        
      >
        <div className="relative max-w-sm w-full md:w-96 bg-white rounded-t-lg md:rounded-lg shadow-xl border border-gray-200">
          <div className="absolute top-2 right-2">
            <button
              onClick={() => setIsChatOpen(false)}
              className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <ChatBot />
        </div>
      </div>

      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-4 right-4 md:hidden  bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-colors"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
