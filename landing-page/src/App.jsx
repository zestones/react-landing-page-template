
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
        title="Découvrez les coulisses de la création <br />de Nexent"
        description="Chez Nexent, nous révolutionnons le commerce de gros des céréales avec des technologies de pointe et une plateforme innovante. Rejoignez-nous pour explorer les solutions qui transforment l'industrie agroalimentaire et découvrez comment nous facilitons les échanges commerciaux à travers le monde."
      />

      <Achievements />
      <Unlock
        icon={MobileIcon}
        title="Comment nous avons conçu notre <br />plateforme Nexent"
        description="Apprenez comment nous avons développé une plateforme innovante pour transformer le commerce de gros des céréales. Nous vous dévoilons les étapes clés de notre processus de conception, les défis que nous avons relevés et les solutions que nous avons mises en place pour faciliter les échanges commerciaux dans l'industrie agroalimentaire."
      />
      <Banner />
      <Footer />
    </>
  )
}

export default App
