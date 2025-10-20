import IamRemarkable from "@/public/eventspage/moresocials/IAmRemarkable.webp";
import StudySession from "@/public/eventspage/moresocials/StudySession.webp";
import Tennis from "@/public/eventspage/moresocials/Tennis.webp";
import YearCard from "../yearCard";

const MoreSocials = () => {
  return (
    <div className="mx-auto md:w-10/12">
      <YearCard
        title="Study Session"
        description="A study session for all students to bond, while being productive for their rigorous classes."
        image={StudySession}
        reverse={false}
        year="'24-25"
      />
      <YearCard
        title="I am remarkable"
        description="A social event that encourages confidence and ignites support."
        image={IamRemarkable}
        reverse={true}
        year="'24-25"
      />
      <YearCard
        title="Tennis"
        description="A tennis social that held matches of singles and doubles."
        image={Tennis}
        reverse={false}
        year="unknown year"
      />
    </div>
  );
};

export default MoreSocials;
