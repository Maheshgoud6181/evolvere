import { BrowserRouter } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Header from './components/Header'
import About from './components/About'
import EventList from './components/EventList'
import Footer from './components/Footer'
import Form from './components/Form'
import Team from './components/Team'
import Faculty from './components/Faculty'
import Gallery from './components/Gallery'
import Loader from './components/Loader/loader' 

import './App.css'
import './styles/global.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;   
  }

  return (
    <BrowserRouter>
      <Header />
      <About />
      <EventList />
      <Gallery />
      <Faculty />
      <Team />
      <Form />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
