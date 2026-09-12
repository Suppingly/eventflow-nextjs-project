import Link from "next/link";
import { notFound } from "next/navigation";
import { events } from "@/app/data/events";

export default async function EventPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  const event = events.find((item) => item.id === Number(id));
  if (!event) notFound();

  return (
  <main className="mx-auto max-w-6xl px-6 py-12">
    <p className="text-sm w-fit font-semibold uppercase text-indigo-500 bg-indigo-100 p-2 rounded-lg">{event.category}</p>
    <h1 className="mt-2 text-4xl font-bold">{event.title}</h1>
    <p className="mt-6 text-slate-600">{event.date}</p>
    <p className="mt-2 text-slate-600">{event.location}</p>
    <Link href="/events" className="mt-8 inline-block underline">
      ← Ко всем событиям
    </Link>
  </main>
  )
}