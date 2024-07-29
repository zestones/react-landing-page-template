
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import Community from './components/Community/Community'
import Unlock from './components/Unlock/Unlock'
import Achievements from './components/Achievements/Achievements'
import Banner from './components/Banner/Banner'

// Assets
import PhoneIcon from './assets/phone-icon.png';
import MobileIcon from './assets/mobile-login-icon.png';
import Footer from './components/Footer/Footer'


function App() {

  return (
    <>
      <Header />
      <HeroSection />
      <Community />
      <Unlock
        icon={PhoneIcon}
        title="The unseen of spending three <br />years at Pixelgrade"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
      />
      <Achievements />
      <Unlock
        icon={MobileIcon}
        title="How to design your site footer like <br />we did"
        description="Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida."
      />
      {/* <Banner />
      <Footer /> */}
    </>
  )
}

export default App
