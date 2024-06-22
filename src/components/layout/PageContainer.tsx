import { PropsWithChildren } from 'react'

export default function PageContainer({ children }: PropsWithChildren) {
  return (
    <main className="drawer-content flex flex-col p-3">
      <label htmlFor="drawer-toggle" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
      {children}
    </main>
  )
}