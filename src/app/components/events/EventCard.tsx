import type { Event } from "@/app/types/events";

type EventCardProps = {
  event: Event;
}

export default function EventCard({event}: EventCardProps){
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <span className="text-xs font-semibold uppercase text-indigo-300">
        {event.category}
      </span>
      <h3 className="mt-4 text-xl font-bold">{event.title}</h3>
      <p className="mt-4 text-sm text-slate-300">{event.date}</p>
      <p className="mt-1 text-sm text-slate-400">{event.location}</p>
    </article>
  )
}