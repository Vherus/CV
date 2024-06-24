import { PropsWithChildren, ReactNode } from 'react'
import './styles/fileExplorer.css'

export default function FileExplorer({ children }: PropsWithChildren) {
  return (
    <ul className="menu menu-md fe-bg-dark max-w-xs w-60 h-full p-3">
      {(children as ReactNode[]).map((child, i) => <li key={i}>{child}</li>)}
    </ul>
  )
}