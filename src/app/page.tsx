import EventList from "./components/events/EventList";
import { events } from "./data/events";

export default function Home() {
  return (
    <main className="mx-auto px-6 py-16 bg-slate-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="text-sm uppercase tracking-[0.2em] text-indigo-300">
          Практическая работа №11
        </p>
        <h1 className="mt-4 text-4xl font-bold">EventFlow</h1>
        <p className="mt-5 max-w-2xl text-lg text-slate-300">
          Проект Next.js создан и готов к дальнейшей разработке.
        </p>
      </section>
      <section id="about">
        <p className="text-sm uppercase tracking-[0.2em] text-indigo-300">
          Практическая работа №12
        </p>
        <h1 className="mt-4 text-5xl font-bold">
          Городские события
        </h1>
        <p className="mt-5 max-w-2xl text-slate-300">
          Выбирайте встречи, лецкии и мероприятия
          на ближайшую неделю.
        </p>
      </section>
      <EventList items={events}/>
    </main>    
  );
}
