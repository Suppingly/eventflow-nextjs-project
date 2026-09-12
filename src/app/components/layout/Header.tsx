"use client"

import Navigation from "./Navigation"
import { useAppSelector } from "@/app/lib/hooks"

export default function Header() {
  const favoriteCount = useAppSelector(
    (state)=>state.favorites.ids.length
  )
  return (
    <header className="fixed w-full border-b bg-slate-800 border-slate-600 z-100">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <span className="text-xl font-bold text-white">EventFlow</span>
        <div className="flex items-center gap-10">
          <Navigation/>
          <span className="text-slate-300">Избранное: {favoriteCount}</span>
        </div>
      </div>
    </header>
  )
}