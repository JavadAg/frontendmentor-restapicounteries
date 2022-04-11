import React, { useEffect, useState } from "react"
import { IoSearchSharp } from "react-icons/io5"
const Search = ({ allCountry, setFilteredCountry }) => {
  const [search, setSearch] = useState(undefined)
  const countries = allCountry.data.data

  const filteredCountry = countries.filter((country) =>
    country.name.includes(search)
  )
  useEffect(() => {
    setFilteredCountry(filteredCountry)
  }, [search])

  return (
    <div className="flex flex-row  items-center bg-white dark:bg-DarkBlue w-full h-12 rounded-md sm:w-2/5 shadow-sm">
      <input
        className="bg-white dark:bg-DarkBlue h-10 w-full text-xs px-16 sm:text-sm sm:font-light text-DarkGray focus-visible:outline-none"
        type="text"
        placeholder="Search for a country..."
        onChange={(e) => {
          setSearch(e.target.value)
        }}
      />
      <span className="absolute text-lg left-12 sm:left-24 ">
        <IoSearchSharp />
      </span>
    </div>
  )
}

export default Search
