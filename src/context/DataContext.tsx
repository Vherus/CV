import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";
import { Experience, getExperience } from "../api/apiClient";

export interface DataCtx {
  isLoading: boolean
  experience: Experience[]
}

export const DataContext = createContext<DataCtx>({
  isLoading: true,
  experience: []
})

export const DataProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(true)
  const [experience, setExperience] = useState<Experience[]>([])

  async function loadData() {
    const exp = await getExperience()

    setIsLoading((_) => {
      setExperience(exp)
      return false
    })
  }

  useEffect(() => {
    loadData()
  }, [])

  const value = {
    isLoading,
    experience
  }

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

export const useData = () => useContext(DataContext)