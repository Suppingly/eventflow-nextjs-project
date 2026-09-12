"use client"

import EventList from "@/app/components/events/EventList";
import { events } from "@/app/data/events";
import { useRouter } from "next/navigation";

export default function EventsPage() {
  const router = useRouter()
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-4xl font-bold">Coбытия</h1>
      <p className="mt-3 text-slate-600">
      Выберите мероприятие и откройте страницу с подробной информацией.
      </p>
      <button className="mt-5 rounded-lg border px-4 py-2 bg-indigo-300 cursor-pointer"
       onClick={()=>router.push("/favorites")}>
        Открыть избранное
      </button>
      <div className="mt-8">
        <EventList items={events}/>
      </div>
    </main>
  )
}