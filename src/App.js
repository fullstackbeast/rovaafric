import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import SideNav from './Components/Navs/SideNav';
import TopNav from './Components/Navs/TopNav';
import About from './Pages/About';
import BlogPage from './Pages/Blog';
import BlogDetails from './Pages/BlogDetails';
import ContactUs from './Pages/ContactUs';
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
          <Route exact path='/contact' component={ContactUs} />
          <Route exact path='/blog' component={BlogPage} />
          <Route exact path='/blog/:slug' component={BlogDetails} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
