import { useEffect, useState } from "react"
import axios from "axios"

const Fetch = (url) => {
  const [data, setData] = useState()
  const fetchData = async () => {
    const response = await axios.get(url)
    setData(response)
  }

  useEffect(() => {
    fetchData()
  }, [url])

  return data
}

export default Fetch
