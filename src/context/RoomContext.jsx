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

  console.log()
  console.log()

  
  useEffect(() =>   {
    setTotal(Number(adults[0]) + Number(kids[0]));
  }, [adults,kids])

  
  console.log(total)
  const handleClick = (e) => {
    e.preventDefault();
    console.log(e)
    const newRooms = roomData.filter(room => {
      return total <= room.maxPerson
    })
    setRooms(newRooms)
  }


  return (
    < RoomContext.Provider value={{rooms, adults, setAdults, kids, setKids, handleClick}}>
      {children}
    </RoomContext.Provider>
  )
}

export default RoomProvider