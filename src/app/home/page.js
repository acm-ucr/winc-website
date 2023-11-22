import Title from "@/components/Title";
import Stats from "@/components/home/Stats";
import Introduction from "@/components/home/Introduction";
import Empower from "@/components/home/Empower";
import Services from "@/components/home/Services";
const Home = () => {
  return (
    <>
      <Title text="Home" textcolor="text-winc-black" />
      <Introduction />
      <Empower />
      <Stats />
      <Services />
    </>
  );
};

export default Home;
