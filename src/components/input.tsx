import React, { ChangeEvent } from 'react'

interface SearchInputProps {
  searchTerm: string,
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
}

const SearchInput = ({ searchTerm, handleSearch }: SearchInputProps) => {
  return (
    <input
      type="text"
      value={searchTerm}
      placeholder="Artist Name..."
      onChange={handleSearch}
      className="input input-bordered w-full max-w-xs"
    />
  )
}

export default SearchInput
