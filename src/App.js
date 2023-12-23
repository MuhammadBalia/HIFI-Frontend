import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import BerandaUser from "./components/BerandaUser";
import LoginAdmin1 from "./pages/LoginAdmin1";
import KONTAKPROSES from "./pages/KONTAKPROSES";
import PaketFc from "./pages/PaketFc";
import Menu from "./pages/Menu";
import KONTAK1 from "./pages/KONTAK1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/login-admin-1":
        title = "";
        metaDescription = "";
        break;
      case "/kontak-proses":
        title = "";
        metaDescription = "";
        break;
      case "/paket-fc":
        title = "";
        metaDescription = "";
        break;
      case "/menu":
        title = "";
        metaDescription = "";
        break;
      case "/kontak-1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  const [login, setLogin] = useState(false);
  const globalState = {
    login, setLogin,
  }

  return (
    <Routes>
      <Route path="/" element={<BerandaUser globalState={globalState}/>} />
      <Route path="/login-admin-1" element={<LoginAdmin1 globalState={globalState}/>} />
      <Route path="/kontak-proses" element={<KONTAKPROSES globalState={globalState}/>} />
      <Route path="/paket-fc" element={<PaketFc globalState={globalState}/>} />
      <Route path="/menu" element={<Menu globalState={globalState}/>} />
      <Route path="/kontak-1" element={<KONTAK1 globalState={globalState}/>} />
    </Routes>
  );
}
export default App;
