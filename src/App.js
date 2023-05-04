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
import UseStateEx from './Components/Hooks/UseStateEx';
import UseEffectEx from './Components/Hooks/UseEffectEx';
import Users from './Components/Routing/Users';
import Tesco from './Components/DataRequ/Tesco';

function App() {
  return (
    <>
    <Tesco/>
    {/* <UseStateEx/> */}
    {/* <UseEffectEx/> */}

    {/* <BrowserRouter>
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
    <Route path="/users/:id/:name">
      <Users/>
    </Route>
    <Route path="/404">
      <NotFound/>
    </Route>
    </BrowserRouter> */}

    {/* <Posts/> */}
    {/* <PostsDynamic/> */}
    </>
  );
}

export default App;
