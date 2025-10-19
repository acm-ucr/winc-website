import BoardPictureCard from "@/components/events/picturecard";
import LookDown from "@/components/events/lookdown";
import boardGroup from "@/public/eventspage/rosehack/boardGroup.webp";
import hearts from "@/public/eventspage/hearts.webp";
import Header from "@/components/events/header";
import Image from "next/image";
import logo from "@/public/eventspage/rosehack/logo.svg";
const Page = () => {
  return (
    <>
      <Header title="Rose Hack" subtitle="2024-2025" />
      <div className="flex justify-center pt-4">
        <Image src={logo} alt="rosehack pixels" />
      </div>
      <LookDown
        titleText="What is Rose Hack?"
        sideImage={hearts}
        content="Rose Hack is a hackathon dedicated to uplifting underrepesented communities in the engineering field. The hackathon encourages participants to create projects, attend workshops, enjoy games, and talk to industry professionals! The hackathon has been around for six years and continues to thrive."
      />
      <BoardPictureCard title="Board" image={boardGroup} />
    </>
  );
};

export default Page;
