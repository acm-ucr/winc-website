interface eventTitleProps {
  text: string;
}

const EventTitle = ({ text }: eventTitleProps) => {
  return (
    <div className="w-fit text-right text-4xl text-winc-black-100">
      {text}
      <div className="mr-8 mt-2 w-1/5 justify-self-end border-4 border-winc-red-600" />
    </div>
  );
};

export default EventTitle;
