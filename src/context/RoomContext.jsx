import React from 'react'

import { roomData } from "../data"
import { createContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export const RoomContext = createContext()
const RoomProvider = ({ children }) => {

  const adultDefault = "1 Adult"
  const kidDefault = "0 Kids"

  const [rooms, setRooms] = useState(roomData)
  const [adults, setAdults] = useState(adultDefault);
  const [kids, setKids] = useState(kidDefault);

  const [total, setTotal] = useState(0);

  useEffect(() =>   {
    setTotal(Number(adults[0] + Number[kids[0]]));
  }, [])
  
  const handleClick = (e) => {
    e.preventDefault();
    console.log(total)
  }

  console.log(adults)
  console.log(`adults ${adults}, kids ${kids}`)

  return (
    < RoomContext.Provider value={{rooms, adults, setAdults, kids, setKids, handleClick}}>
      {children}
    </RoomContext.Provider>
  )
}

export default RoomProvider