import Chatbot from "@/components/chatbot"
import Instructions from "@/components/instructions"

export default function IndexPage() {
  return (
    <main className="h-screen">
      <div className="flex h-16 items-center justify-center">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter">
          Polymath AI Education Tutorial
        </h1>
      </div>

      <div className="inline-flex h-[calc(100vh-4rem)] w-full border-y border-dashed border-black">
        <section className="w-[50%] border-r border-dashed border-black">
          <Instructions />
        </section>
        <section className="w-[50%]">
          <Chatbot />
        </section>
      </div>
    </main>
  )
}
