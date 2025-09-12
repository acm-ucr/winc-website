import MoreWecode from "@/components/events/wecode/moreWecode";
import LookDown from "@/components/events/lookdown";
import weCode from "@/public/eventspage/weCode.webp";
import redBackground from "@/public/eventspage/redBackground.svg";

const Page = () => {
  return (
    <div>
      <LookDown
        titleText="What is WECode?"
        sideImage={redBackground}
        sideImage2={weCode}
        content="WECode is a Harvard based conference run by students. It is a space that highlights underrepresented communities. It is THE largest student run Women in Computer Science run conference in the US."
        content2="WINC came up with the funding to send a few members there to enjoy the experience first hand."
      />
      <MoreWecode />
    </div>
  );
};

export default Page;
