import BoardPictureCard from "@/components/events/picturecard";
import boardGroup from "@/public/eventspage/rosehack/boardGroup.webp";
import hearts from "@/public/eventspage/hearts.webp";
import Header from "@/components/events/header";
import Image from "next/image";
import logo from "@/public/eventspage/rosehack/logo.svg";
import Projects from "@/components/events/rosehack/projects";
import WhatIs from "@/components/events/rosehack/whatis";
const Page = () => {
  return (
    <>
      <Header title="Rose Hack" subtitle="2024-2025" />
      <div className="flex justify-center pt-4">
        <Image src={logo} alt="rosehack pixels" />
      </div>
      <WhatIs
        titleText="What kind of socials do we host?"
        sideImage={hearts}
        content="We host all kinds of socials! We host game days, workshops, general meetings, etc. We aim to make everyone feel included through these events."
        content2="WINC is a community! In order to strengthen our community we host events that help students bond with each other. All are welcome!"
      />
      <BoardPictureCard title="Board" image={boardGroup} />
      <Projects />
    </>
  );
};

export default Page;
