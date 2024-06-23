import { PropsWithChildren } from 'react'
import TabBar from './TabBar'

export default function PageContainer({ children }: PropsWithChildren) {
  return (
    <main className="drawer-content flex flex-col bg-grey-dark">
      <TabBar />

      <section className='p-3'>
        {children}
      </section>
    </main>
  )
}