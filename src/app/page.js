import Title from "@/components/Title";
import Circle from "@/components/home/Circle";
import about2 from "@/public/assets/about2.webp";
// import Stats from "@/components/home/Stats";
const Home = () => {
  return (
    <>
      <Title text="Home" />
      <Circle width="80" height="80" image={about2} />
    </>
  );
};

export default Home;
