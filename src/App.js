import logo from './logo.svg';
import './App.css';
import Posts from './Components/StaticData/Posts';
import PostsDynamic from './Components/StaticData/PostsDynamic';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './Components/Routing/Nav';
import Home from './Components/Routing/Home';
import About from './Components/Routing/About';
import Page1 from './Components/Routing/Page1';
import Page2 from './Components/Routing/Page2';
import NotFound from './Components/Routing/NotFound';

function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Route path="/" exact>
      <Home/>
    </Route>
    <Route path="/about">
      <About/>
    </Route>
    <Route path="/pg1">
      <Page1/>
    </Route>
    <Route path="/pg2">
      <Page2/>
    </Route>
    <Route path="/404">
      <NotFound/>
    </Route>
    </BrowserRouter>

    {/* <Posts/> */}
    {/* <PostsDynamic/> */}
    </>
  );
}

export default App;
