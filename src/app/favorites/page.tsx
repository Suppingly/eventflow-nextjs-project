"use client"

import EventList from "@/app/components/events/EventList";
import { events } from "@/app/data/events";
import { useAppSelector } from "@/app/lib/hooks";

export default function FavoritesPage() {
  const favoriteIds = useAppSelector((state) => state.favorites.ids);
  const favoriteEvents = events.filter((event) =>
    favoriteIds.includes(event.id)
  );

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-4xl font-bold">Избранные события</h1>
      <div className="mt -8">
      {favoriteEvents.length > 0 ? (
        <EventList items={favoriteEvents}/>
      ) : (
        <p className="text-slate-500">B избранном пока ничего нет.</p>
      )}
      </div>
    </main>
  )
}