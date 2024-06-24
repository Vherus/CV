export default function AboutPage() {
  return (
    <article>
      <p className="mb-3">This project is a WIP but please feel free to browse the github repositories:</p>
      <ul className="mb-3">
        <li className="mb-1">
          <a className="color-keyword" href="https://github.com/vherus/cv-server" target="_blank">Server (Express, Typescript)</a>
          <p><em>object oriented, repository pattern, zod for request validation, jest suite</em></p>
        </li>
        <li><a className="color-keyword" href="https://github.com/vherus/cv" target="_blank">Client (React, Typescript, Tailwind)</a></li>
      </ul>
    </article>
  )
}