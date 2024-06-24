export default function AboutPage() {
  return (
    <article>
      <p className="mb-3">This app is a WIP but please feel free to browse the github repositories:</p>
      <ul className="mb-3">
        <li><a className="color-keyword" href="https://github.com/vherus/cv" target="_blank">Client (React, Typescript, Tailwind)</a></li>
        <li><a className="color-keyword" href="https://github.com/vherus/cv-server" target="_blank">Server (Express, Typescript)</a></li>
      </ul>
      <p>Please note that these are incomplete. I will be adding polish, tests, Context, a Postgres DB and perhaps an ORM like Prisma.</p>
    </article>
  )
}