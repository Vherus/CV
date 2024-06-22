import { Link } from 'wouter'
import './fileExplorer.css'

interface Props {
  icon: JSX.Element
  label: string
  linkTo: string
}

export default function File({ icon, label, linkTo }: Props) {
  return (
    <li className='explorer-item'>
      <Link href={linkTo} className='py-1.5 text-base'>
        {icon} {label}
      </Link>
    </li>
  )
}