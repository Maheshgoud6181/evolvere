import {BrowserRouter} from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'
import Events from './components/Events'
import Footer from './components/Footer'
import Form from './components/Form'
import Team from './components/Team'

import './App.css'
import Faculty from './components/Faculty'

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