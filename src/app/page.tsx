import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl h-screen px-6 py-20 flex flex-col justify-center">
        <p className="text-sm font-semibold text-indigo-600">EventFlow</p>
        <h1 className="mt-3 text-5xl font-bold">События в одном месте</h1>
        <p className="mt-5 max-w-2xl text-lg text-slate-600">
        Просматривайте ближайшие мероприятия и сохраняйте интересные события.
        </p>

        <Link
          href="/events"
          className="mt-8 inline-block rounded-lg bg-slate-950 w-fit px-5 py-3 text-white">
        Смотреть события
        </Link>
    </main>    
  );
}
