"use client";

import Carousel from '@/components/carousel';
import { Artist, Album } from './api/v1/_data/data';
import { useFetch } from "@/hooks";
import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import SearchInput from '@/components/input';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const urls = useMemo(() => [
    'http://localhost:3000/api/v1/albums',
    'http://localhost:3000/api/v1/artists',
  ], []);

  const { data, error, isLoading } = useFetch(urls);
  const [filteredItems, setFilteredItems] = useState<[Album[], Artist[]] | [[], []]>([[], []]);
  const [albums, artists] = filteredItems;

  useEffect(() => {
    if (data) {
      setFilteredItems([data[0], data[1]]);
    }
  }, [data]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredArtists = data[1].filter((item: Artist) =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );

    if (filteredArtists.length > 0) {
      setFilteredItems([albums, filteredArtists]);
    } else {
      setFilteredItems([albums, data[1]]);
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error getting data</p>;

  return (
    <main className="w-dvw h-dvh flex flex-col items-center justify-center">
      <SearchInput handleSearch={handleSearch} searchTerm={searchTerm} />
      <Carousel artists={artists} albums={albums} />
    </main >
  );
}
