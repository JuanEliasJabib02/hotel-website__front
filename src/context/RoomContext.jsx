import React from 'react'

import { roomData } from "../data"
import { createContext } from 'react'
import { useState } from 'react'

export const RoomContext = createContext()
const RoomProvider = ({ children }) => {

    const [rooms, setRooms] = useState(roomData)

  return (
    < RoomContext.Provider value={{rooms}}>
      {children}
    </RoomContext.Provider>
  )
}

export default RoomProvider