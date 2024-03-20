import './App.css';
import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <NavigationBar />
      <HeroSection />
    </Fragment>
  );
}

export default App;
