import './fileExplorer.css'

interface Props {
  icon: JSX.Element
  label: string
}

export default function File({ icon, label }: Props) {
  return (
    <li className='explorer-item'>
      <a>
        {icon} {label}
      </a>
    </li>
  )
}