export default function AboutPage() {
  return (
  <main className="mx-auto max-w-6xl px-6 py-12">
    <h1 className="text-4xl font-bold">Контакты</h1>
    <p className="mt-5 leading-8 text-slate-600">
      Если есть вопросы или пожелания, обращайтесь к нам через контакты снизу. Нам очень важно ваше мнение.
    </p>
    <span className="flex flex-row gap-10 mt-10">
      <p className="font-semibold text-indigo-700 bg-indigo-100 p-3 rounded-2xl border-2 border-indigo-300">+88005553555</p>
      <p className="font-semibold text-indigo-700 bg-indigo-100 p-3 rounded-2xl border-2 border-indigo-300">superflowai@pochta.ru</p>
    </span>
  </main>
  );
}