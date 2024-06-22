import { PropsWithChildren, ReactNode } from 'react'

export default function FileExplorer({ children }: PropsWithChildren) {
  return (
    <ul className="menu menu-xs bg-base-200 rounded-lg max-w-xs w-60 h-full">
      {(children as ReactNode[]).map(child => <li>{child}</li>)}
    </ul>
  )
}