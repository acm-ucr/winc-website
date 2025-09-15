import LookDown from "@/components/events/lookdown";
import BoardPictureCard from "@/components/events/EventPictureCard";
import GameSocial from "@/public/events/picture/GameSocial.webp";
import hearts from "@/public/eventspage/hearts.webp";

const Page = () => {
  return (
    <>
      <LookDown
        titleText="What kind of socials do we host?"
        sideImage={hearts}
        content="We host all kinds of socials! We host game days, workshops, general meetings, etc. We aim to make everyone feel included through these events."
        content2="WINC is a community! In order to strengthen our community we host events that help students bond with each other. All are welcome!"
      />
      <BoardPictureCard title="Game Social" image={GameSocial} />
    </>
  );
};

export default Page;
