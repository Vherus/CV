import { Link } from "wouter"

interface Props {
  icon: JSX.Element
  label: string
  linkTo: string
}

export default function Tab({ icon, label, linkTo }: Props) {
  const className = 'btn h-full rounded-none bg-grey-darker tab border-0 no-animation transition-none'

  return (
    <li className="h-full border-b-0">
      <Link href={linkTo} className={(active) => `${className} ${active ? 'tab-selected' : ''}`}>{icon} {label}</Link>
    </li>
  )
}