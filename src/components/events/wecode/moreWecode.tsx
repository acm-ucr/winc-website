import NewPeople from "@/public/eventspage/wecode/NewPeople.webp";
import GuestSpeaker from "@/public/eventspage/wecode/GuestSpeaker.webp";
import SoManyFirsts from "@/public/eventspage/wecode/SoManyFirsts.webp";
import YearCard from "../yearCard";

const MoreWecode = () => {
  return (
    <div className="mx-auto w-10/12 p-4 md:p-8">
      <YearCard
        title="Meeting New People!"
        description="Many students go to this event, UCR students try to engage with everyone to gain an enriching experience."
        image={NewPeople}
        reverse={false}
        year="'24-25"
      />
      <YearCard
        title="Guest Speakers!"
        description="Fantastic individuals sharing their experience in the technical world."
        image={GuestSpeaker}
        reverse={true}
        year="'24-25"
      />
      <YearCard
        title="So Many Firsts!"
        description="It was many WINCies firsts when experiencing WeCode, there are plenty more firsts to share with WINC!"
        image={SoManyFirsts}
        reverse={false}
        year="'24-25"
      />
    </div>
  );
};

export default MoreWecode;
