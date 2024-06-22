import { PropsWithChildren, ReactNode } from 'react'

export default function FileExplorer({ children }: PropsWithChildren) {
  return (
    <ul className="menu menu-md bg-base-200 rounded-lg max-w-xs w-60 h-full p-3">
      {(children as ReactNode[]).map(child => <li>{child}</li>)}
    </ul>
  )
}