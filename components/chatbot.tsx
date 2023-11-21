"use client"

import { useEffect, useRef, useState } from "react"
import { useChat } from "ai/react"
import { Bot, Loader2, User } from "lucide-react"
import { toast } from "sonner"

import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

const Chatbot = () => {
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } =
    useChat()

  const scrollAreaRef = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: "smooth",
      })
    }
  }, [messages])

  if (error) {
    toast.error("Something went wrong!")
  }

  return (
    <div className="">
      <div
        ref={scrollAreaRef}
        className="h-[80vh]  overflow-y-auto bg-gray-100"
      >
        <div className="inline-flex w-full border-b border-input p-4">
          <div className="flex w-[1/10] items-center justify-center">
            <Bot color="rgb(34, 197, 94)" className="mx-2 h-4 w-4" />
          </div>
          <div className="mx-2 w-[9/10] text-[14px]">
            Hello! How can I assist you?
          </div>
        </div>
        {messages.map((message) => (
          <div
            key={message.id}
            className="inline-flex w-full border-b border-input p-4"
          >
            <div className="flex w-[1/10] items-center justify-center">
              {message.role === "user" ? (
                <User color="rgb(168, 85, 247)" className="mx-2 h-4 w-4" />
              ) : (
                <Bot color="rgb(34, 197, 94)" className="mx-2 h-4 w-4" />
              )}
            </div>
            <div className="mx-2 w-[9/10] text-[14px]">{message.content}</div>
          </div>
        ))}
      </div>
      <div className="relative bottom-0">
        <Separator className="h-1" />
        <div className="flex w-full items-center justify-center px-6 py-2.5">
          <form
            className="relative flex w-full items-center rounded-md border border-input bg-background"
            id="myForm"
            name="myForm"
            onSubmit={handleSubmit}
          >
            <textarea
              className="h-[50px] max-w-[calc(100%-60px)] flex-1 resize-none rounded-md bg-background px-3 py-2 text-sm ring-offset-background  scrollbar-thin placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Ask anything"
              value={input}
              onChange={handleInputChange}
              autoFocus
            />
            <button
              className={cn(
                "absolute right-0 mx-6 h-[50px] disabled:cursor-not-allowed",
                !isLoading && "opacity-100 hover:opacity-70"
              )}
              disabled={isLoading}
              type="submit"
            >
              {/* SendHorizontal svg */}
              {isLoading ? (
                <Loader2 className="h-[18px] w-[18px] animate-spin" />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-send-horizontal"
                >
                  <path d="m3 3 3 9-3 9 19-9Z" />
                  <path d="M6 12h16" />
                </svg>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Chatbot
