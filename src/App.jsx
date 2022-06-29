import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Navbar, Welcome, Footer, Services } from "./components";

const App = () => {

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
        {/* <ConnectButton/> */}
      </div>
      <Services />
      <Footer />
    </div>
  );
}

export default App;
