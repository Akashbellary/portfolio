"use client"

import React from "react"

export default function AIChatButton() {
  return (
    <a 
      href="https://akashbellary.me/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="inline-flex h-10 items-center justify-center rounded-md px-8 py-2 text-sm font-medium whitespace-nowrap bg-gradient-to-r from-red-500 via-yellow-600 via-green-400 via-blue-700 via-indigo-400 via-purple-400 to-pink-400 animate-rainbow-flow hover:scale-105 transition-all duration-300 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    >
      <span className="font-medium text-black drop-shadow-sm whitespace-nowrap">Talk to my AI</span>
    </a>
  )
}
