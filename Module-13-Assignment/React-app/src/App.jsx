import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Home from './pages/home';
import Service from './pages/service';
import About from './pages/about';
import Project from './pages/project';
import Blog from './pages/blog';
import Contact from './pages/contact';

const App = () => {
  return (
    <Router>
      <nav>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/service">Service</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/project">Project</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <Switch>
        <Route path="/service" component={Service} />
        <Route path="/about" component={About} />
        <Route path="/project" component={Project} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
