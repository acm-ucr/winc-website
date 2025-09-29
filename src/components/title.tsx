interface TitleProps {
  title: string;
  subtitle: string;
}

const Title = ({ title, subtitle }: TitleProps) => {
  return (
    <div className="flex flex-col gap-4 text-center">
      <h1 className="border-tr-bl px-8 pb-4 pt-6 text-8xl">{title}</h1>
      <p className="text-2xl text-gray-500">{subtitle}</p>
    </div>
  );
};

export default Title;
