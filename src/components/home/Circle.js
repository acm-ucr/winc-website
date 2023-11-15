import Image from "next/image";

const Circle = ({ width, height, clip, image }) => {
  let rectClip;
  if (clip === "left") {
    rectClip = { clipPath: "polygon(0% 0%, 0% 100%, 50% 100%, 50% 0%)" };
  } else {
    rectClip = { clipPath: "polygon(100% 0%, 100% 100%, 50% 100%, 50% 0%)" };
  }

  return (
    <div
      className="flex justify-center items-center bg-winc-pink rounded-full outline outline-4 outline-offset-8 outline-winc-pink w-full h-full relative"
      style={{ width: width + "px", height: height + "px" }}
    >
      <Image
        src={image}
        width={width * 1.1}
        className="max-w-none"
        style={{ clipPath: "circle(53.4%)" }}
      />
      <Image
        src={image}
        width={width * 1.1}
        className="absolute rounded-3xl max-w-none"
        style={rectClip}
      />
    </div>
  );
};

export default Circle;
