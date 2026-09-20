"use client"

import type { Event } from "@/app/types/events";
import { toggleFavorite } from "@/app/features/favorites/favoritesSlice";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";

export default function EventCard({event}: {event: Event}){
  const dispatch = useAppDispatch()
  const isFavorite = useAppSelector(
    (state)=>state.favorites.ids.includes(event.id)
  )
  return (
    <article className="rounded-2xl border border-slate-800 bg-white p-6">
      <span className="text-xs font-semibold uppercase text-indigo-500 bg-indigo-100 p-2 rounded-lg">
        {event.category}
      </span>
      <h3 className="mt-4 text-xl font-bold">{event.title}</h3>
      <p className="mt-4 text-sm text-slate-500">{event.date}</p>
      <p className="mt-1 text-sm text-slate-700">{event.location}</p>
      <div className="mt-5 flex gap-3">
        <button className={`flex-1 rounded-lg border px-4 py-2 ${isFavorite?'bg-indigo-400':''} cursor-pointer`}
          onClick={()=>dispatch(toggleFavorite(event.id))}>
          {isFavorite?"★ В избранном":"☆ В избранное"}
        </button>
      </div>
    </article>
  )
}