interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <div className="flex w-1/6 flex-col items-center text-4xl font-bold">
      {title}
      <div className="mt-3 w-4/5 bg-winc-red-700 py-1" />
      <div className="w-2/3 bg-winc-red-200 py-1" />
    </div>
  );
};

export default Title;
