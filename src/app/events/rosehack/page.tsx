import LookDown from "@/components/events/lookdown";
import hearts from "@/public/eventspage/hearts.webp";

const Page = () => {
  return (
    <>
      <LookDown
        titleText="What is Rose Hack?"
        sideImage={hearts}
        content="Rose Hack is a hackathon dedicated to uplifting underrepesented communities in the engineering field. The hackathon encourages participants to create projects, attend workshops, enjoy games, and talk to industry professionals! The hackathon has been around for ___ years and continues to thrive."
      />
    </>
  );
};

export default Page;
