import BoidsSimulation from "./BoidsSimulation";

export default function Hero() {
  return (
    <div className="flex w-screen justify-center items-center mt-4">
      <div className="z-0 relative flex  rounded-xl ">
        <div className="z-0 h-[80vh] w-[90vw] relative">
          <BoidsSimulation className="z-0" />
        </div>
      </div>
    </div>
  );
}
