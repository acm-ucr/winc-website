import Title from "@/components/Title";
import We from "@/components/about/We";
import Services from "@/components/about/Services";
import What from "@/components/about/What";

const About = () => {
  return (
    <>
      <Title text="About" textcolor="text-winc-black" />
      <What />
      <We />
      <Services />
    </>
  );
};

export default About;
