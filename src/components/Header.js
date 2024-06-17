import ModeButton from "./ModeButton";

function Header() {
  return (
    <div className="flex justify-between items-center">
      <h1 className="font-bold text-2xl">devfinder</h1>
      <ModeButton />
    </div>
  );
}

export default Header;
