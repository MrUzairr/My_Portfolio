import './App.css';
import {Switch,Route} from 'react-router-dom'
import Home from './Pages/Home';
import WebPage from './Pages/WebPage';
import WebDetail from './Pages/WebDetail';
function App() {

  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/web' component={WebPage} />
        <Route exact path='/web-detail/:id' component={WebDetail} />
      </Switch>
    </div>
  );
}

export default App;
