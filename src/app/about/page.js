import We from "@/components/about/We";
import What from "@/components/about/What";
import Services from "@/components/about/Services";
import Title from "@/components/Title";

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
