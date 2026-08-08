import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { FloatingRegisterButton } from './components/registration/FloatingRegisterButton'
import { RegistrationModal } from './components/registration/RegistrationModal'
import { Curriculum } from './components/sections/Curriculum'
import { FAQ } from './components/sections/FAQ'
import { FinalCTA } from './components/sections/FinalCTA'
import { Hero } from './components/sections/Hero'
import { Roadmap } from './components/sections/Roadmap'
import { WhyChoose } from './components/sections/WhyChoose'
import { RegistrationModalProvider } from './context/RegistrationModalContext'

export default function App() {
  return (
    <RegistrationModalProvider>
      <Header />
      <main>
        <Hero />
        <WhyChoose />
        <Curriculum />
        <Roadmap />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <RegistrationModal />
      <FloatingRegisterButton />
    </RegistrationModalProvider>
  )
}
