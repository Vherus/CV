import tsIcon from './assets/icons/ts.png'
import './App.css'
import DirectorySVG from './components/svg/DirectorySVG'

export default function App() {
  return (
    <div className="drawer h-full lg:drawer-open">
      <input id="drawer-toggle" type="checkbox" className="drawer-toggle" />

      <main className="drawer-content flex flex-col items-center justify-center">
        <label htmlFor="drawer-toggle" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        <p>Main</p>
      </main>

      <aside className="drawer-side">
        <ul className="menu menu-xs bg-base-200 rounded-lg max-w-xs w-60 h-full">
          <li><label htmlFor="drawer-toggle" aria-label="close sidebar" className="drawer-overlay lg:hidden">Close</label></li>

          <li>
            <details open>
              <summary>
                <DirectorySVG /> src
              </summary>

              <ul>
                <li className='explorer-item'>
                  <a>
                    <img src={tsIcon} />experience.ts
                  </a>
                </li>
                <li className='explorer-item'>
                  <a>
                    <img src={tsIcon} />experience.spec.ts
                  </a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      
      </aside>
    </div>
  )
}
