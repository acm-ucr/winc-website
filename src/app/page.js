import Title from "@/components/Title";
import Frame from "@/components/about/Frame";
import about1 from "@/public/assets/about1.webp";
import about2 from "@/public/assets/about2.webp";

const About = () => {
  return (
    <>
      <Title text="About" />
      <Frame x={20} y={-20} picture={about1} />
      <Frame x={-20} y={20} picture={about2} />
    </>
  );
};

export default About;
