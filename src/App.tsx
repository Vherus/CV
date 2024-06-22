import PageContainer from './components/layout/PageContainer'
import Sidebar from './components/layout/Sidebar'
import { Route, Switch } from 'wouter'

export default function App() {
  return (
    <div className="drawer h-full lg:drawer-open">
      <input id="drawer-toggle" type="checkbox" className="drawer-toggle" />

      <Switch>
        <Route path='/'>
          <PageContainer>
            <p>Main</p>
          </PageContainer>
        </Route>

        <Route>
          <PageContainer>
            <p>404!</p>
          </PageContainer>
        </Route>
      </Switch>

      <Sidebar />
    </div>
  )
}
