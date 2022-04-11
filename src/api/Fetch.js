import { useEffect, useState } from "react"
import axios from "axios"

const Fetch = (url) => {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const fetchData = async () => {
    const response = await axios.get(url)

    setData(response)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [url])

  return { data, isLoading }
}

export default Fetch
