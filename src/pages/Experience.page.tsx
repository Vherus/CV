import { getExperience } from "../api/apiClient"
import ExperienceBlock from "../components/experience/ExperienceBlock"

export default function ExperiencePage() {
  const experience = getExperience()

  return (
    <section>
      {experience.map((exp, index) => <ExperienceBlock experience={exp} showBreak={index > 0} />)}
    </section>
  )
}