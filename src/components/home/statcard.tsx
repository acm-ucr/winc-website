interface StatCardProps {
  icon: React.ReactNode;
  stat: string;
  text: string;
}

const StatCard = ({ icon, stat, text }: StatCardProps) => {
  return (
    <div className="w-1/5 items-center rounded-full border-8 border-winc-yellow-200 bg-white py-4 ring-8 ring-winc-orange-100">
      <div className="flex flex-row items-center justify-center gap-4">
        <div className="text-5xl text-winc-red-400">{icon}</div>
        <div className="flex flex-col">
          <p className="-mb-3 text-5xl font-bold text-winc-red-400">{stat}</p>
          <p className="pl-1 text-2xl font-bold">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
