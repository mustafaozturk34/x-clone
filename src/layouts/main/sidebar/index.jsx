import Logo from "./logo";
import Menu from "./menu";
import "./index.css"
import Account from "./account";

export default function Sidebar() {
  return (
    <aside className="w-[275px] max-h-screen min-h-screen px-2 flex flex-col hide-scroll sticky z-[2] top-0">
      <Logo />
      <Menu />
      <Account />
    </aside>
  );
}
