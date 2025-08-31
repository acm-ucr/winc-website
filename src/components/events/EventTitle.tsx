interface eventTitleProps {
  text: string;
}

const EventTitle = ({ text }: eventTitleProps) => {
  return (
    <div className="w-fit text-center text-4xl text-winc-black-100 md:text-right">
      {text}
      <div className="mt-2 w-1/5 justify-self-center border-2 border-winc-red-600 md:mr-8 md:justify-self-end" />
    </div>
  );
};

export default EventTitle;
