import React, { createContext, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Country from "./components/Country"
import Fetch from "./api/Fetch"

export const ThemeContext = createContext()

function App() {
  const [theme, setTheme] = useState(false)

  const getAll = Fetch("https://restcountries.com/v2/all")
  const { data, isLoading } = getAll
  if (isLoading == true) {
    return (
      <div className="bg-white dark:bg-VeryDarkBlue flex justify-center items-center text-center text-4xl font-bold">
        Please Wait ...
      </div>
    )
  }

  const getCountryborder = (code) => {
    const country = data.data.filter((country) => {
      return country.alpha3Code === code
    })
    const countrydetail = country[0]
    return countrydetail
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`${theme ? "dark" : ""}`}>
        <div className="dark:text-white text-LightText">
          <Router>
            <Navbar setTheme={setTheme} theme={theme} />
            <Routes>
              <Route path="/" exact element={<Home fetchData={getAll} />} />
              <Route
                exact
                path="/country/:name"
                element={<Country getCountryborder={getCountryborder} />}
              />
            </Routes>
          </Router>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
