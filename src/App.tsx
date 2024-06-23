import PageContainer from './components/layout/PageContainer'
import Sidebar from './components/layout/Sidebar'
import { Route, Switch } from 'wouter'
import AboutPage from './pages/About.page'
import NotFoundPage from './pages/NotFound.page'
import ExperiencePage from './pages/Experience.page'

export default function App() {
  return (
    <div className="drawer h-full lg:drawer-open">
      <input type="checkbox" className="drawer-toggle" />

      <PageContainer>
        <Switch>
          <Route path='/'>
            <ExperiencePage />
          </Route>

          <Route path='/about'>
              <AboutPage />
          </Route>

          <Route>
              <NotFoundPage />
          </Route>
        </Switch>
      </PageContainer>

      <Sidebar />
    </div>
  )
}
