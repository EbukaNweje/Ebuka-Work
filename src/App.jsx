import { Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactButton from "./components/ContactButton";
import Home from "./pages/Home";
import About from "./pages/About";
import Awards from "./pages/Awards";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import CheckBroker from "./pages/CheckBroker";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/check-broker" element={<CheckBroker />} />
        </Routes>
      </main>
      <Footer />
      <ContactButton />
    </div>
  );
}
