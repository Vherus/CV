import { Experience, getExperience } from "../api/apiClient"
import ExperienceBlock from "../components/experience/ExperienceBlock"
import { useEffect, useState } from "react"

export default function ExperiencePage() {
  const [experience, setExperience] = useState<Experience[]>([])

  useEffect(() => {
    getExperience().then(setExperience)
  }, [])

  return (
    <section>
      {experience.map((exp, index) => <ExperienceBlock key={exp.id} experience={exp} showBreak={index > 0} />)}
    </section>
  )
}