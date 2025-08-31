interface StatCardProps {
  icon: React.ReactNode;
  stat: string;
  text: string;
}

const StatCard = ({ icon, stat, text }: StatCardProps) => {
  return (
    <div className="w-2/3 items-center rounded-full border-8 border-winc-yellow-200 bg-white py-4 ring-8 ring-winc-orange-100 md:w-64 md:px-2">
      <div className="flex flex-row flex-wrap items-center justify-center gap-6">
        <div className="text-4xl text-winc-red-400 md:text-5xl">{icon}</div>
        <div className="flex items-center md:flex-col md:items-start">
          <p className="text-3xl font-bold text-winc-red-400 md:-mb-3 md:text-5xl">
            {stat}
          </p>
          <p className="w-full pl-2 text-2xl font-bold md:pl-1">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
