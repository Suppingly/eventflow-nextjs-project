import EventList from "./components/events/EventList";
import { events } from "./data/events";
import FavoritesFilter from "./components/events/FavoritesFilter";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20 flex flex-col justify-center">
      <section id="about">
        <p className="text-sm uppercase tracking-[0.2em] text-indigo-600">
          Практическая работа №13
        </p>
        <h1 className="mt-4 text-5xl font-bold">
          Городские события
        </h1>
        <p className="mt-5 max-w-2xl text-slate-600">
          Выбирайте встречи, лецкии и мероприятия
          на ближайшую неделю.
        </p>
      </section>
      <FavoritesFilter/>
      <EventList items={events}/>
    </main>    
  );
}