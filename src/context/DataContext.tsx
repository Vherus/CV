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

  useEffect(() => {
    getExperience()
      .then((exp) => setIsLoading((_) => {
        setExperience(exp)

        return false
      }))
  }, [])

  const value = {
    isLoading,
    experience
  }

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

export const useData = () => useContext(DataContext)