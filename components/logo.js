import { GiTurtle } from "react-icons/gi";
export default function Logo() {
  return (
    <div className="mx-auto px-4 py-4 justify-center text-base flex container">
      <GiTurtle size="10rem" />
      <h1 className="font-fancy1 text-6xl font-medium text-center mb-5">
        Tortuga FC
      </h1>
      <GiTurtle size="10rem" />
    </div>
  );
}
