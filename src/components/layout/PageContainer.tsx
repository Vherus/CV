import { PropsWithChildren } from 'react'
import TabBar from './TabBar'

export default function PageContainer({ children }: PropsWithChildren) {
  return (
    <main className="drawer-content flex flex-col bg-grey-dark">
      <TabBar />

      <label htmlFor="drawer-toggle" className="drawer-button lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </label>

      <section className='p-3'>
        {children}
      </section>
    </main>
  )
}