// import Upcoming from "@/components/events/Upcoming";
import Title from "@/components/Title";
import CalendarEvents from "@/components/events/CalendarEvents";
const Events = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-8">
        <Title text="Programs & Events" textcolor="text-winc-black" />
        <div className="flex justify-center">
          <div className="bg-winc-pink w-14 h-1 mt-6 mb-3"></div>
        </div>
      </div>
      <CalendarEvents show={false} />
      {/* <Upcoming /> */}
    </>
  );
};

export default Events;
