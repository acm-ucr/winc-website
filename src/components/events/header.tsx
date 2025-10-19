interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <div className="mt-12 flex flex-col items-center">
      <div className="relative">
        <div className="absolute -right-4 -top-4 h-10 w-10 border-r-[6px] border-t-[6px] border-winc-red-400" />
        <div className="absolute -bottom-4 -left-4 h-10 w-10 border-b-[6px] border-l-[6px] border-winc-red-400" />
        <div className="text-7xl font-semibold text-winc-brown-100">
          {title}
        </div>
      </div>
      <p className="mt-4 text-xl text-winc-gray-100">{subtitle}</p>
    </div>
  );
};

export default Header;
