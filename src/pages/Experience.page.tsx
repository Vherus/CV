import { Link } from "wouter"
import ExperienceBlock from "../components/experience/ExperienceBlock"
import { useData } from "../context/DataContext"

export default function ExperiencePage() {
  const { experience, isLoading } = useData()

  return (
    <section>
      {isLoading && <p>Gaining experience...</p>}
      {!isLoading && <p className="mb-3">This app is a work in progress. View the <Link href="/about">about</Link> page for repository links.</p>}
      {experience.map((exp, index) => <ExperienceBlock key={exp.id} experience={exp} showBreak={index > 0} />)}
    </section>
  )
}