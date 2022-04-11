import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Countries = ({ region, fetchData, filteredCountry }) => {
  const { data, isLoading } = fetchData

  let items = data?.data

  if (isLoading == true) {
    return <div></div>
  }

  if (filteredCountry?.length >= 1) {
    items = filteredCountry
  }
  if (region?.length >= 1) {
    items = region
  }

  return (
    <div className=" grid grid-cols-1 gap-10 justify-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:gap-16">
      {items?.map((country) => (
        <Link
          to={`/country/${country.alpha3Code}`}
          state={country}
          key={country.alpha3Code}
        >
          <div className="flex flex-col h-[350px]  bg-white dark:bg-DarkBlue cursor-pointer rounded-md hover:-translate-y-2 hover:duration-500 shadow-md">
            <div className="h-[170px]">
              <img
                alt={country.name}
                src={country.flags.svg}
                className="rounded-t-md w-full max-h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center pl-6 pt-6 space-y-0.5">
              <h1 className="font-bold text-lg pb-3">{country.name}</h1>
              <div className="flex flex-row">
                <p className="font-semibold text-sm">Population:</p>&nbsp;
                <p className=" text-sm font-light">
                  {country.population.toLocaleString()}
                </p>
              </div>

              <div className="flex flex-row">
                <p className="font-semibold  text-sm">Region:</p>&nbsp;
                <p className=" text-sm font-light">{country.region}</p>
              </div>
              <div className="flex flex-row">
                <p className="font-semibold  text-sm">Capital:</p>&nbsp;
                <p className="text-sm font-light">{country.capital}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Countries
