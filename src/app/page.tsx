import AboutUsSection from '../components/client/AboutUsSection';
import DemoSection from '../components/client/DemoSection';
import HeroSection from '../components/client/HeroSection';
import LiveUsersCount from '../components/client/LiveUsersCount';
import MeetTheTeam from '../components/client/MeetTheTeam';
import OurMission from '../components/client/OurMission';

export default function Home() {
  return (
    <>
      <HeroSection />
      <DemoSection />
      <MeetTheTeam />
      <LiveUsersCount />
    </>
  );
}
