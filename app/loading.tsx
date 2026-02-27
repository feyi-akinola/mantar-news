import Image from "next/image";

const MainLoading = () => {
  return (
    <div className="fixed w-screen h-screen bg-black flex-center_ flex-col gap-4 z-1000000">
      <h1 className="text-white text-4xl font-bold font-expanded animate-pulse loop-infinite">
        Mantar News
      </h1>
      <Image
        src="/images/mantar-light.png"
        alt="Mantar Logo"
        width={80}
        height={80}
        className="animate-pulse loop-infinite"
      />
    </div>
  );
};

export default MainLoading;