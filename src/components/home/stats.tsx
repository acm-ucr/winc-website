import StatCard from "./statcard";
import { FaChalkboardTeacher, FaUserGraduate, FaUser } from "react-icons/fa";

const Stats = () => {
  return (
    <div className="w-full bg-winc-red-400 py-2">
      <div className="flex flex-col flex-wrap items-center justify-center gap-12 border-y-8 border-white bg-winc-red-400 py-12 md:flex-row">
        <StatCard
          icon={
            <FaChalkboardTeacher className="scale-125 transform md:-mr-1" />
          }
          stat="100+"
          text="Workshops"
        />
        <StatCard icon={<FaUser />} stat="500+" text="Members" />
        <StatCard
          icon={<FaUserGraduate className="md:ml-2" />}
          stat="1000+"
          text="Alumni"
        />
      </div>
    </div>
  );
};

export default Stats;
