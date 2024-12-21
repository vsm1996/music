import { Album, Artist } from '@/app/api/v1/_data/data'
import React from 'react'
import CarouselItem from './carouselItem'

interface CarouselProps {
  artists: Artist[];
  albums: Album[];
}


const Carousel = ({ albums, artists }: CarouselProps) => {
  return (
    <div className="carousel carousel-center max-w-full space-x-4 mt-20">
      {albums && albums.length > 0 && albums.map(({ id, title, artistId, releaseYear, albumArtUrl, genre, tracklist }: (Artist | Album)) => {
        const artist: (Artist | Album) | undefined = artists?.find((artist: (Artist | Album)) => artist.id === artistId)

        if (artist) return (<CarouselItem
          key={id} id={id} artistId={artist.id} albumArtUrl={albumArtUrl} title={title} artist={artist} releaseYear={releaseYear} genre={genre} tracklist={tracklist}
        />
        )
      }
      )}
    </div>
  )
}

export default Carousel
