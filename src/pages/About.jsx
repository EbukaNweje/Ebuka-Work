import PageHero from '../components/PageHero'
import AboutDetail from '../components/AboutDetail'
import Stats from '../components/Stats'
import FreeQuote from '../components/FreeQuote'

export default function About() {
  return (
    <>
      <PageHero title="About" />
      <AboutDetail />
      <Stats />
      <FreeQuote />
    </>
  )
}
