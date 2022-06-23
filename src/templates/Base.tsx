import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import Cards from './Cards';
import { Footer } from './Footer';
// import { Hero } from './Hero';
import { Logo } from './Logo';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="antialiased text-gray-600 flex justify-center">
    <div>
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Logo />
      <Cards />
      {/* <Hero /> */}
      <VerticalFeatures />
      <Banner />
      <Footer />
    </div>
  </div>
);

export { Base };
