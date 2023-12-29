import Stats from "@/components/home/Stats";
import Introduction from "@/components/home/Introduction";
import Empower from "@/components/home/Empower";
import Services from "@/components/home/Services";
import CalendarEvents from "@/components/events/CalendarEvents";
const Home = () => {
  return (
    <>
      <Introduction />
      <Empower />
      <Stats />
      <Services />
      <CalendarEvents limited={true} show={true} />
    </>
  );
};

export default Home;
