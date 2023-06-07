import gitHub from '../../assets/images/icon-github.svg'
import linkedin from '../../assets/images/icon-linkedin.svg'
import frontendMentor from '../../assets/images/icon-frontend-mentor.svg'
import twitter from '../../assets/images/icon-twitter.svg'

import './navbar.css'

export default function Navbar() {
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <h2>lucasleite</h2>
      </div>
      <div className='app__navbar-social'>
        <a href="https://github.com/luc4sleite" target='_blank' rel='noopener noreferrer'><img src={gitHub} alt="GitHub" /></a>
        <a href="https://www.frontendmentor.io/profile/luc4sleite" target='_blank' rel='noopener noreferrer'><img src={frontendMentor} alt="Frontend Mentor" /></a>
        <a href="https://www.linkedin.com/in/lucas-g-leite/" target='_blank' rel='noopener noreferrer'><img src={linkedin} alt="LinkedIn" /></a>
        <a href="https://twitter.com/gleitelucas" target='_blank' rel='noopener noreferrer'><img src={twitter} alt="Twitter" /></a>
      </div>
    </nav>
  )
}
