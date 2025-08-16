import './index.css';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import InfoSection from './components/InfoSection/InfoSection';

export default function App () {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <InfoSection />
      </main>
    </>

  )
};