"use client"

import EventCard from "./EventCard";
import type { Event } from "@/app/types/events";
//import FavoritesFilter from "./FavoritesFilter";
import { useAppSelector } from "@/app/lib/hooks";

type EventListProps = {
  items: Event[];
}

export default function EventList({items}: EventListProps){
  const isFavoritesFilter = useAppSelector(
    (state)=>state.favorites.showOnlyFavorites
  )
  const favoriteEvents = useAppSelector(
    (state)=>state.favorites.ids
  )
  const currentItems = isFavoritesFilter ? items.filter(item=>favoriteEvents.includes(item.id)) : items;
  return (
    <section id="events" className="mt-12">
      <h2 className="text-2xl font-bold">Ближайшие события</h2>
      {/*<FavoritesFilter/> функционал в 4 пр*/}
      {currentItems.length!=0 || !isFavoritesFilter ? <div className="mt-6 grid gap-5 md:grid-cols-3">
        {currentItems.map((event)=>(
          <EventCard key={event.id} event={event}/>
        ))}
        </div> : 
        <span className="w-full flex flex-col gap-5 my-10 text-center">
          <h3 className="text-2xl font-semibold">Нет избранных событий</h3>
          <p>Добавьте событие в избранном, чтобы увидеть его здесь!</p>
        </span>}
    </section>
  )
}