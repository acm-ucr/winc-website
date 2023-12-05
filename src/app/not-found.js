import Link from "next/link";

const error = () => {
  return (
    <div className=" flex flex-col my-20 items-center gap-8 justify-center">
      <div className="flex flex-row items-center gap-8">
        <div className="text-winc-black text-center text-8xl "> 404 </div>

        <div className=" text-winc-pink text-center text-3xl">
          {" "}
          PAGE NOT FOUND !
        </div>
      </div>

      <Link
        href="/"
        className="text-winc-black text-center text-2xl p-2 underline"
      >
        HOME
      </Link>
    </div>
  );
};

export default error;
