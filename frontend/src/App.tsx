import { RecoilRoot } from "recoil";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HelpCards } from "./components/HelpCards";
import { SearchSection } from "./components/SearchSection";

function App() {
  return (
    <div className=" min-h-screen">
      <RecoilRoot>
        <Header />
        <SearchSection />
        <HelpCards />
        <Footer />
      </RecoilRoot>
    </div>
  );
}

export default App;
