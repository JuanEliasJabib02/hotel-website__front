import React, { useContext } from 'react'

import {RoomContext } from "../context/RoomContext"
import Room from './Room'

const Rooms = () => {

  const { rooms } = useContext(RoomContext)
  
  console.log(rooms)
  return (
    <section className=' py-24 '>

      <div>
        {
          rooms?.map((room) => (
            < Room room={room} key={room.id} />
          ))
        }do
      </div>

    </section>
  )
}

export default Rooms