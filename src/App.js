import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SideNav from './Components/Navs/SideNav';
import TopNav from './Components/Navs/TopNav';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <TopNav />
        <SideNav />
        
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
