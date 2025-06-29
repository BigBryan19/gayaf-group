import Message from "./Message";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
// import Try from "./Components/try";
import MiniInfo from "./Components/MiniInfo";
import News from "./Components/News";
import Subscribe from "./Components/Subscribe";
import Head from "./Components/Head";

function App() {
  return (
    <div>
      <Message />
      <Navbar />
      {/* <Try /> */}
      <Hero />
      <Head />
      <MiniInfo />
      <News />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
