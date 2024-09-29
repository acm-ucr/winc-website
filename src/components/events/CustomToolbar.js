import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const CustomToolbar = (event) => {
  return (
    <div className="flex justify-center items-center font-bold text-3xl">
      <FaArrowLeft
        onClick={() => {
          event.onNavigate("PREV");
        }}
        className="text-winc-pink hover:cursor-pointer "
      />
      <div className="text-center text-2xl md:text-5xl p-4 text-winc-black">
        {monthNames[event.date.getMonth()]}
        &nbsp;
        {event.date.getFullYear() % 100}
      </div>
      <FaArrowRight
        onClick={() => event.onNavigate("NEXT")}
        className="text-winc-pink hover:cursor-pointer"
      />
    </div>
  );
};

export default CustomToolbar;
