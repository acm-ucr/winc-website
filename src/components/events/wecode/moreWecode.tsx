import NewPeople from "@/public/events/wecode/NewPeople.jpg";
import GuestSpeaker from "@/public/events/wecode/GuestSpeaker.jpg";
import SoManyFirsts from "@/public/events/wecode/SoManyFirsts.jpg";
import Image from "next/image";

const EventSection = ({
  title,
  description,
  image,
  imageAlt,
  reverseLayout = false,
}: {
  title: string;
  description: string;
  image: any;
  imageAlt: string;
  reverseLayout?: boolean;
}) => {
  const textContent = (
    <div className="flex flex-1 flex-col justify-center p-8 text-center md:text-right">
      <p className="text-3xl font-bold text-gray-800">{title}</p>
      <div className="mb-2 flex items-center justify-center gap-2 md:justify-end">
        <p className="text-sm text-winc-gray-100">'24-25</p>
        <div className="h-1 w-8 bg-winc-red-600"></div>
      </div>
      <p className="text-xl leading-relaxed text-gray-600">{description}</p>
    </div>
  );

  const imageContent = (
    <div className="relative flex flex-1 items-center justify-center">
      <div
        className={`absolute top-0 -z-10 h-full w-full transform bg-winc-red-400 ${reverseLayout ? "right-0 translate-x-4 md:left-0 md:-translate-x-4" : "right-0 translate-x-4"} -translate-y-4`}
      ></div>
      <div className="relative z-10">
        <Image
          alt={imageAlt}
          src={image}
          className="object-cover"
          width={300}
          height={350}
        />
      </div>
    </div>
  );

  return (
    <div
      className={`flex flex-col md:flex-row ${reverseLayout ? "md:flex-row-reverse" : "md:flex-row"} mb-16 items-center gap-8`}
    >
      {textContent}
      {imageContent}
    </div>
  );
};

const MoreWecode = () => {
  return (
    <div className="mx-auto max-w-3xl p-4 md:p-8">
      <EventSection
        title="Meeting New People!"
        description="Many students go to this event, UCR students try to engage with everyone to gain an enriching experience."
        image={NewPeople}
        imageAlt="Meeting New People"
        reverseLayout={false}
      />

      <EventSection
        title="Guest Speakers!"
        description="Fantastic individuals sharing their experience in the technical world."
        image={GuestSpeaker}
        imageAlt="Guest Speakers"
        reverseLayout={true}
      />

      <EventSection
        title="So Many Firsts!"
        description="It was many WINCies firsts when experiencing WeCode, there are plenty more firsts to share with WINC!"
        image={SoManyFirsts}
        imageAlt="So Many Firsts"
        reverseLayout={false}
      />
    </div>
  );
};

export default MoreWecode;
