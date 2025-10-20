import MoreWecode from "@/components/events/wecode/moreWecode";
import LookDown from "@/components/events/lookdown";
import BoardPictureCard from "@/components/events/picturecard";
import Selfie from "@/public/eventspage/wecode/selfie.webp";
import weCode from "@/public/eventspage/weCode.webp";
import redBackground from "@/public/eventspage/redBackground.svg";
import Header from "@/components/events/header";

const Page = () => {
  return (
    <>
      <Header title="WeCode" subtitle="2025" />
      <LookDown
        titleText="What is WECode?"
        sideImage={redBackground}
        sideImage2={weCode}
        content="WECode is a Harvard based conference run by students. It is a space that highlights underrepresented communities. It is THE largest student run Women in Computer Science run conference in the US."
        content2="WINC came up with the funding to send a few members there to enjoy the experience first hand."
      />
      <BoardPictureCard title="Selfie!" image={Selfie} />
      <MoreWecode />
    </>
  );
};

export default Page;
