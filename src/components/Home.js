import React, { useState } from "react"
import Countries from "./Countries"
import Search from "./Search"
import Filter from "./Filter"

const Home = ({ fetchData }) => {
  const [filteredCountry, setFilteredCountry] = useState()
  const [region, setRegion] = useState(fetchData)

  return (
    <div className="bg-VeryLightGray dark:bg-VeryDarkBlue flex flex-col space-y-8 px-4 py-8 sm:px-16  sm:pt-10">
      <div className="space-y-8   sm:justify-between sm:items-center sm:flex-row sm:flex sm:space-y-0 sm:pb-2">
        <Search
          allCountry={fetchData}
          setFilteredCountry={setFilteredCountry}
        />
        <Filter setRegion={setRegion} fetchData={fetchData} />
      </div>
      <div className="px-8 sm:px-0">
        <Countries
          region={region}
          fetchData={fetchData}
          filteredCountry={filteredCountry}
        />
      </div>
    </div>
  )
}

export default Home
