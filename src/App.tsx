import Sidebar from './components/layout/Sidebar'

export default function App() {
  return (
    <div className="drawer h-full lg:drawer-open">
      <input id="drawer-toggle" type="checkbox" className="drawer-toggle" />

      <main className="drawer-content flex flex-col items-center justify-center">
        <label htmlFor="drawer-toggle" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        <p>Main</p>
      </main>

      <Sidebar />
    </div>
  )
}
