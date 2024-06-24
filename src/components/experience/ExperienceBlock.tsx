import { Experience } from "../../api/apiClient";

interface Props {
  experience: Experience
  showBreak: boolean
}

export default function ExperienceBlock({ experience, showBreak }: Props) {
  return (
    <article key={experience.id} className="p-4 pt-2">
      {showBreak && <><hr className="w-8 mb-7"/></>}

      <h2 className="color-entity text-xl font-code">
        <span className="color-keyword">position </span>
        {experience.title}
      </h2>

      <h3 className="color-entity text-lg font-code">
        <span className="color-keyword">company </span>
        {experience.company}
        <em className="color-comment font-normal"> // {experience.dateFrom} - {experience.dateTo}</em>
      </h3>

      {experience.description.split('\n\n').map((desc, i) => (<p key={`exp-${experience.id}-desc-${i}`} className="text-lg py-1">{desc}</p>))}

      <small className="color-string text-base font-code">{experience.tech.join(', ')}</small>
    </article>
  )
}