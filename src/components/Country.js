import React from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { MdOutlineKeyboardBackspace } from "react-icons/md"

const Country = ({ getCountryborder }) => {
  const location = useLocation()
  const country = location.state
  const navigate = useNavigate()
  console.log(country)
  return (
    <div className="bg-VeryLightGray dark:bg-VeryDarkBlue sm:h-screen min-h-screen flex flex-col sm:px-10 sm:pt-8  ">
      <button
        aria-label="back"
        className="bg-white dark:bg-DarkBlue dark:hover:bg-gray-700 flex shadow-md items-center justify-center gap-2 w-24 font-light text-sm h-8 ml-7 mt-10 mb-10 rounded-md sm:w-28 hover:bg-gray-100 duration-500 "
        onClick={() => navigate(-1)}
      >
        <MdOutlineKeyboardBackspace className="text-xl" />
        Back
      </button>
      <div className="lg:grid lg:grid-cols-2 lg:items-center">
        <div className="flex justify-center items-center px-7 sm:h-[350px]  ">
          <img
            alt={country.name}
            src={country?.flags?.svg}
            className=" h-full w-full object-contain
             "
          />
        </div>
        <div className="flex flex-col m-7 mt-11 sm:w-full ">
          <div>
            <h1 className="font-extrabold text-xl mb-5 sm:text-3xl">
              {country.name}
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-40 lg:mb-6">
            <div>
              <div className="flex flex-row text-sm mb-3">
                <p>Native Name:</p>&nbsp;
                <p className="font-light">{country.nativeName}</p>
              </div>
              <div className="flex flex-row text-sm mb-3">
                <p>Population:</p>&nbsp;
                <p className="font-light">
                  {country.population.toLocaleString()}
                </p>
              </div>
              <div className="flex flex-row text-sm mb-3">
                <p>Region:</p>&nbsp;
                <p className="font-light">{country.region}</p>
              </div>
              <div className="flex flex-row text-sm mb-3">
                <p>Sub Region:</p>&nbsp;
                <p className="font-light">{country.subregion}</p>
              </div>
              <div className="flex flex-row text-sm mb-10">
                <p>Capital:</p>&nbsp;
                <p className="font-light">{country.capital}</p>
              </div>
            </div>
            <div>
              <div className="flex flex-row text-sm mb-3">
                <p>Top Level Domain:</p>&nbsp;
                <p className="font-light">
                  {country.topLevelDomain.map((domain) => {
                    return domain
                  })}
                </p>
              </div>
              <div className="flex flex-row text-sm mb-3">
                <p>Currencies:</p>&nbsp;
                <p className="font-light">
                  {country.currencies.map((currency) => {
                    return currency.name
                  })}
                </p>
              </div>
              <div className="flex flex-row text-sm mb-10">
                <p>Languages:</p>&nbsp;
                {
                  <p className="font-light">
                    {country.languages.map((languages) => {
                      return languages.name
                    })}
                  </p>
                }
              </div>
            </div>
          </div>
          <div>
            {country?.borders?.length >= 1 && (
              <>
                <div className="lg:flex lg:flex-row ">
                  <p className="mb-4">Border Countries:</p>&nbsp;
                  <div className="grid grid-cols-3 gap-3 sm:grid-cols-5 lg:flex lg:flex-wrap">
                    {country?.borders?.map((country) => {
                      const borderCountry = getCountryborder(country)

                      return (
                        <Link
                          className="font-light shadow-sm  text-xs bg-white dark:bg-DarkBlue dark:hover:bg-gray-700 h-7 flex 
                          rounded-sm justify-center items-center text-center sm:w-20 overflow-hidden hover:bg-gray-100 duration-500"
                          state={borderCountry}
                          key={country}
                          to={`/country/${borderCountry.alpha3Code}`}
                        >
                          {borderCountry.name}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Country
