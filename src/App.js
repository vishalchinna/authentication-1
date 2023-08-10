import {Route, Switch} from 'react-router-dom'

import NotFound from './components/NotFound'
import Header from './components/Header'
import Home from './components/Home'

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <Header />
      <div className="app-body">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </div>
)
export default App
