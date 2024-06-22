import { PropsWithChildren, ReactNode } from 'react'
import DirectorySVG from '../svg/DirectorySVG'

interface Props extends PropsWithChildren {
  header: ReactNode
  isOpen?: boolean
}

export default function Directory({ children, header, isOpen = true }: Props) {
  return (
    <details open={isOpen}>
      <summary className='text-base'>
        <DirectorySVG /> {header}
      </summary>

      <ul>
        {children}
      </ul>
    </details>
  )
}