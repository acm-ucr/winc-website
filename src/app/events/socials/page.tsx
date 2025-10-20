import WhatIs from "@/components/events/rosehack/whatisrosehack";
import BoardPictureCard from "@/components/events/picturecard";
import GameSocial from "@/public/eventspage/moresocials/gamesocial.webp";
import hearts from "@/public/eventspage/hearts.webp";
import Header from "@/components/events/header";
import MoreSocials from "@/components/events/moresocials/moresocials";

const Page = () => {
  return (
    <>
      <Header title="Socials" subtitle="over the years" />
      <WhatIs
        titleText="What kind of socials do we host?"
        sideImage={hearts}
        content="We host all kinds of socials! We host game days, workshops, general meetings, etc. We aim to make everyone feel included through these events."
        content2="WINC is a community! In order to strengthen our community we host events that help students bond with each other. All are welcome!"
      />
      <BoardPictureCard title="Game Social" image={GameSocial} />
      <MoreSocials />
    </>
  );
};

export default Page;
