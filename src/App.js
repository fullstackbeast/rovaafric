import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import SideNav from './Components/Navs/SideNav';
import TopNav from './Components/Navs/TopNav';
import About from './Pages/About';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <TopNav />
        <SideNav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />

        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
