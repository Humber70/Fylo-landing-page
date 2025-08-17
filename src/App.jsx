import './index.css';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import InfoSection from './components/InfoSection/InfoSection';
import Testimonials from './components/Testimonials/Testimonials';

export default function App () {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <InfoSection />
        <Testimonials />
      </main>
    </>

  )
};