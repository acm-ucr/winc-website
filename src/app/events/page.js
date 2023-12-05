// import Upcoming from "@/components/events/Upcoming";
import Title from "@/components/Title";
import CalendarEvents from "@/components/events/CalendarEvents";
const Events = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-winc-pink w-full p-8 outline outline-8 outline-winc-pink outline-offset-8 my-4">
        <Title text="Programs and Events" textcolor="text-winc-white" />
      </div>
      <CalendarEvents />
      {/* <Upcoming /> */}
    </>
  );
};

export default Events;
