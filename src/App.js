import {BrowserRouter} from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'
import EventList from './components/EventList'
import Footer from './components/Footer'
import Form from './components/Form'
import Team from './components/Team'
import Faculty from './components/Faculty'
import Opportunities from './components/Opportunities'

import './App.css'
import './styles/global.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => (
  <BrowserRouter>
  <Header/>
  <About />
  <EventList />
  <Opportunities />
  <Faculty/>
  <Team />
  <Form />
  <Footer />
  </BrowserRouter>
)

export default App