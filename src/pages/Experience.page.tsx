import ExperienceBlock from "../components/experience/ExperienceBlock"
import { useData } from "../context/DataContext"

export default function ExperiencePage() {
  const { experience, isLoading } = useData()

  return (
    <section>
      {isLoading && <p>Gaining experience...</p>}
      {experience.map((exp, index) => <ExperienceBlock key={exp.id} experience={exp} showBreak={index > 0} />)}
    </section>
  )
}