import Menu from "@/components/Header/Menu/Menu";
import TopNav from "@/components/Header/TopNav/TopNav";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <header  id="header">
        <TopNav />
        <Menu />
      </header>
    </div>
  );
}
