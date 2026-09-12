"use client"

import { setShowOnlyFavorites } from "@/app/features/favorites/favoritesSlice";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";

export default function FavoritesFilter(){
  const dispatch = useAppDispatch()
  const isFilter = useAppSelector(
    (state)=>state.favorites.showOnlyFavorites
  )
  return (
    <button className={`mt-5 rounded-lg border px-4 py-2 ${isFilter?'bg-indigo-400':''} cursor-pointer`}
    onClick={()=>dispatch(setShowOnlyFavorites(!isFilter))}>
      Избранные
    </button>
  )
}