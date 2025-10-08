import BoardPictureCard from "@/components/events/picturecard";
import LookDown from "@/components/events/lookdown";
import boardGroup from "@/public/eventspage/rosehack/boardGroup.webp";
import hearts from "@/public/eventspage/hearts.webp";

const Page = () => {
  return (
    <>
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
