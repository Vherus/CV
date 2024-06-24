export interface Experience {
  id: number
  title: string
  company: string
  description: string
  dateFrom: string
  dateTo: string
  tech: string[]
}

export async function getExperience(): Promise<Experience[]> {
  const res = await fetch('http://localhost:3000/experience')
  const json = await res.json()

  return json.data
}