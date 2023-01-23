import React from 'react'

import { roomData } from "../data"
import { createContext } from 'react'

export const RoomContext = createContext()
const RoomProvider = ({ children }) => {
  
  console.log(roomData)
  return (
    < RoomContext.Provider value={"room context"}>
      {children}
    </RoomContext.Provider>
  )
}

export default RoomProvider