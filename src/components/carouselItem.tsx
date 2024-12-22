import React from 'react'
import Image from "next/image";
import { Album } from '@/app/api/v1/_data/data';

const CarouselItem = ({ id, albumArtUrl, title, artist, releaseYear, genre }: Album) => {
  return (
    <div key={id} className="carousel-item group hover:drop-shadow-2xl rounded-full  aspect-square carousel-center flex flex-col items-center p-40 bg-black cursor-pointer">
      <div className='grid grid-cols-1 justify-items-center items-center h-full'>
        <div className='col-start-1 row-start-1 bg-black opacity-55'>
          <Image
            src={albumArtUrl}
            width={275}
            height={275}
            alt={title}
            className="rounded-full z-0 group-hover:animate-[spin_3s_linear_infinite] min-w-full min-h-full transition object-contain object-center"
          />
        </div>
        <div className="mt-3 col-start-1 row-start-1 z-10 text-slate-300">
          <h3 className="group-hover:text-slate-50 transition ease-in-out duration-150 font-bold">{title}</h3>
          <p className='w-fit'>
            {artist.name}
            <span className="group-hover:w-full w-0 block transition-all duration-500 h-0.5 bg-accent" />
          </p>
          <small>{releaseYear}, {genre}</small>
        </div>
      </div>
    </div>
  )
}

export default CarouselItem
