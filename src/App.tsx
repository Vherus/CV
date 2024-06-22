import PageContainer from './components/layout/PageContainer'
import Sidebar from './components/layout/Sidebar'
import { Route, Switch } from 'wouter'

export default function App() {
  return (
    <div className="drawer h-full lg:drawer-open">
      <input id="drawer-toggle" type="checkbox" className="drawer-toggle" />

      <PageContainer>
        <Switch>
          <Route path='/'>
              <p>Main</p>
          </Route>

          <Route path='/about'>
              <p>About</p>
          </Route>

          <Route>
              <p>404!</p>
          </Route>
        </Switch>
      </PageContainer>

      <Sidebar />
    </div>
  )
}
