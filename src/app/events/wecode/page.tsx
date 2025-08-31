import MoreWecode from "@/components/events/wecode/moreWecode";
import LookDown from "@/components/events/LookDown";

import weCode from "@/public/events/weCode.webp";
import redBackground from "@/public/events/redBackground.svg";

const Page = () => {
  return (
    <div>
      <LookDown
        titleText="What is WECode?"
        sideImage={weCode}
        sideImage2={redBackground}
        content="WECode is a Harvard based conference run by students. It is a space that highlights underrepresented communities. It is THE largest student run Women in Computer Science run conference in the US."
        content2="WINC came up with the funding to send a few members there to enjoy the experience first hand."
      />
      <MoreWecode />
    </div>
  );
};

export default Page;
