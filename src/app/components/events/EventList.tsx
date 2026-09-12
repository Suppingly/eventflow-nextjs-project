import EventCard from "./EventCard";
import type { Event } from "@/app/types/events";

type EventListProps = {
  items: Event[];
}

export default function EventList({items}: EventListProps){
  return (
    <section id="events" className="mt-12">
      <h2 className="text-2xl font-bold">Ближайшие события</h2>
      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {items.map((event)=>(
          <EventCard key={event.id} event={event}/>
        ))}
      </div>
    </section>
  )
}