import LandingBanner from 'parts/LandingBanner';
import Section1 from 'parts/Section1';
import Section2 from 'parts/Section2';
import Section3 from 'parts/Section3';
import EggsExampleSection from 'parts/EggsExampleSection';
import MintSection from 'parts/MintSection';
import TeamSection from 'parts/TeamSection';
// import VideoSection from 'parts/VideoSection';
// import VIPSection from 'parts/VIPSection';
// import NFTInfoSection from 'parts/NFTInfoSection';
import RoadMapSection from 'parts/RoadMapSection';
import FooterBanner from 'parts/FooterBanner';

export default function Home() {
  return (
    <>
      <LandingBanner />
      <Section1 />
      <Section2 />
      <EggsExampleSection />
      <Section3 />
      <MintSection />
      <RoadMapSection />
      <TeamSection />
      <FooterBanner />
      {/* <VIPSection /> */}
      {/* <NFTInfoSection /> */}
      {/* <VideoSection /> */}
    </>
  );
}
