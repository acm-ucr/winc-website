import NewPeople from "@/public/eventspage/wecode/NewPeople.webp";
import GuestSpeaker from "@/public/eventspage/wecode/GuestSpeaker.webp";
import SoManyFirsts from "@/public/eventspage/wecode/SoManyFirsts.webp";
import EventSection from "@/components/events/eventsection";

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
