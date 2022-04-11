import React, { useEffect, useState } from "react"

const Filter = ({ setRegion, fetchData }) => {
  const [filter, setFilter] = useState("All")
  const countries = fetchData?.data?.data

  const filteredRegion = countries?.filter((country) =>
    country?.region.includes(filter)
  )
  useEffect(() => {
    setRegion(filteredRegion)
  }, [filter])

  return (
    <div className="h-12 w-48 flex justify-center items-center bg-white dark:bg-DarkBlue rounded-md shadow-sm">
      <select
        aria-label="label for the select"
        className="bg-white dark:bg-DarkBlue  rounded-md h-12 text-xs w-40 focus-visible:outline-none sm:text-sm sm:font-light"
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="All" defaultValue>
          Filter by Region
        </option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  )
}

export default Filter
