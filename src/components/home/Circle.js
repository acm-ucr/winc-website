import Image from "next/image";

const Circle = ({ width, height, clip, image }) => {
  return (
    <div className={"w-" + width + " h-" + height}>
      <div className="flex items-center bg-winc-pink rounded-full outline outline-4 outline-offset-8 outline-winc-pink w-full h-full overflow-hidden">
        <Image src={image} className="" />
      </div>
    </div>
  );
};

export default Circle;
