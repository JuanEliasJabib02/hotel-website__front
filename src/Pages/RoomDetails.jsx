import React from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'

//components
import CheckIn from '../components/CheckIn'
import CheckOut from '../components/CheckOut'
import AdultsDropdown from '../components/AdultsDropdown'
import KidsDropdown from '../components/KidsDropdown'
//scroll
import ScrollToTop from '../components/ScrollToTop'
//context
import { RoomContext } from '../context/RoomContext'
//icon
import { FaCheck } from 'react-icons/fa'
import HeroSlider from '../components/HeroSlider'



const RoomDetails = () => {
  const {rooms} = useContext(RoomContext)
  const { id } = useParams()

  const room = rooms.find((room) => {
    return room.id === Number(id)
  })


  const { name, description, facilities, imageLg, price } = room
  
  console.log(room)
  return (
    <section className='' >
      <div  className='bg-room bg-cover bg-center h-[560px] relative flex justify-center
      items-center'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/70'></div>
        {/* Title */}
        <h1 className='text-6xl text-white z-20 font-primary text-center'>{name} Details</h1>
      </div>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row h-full py-24'>
          {/* left */}
          <div className='w-full h-full lg:w-[60%] '>
            <h2 className='h2'>{name}</h2>
            <p className='mb-8'>{description}</p>
            <img src={imageLg} alt="" />
            {/* Facilities */}
            <div className='mt-12'>
              <h3 className='h3 mb-3'>Room Facilities</h3>
              <p className='mb-12'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cupiditate laboriosam amet non quo architecto maxime nobis
            aspernatur sint quam, rem deserunt iusto, voluptas neque quibusdam
            quia error sunt numquam provident enim, nesciunt dignissimos dicta qui natus porro.
            Possimus, libero quis?
              </p>
              {/* Grid */}

              <div className='grid grid-cols-3 gap-6 mb-12'>
                {
                  facilities.map((item, index) => {

                    const { name, icon } = item;
                    return (
                      <div className='flex items-center gap-x-3 flex-1' key={index}>
                        <div className='text-3xl text-accent'>{icon}</div>
                        <div className='text-base'>{name}</div>

                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
          {/* Right */}
          <div className='w-full h-full lg:w-[40%] '>
            {/* Reservation */}
            <div className='py-8 px-6 bg-accent/20 mb-12'>
              <div className='flex flex-col space-y-4 mb-4'>
                <h3>Your reservation</h3>
                <div className='h-[60px]'>
                   < CheckIn />
                </div>
                <div className='h-[60px]'>
                   < CheckOut />
                </div>
                <div className='h-[60px]'>
                   < AdultsDropdown />
                </div>
                <div className='h-[60px]'>
                   < KidsDropdown />
                </div>
              </div>
                <button className='btn btn-lg btn-primary w-full'>
                  Book now for ${price}
                </button>
            </div>
            {/* Rules */}
            <div>
              <h3 className='h3'>Hotel Rules</h3>
              <p className='mb-6'>
                Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Consectetur
                quae quos mollitia temporibus maxime
                sapiente doloremque. Ipsa ea iure neque porro odio a exercitationem,
                doloremque, aliquam mollitia aspernatur libero in!
              </p>
              <ul className='flex flex-col gap-y-4'>
                <li className='flex items-center gap-x-4'>
                  < FaCheck  className='text-accent'/>
                  Check-in: 3:00PM - 9:00PM
                </li>
                <li className='flex items-center gap-x-4'>
                  < FaCheck  className='text-accent'/>
                  Check-out: 10:30 AM
                </li>
                <li className='flex items-center gap-x-4'>
                  < FaCheck  className='text-accent'/>
                  No pets
                </li>
                <li className='flex items-center gap-x-4'>
                  < FaCheck  className='text-accent'/>
                  No smoking
                </li>
               </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default RoomDetails