import { Link } from 'wouter'
import './fileExplorer.css'

interface Props {
  icon: JSX.Element
  label: string
  linkTo: string
}

export default function File({ icon, label, linkTo }: Props) {
  return (
    <li className='explorer-item text-lg'>
      <Link href={linkTo}>
        {icon} {label}
      </Link>
    </li>
  )
}