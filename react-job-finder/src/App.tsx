import { Footer, Job, Navbar, Search } from "./components";
import Value from "./components/ValueDiv/Value";
export default function App() {
  return (
    <div className="w-[85%] m-auto bg-white">
      <Navbar />
      <Search />
      <Job />
      <Value />
      <Footer />
    </div>
  );
}
