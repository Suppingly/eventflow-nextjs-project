import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-center">
      <p className="text-sm font-semibold text-rose-600">404</p>
      <h1 className="mt-3 text-4xl font-bold">Событие не найдено</h1>
      <p className="mt-4 text-slate-600">
      Возможно, ссылка устарела или такого события больше нет.
      </p>
      <Link href="/events" className="mt-8 inline-block underline">
      Вернуться к событиям
      </Link>
    </main>
  )
}