import { useState } from 'react';
import { Link } from './components/Link';
import { About } from './pages/About';
import { Users } from './pages/Users';
import { Home } from './pages/Home';
import { useNavigation } from './hooks/useNavigation';
import './App.css';


function App() {
  const navigation = useNavigation();
  const render = navigation.pathname.slice(1);
  console.log(render)
    if(render === 'users') {
      return <Users/>
    } else if (render === 'about') {
      return <About/>
    } 
  

  return (
  <div>
    <header>
      <Link content="Home" toPage='/'/>
      <Link content="About" toPage='/about'/>
      <Link content="Users" toPage='/users'/>
    </header>
    <Home/>
  </div>
  );
}

export default App
