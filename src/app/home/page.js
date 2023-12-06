import Stats from "@/components/home/Stats";
import Introduction from "@/components/home/Introduction";
import Empower from "@/components/home/Empower";
import Services from "@/components/home/Services";
import CalendarEvents from "@/components/events/CalendarEvents";
import Button from "@/components/home/Button";
import Link from "next/link";
const Home = () => {
  return (
    <>
      <Introduction />
      <Empower />
      <Stats />
      <Services />
      <CalendarEvents limited={true} />
      <div className="flex justify-center items-center mb-24">
        <Link href="/events">
          <Button text="See Calendar" />
        </Link>
      </div>
    </>
  );
};

export default Home;
