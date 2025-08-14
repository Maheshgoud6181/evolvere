import {BrowserRouter} from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'
import Events from './components/Events'
import Footer from './components/Footer'
import Form from './components/Form'
import Team from './components/Team'
import Faculty from './components/Faculty'

import './App.css'
import './styles/global.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => (
  <BrowserRouter>
  <Header/>
  <About />
  <Events />
  <Faculty/>
  <Team />
  <Form />
  <Footer />
  </BrowserRouter>
)

export default App