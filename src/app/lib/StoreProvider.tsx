"use client"

import { useRef } from "react"
import { Provider } from "react-redux"
import { makeStore, type AppStore } from "./store"

export default function StoreProvider({children}:{children:React.ReactNode}){
  //const [store] = useState(() => makeStore()) 
  const storeRef = useRef<AppStore|null>(null)
  if (storeRef.current == null) storeRef.current = makeStore()
  // eslint-disable-next-line
  return <Provider store={storeRef.current}>{children}</Provider> // useRef считается устаревшим :(
}