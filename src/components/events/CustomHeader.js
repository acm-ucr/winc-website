import "./index.css";

const CustomHeader = ({ label }) => {
  return (
    <div className="font-urbanist bg-winc-pink text-winc-white text-3xl py-3">
      {label}
    </div>
  );
};

export default CustomHeader;
