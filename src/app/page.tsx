import UpcomingEvents from "@/components/calendar/upcomingevents/upcomingevents";
import GrowAndThrive from "@/components/home/growandthrive";
import Landing from "@/components/home/landing";
import Mai from "@/components/home/mai";
import Stats from "@/components/home/stats";

const Home = () => {
  return (
    <>
      <Landing />
      <Stats />
      <Mai />
      <GrowAndThrive />
      <UpcomingEvents />
    </>
  );
};

export default Home;
