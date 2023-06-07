import './App.css';
import Navbar from './components/Navbar';
import { Header, Skills, Projects, Contact, Footer } from './containers';

function App() {

  return (
    <div>
      <Navbar />
      <Header />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
