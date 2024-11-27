import { 
  background, 
  black_shadow, 
  logo, 
  sun_rays, 
  fog_1, fog_2, 
  mountain_1, mountain_2 
} from './assets/images/landingPage/index.js';

function App() {

  return (
    <>
    <header>
      <nav>
        <img src={logo} alt='Logo' className='logo'/>
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#">PROJECT</a></li>
          <li><a href="#">CURRICULUM</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
      </nav>
      
    </header>
    </>
  )
}
export default App
