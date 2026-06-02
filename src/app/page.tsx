import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import LogoStrip from '@/components/LogoStrip';
import SocialProof from '@/components/SocialProof';
import Pillars from '@/components/Pillars';
import HowItWorks from '@/components/HowItWorks';
import Templates from '@/components/Templates';
import Intelligence from '@/components/Intelligence';
import UseCases from '@/components/UseCases';
import FeatureGrid from '@/components/FeatureGrid';
import Privacy from '@/components/Privacy';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import DownloadSection from '@/components/DownloadSection';
import ParallaxFooter from '@/components/ParallaxFooter';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <LogoStrip />
      <SocialProof />
      <Pillars />
      <HowItWorks />
      <Templates />
      <Intelligence />
      <UseCases />
      <FeatureGrid />
      <Privacy />
      <Testimonials />
      <Pricing />
      <DownloadSection />
      <ParallaxFooter />
    </main>
  );
}
