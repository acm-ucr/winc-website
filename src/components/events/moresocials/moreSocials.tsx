import EventSection from "@/components/events/eventsection";
import IamRemarkable from "@/public/eventspage/moresocials/IAmRemarkable.webp";
import StudySession from "@/public/eventspage/moresocials/StudySession.webp";
import Tennis from "@/public/eventspage/moresocials/Tennis.webp";

const MoreSocials = () => {
  return (
    <div className="mx-auto w-11/12">
      <EventSection
        title="Study Session"
        description="A study session for all students to bond, while being productive for their rigorous classes."
        image={StudySession}
        imageAlt="Study Session"
        reverseLayout={false}
      />

      <EventSection
        title="I am remarkable"
        description="A social event that encourages confidence and ignites support."
        image={IamRemarkable}
        imageAlt="I am remarkable"
        reverseLayout={true}
      />

      <EventSection
        title="Tennis"
        description="A tennis social that held matches of singles and doubles."
        image={Tennis}
        imageAlt="Tennis"
        reverseLayout={false}
      />
    </div>
  );
};

export default MoreSocials;
