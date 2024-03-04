import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function Main() {
  return (
    <section>
      <Header />
      <Outlet />
      <Footer />
    </section>
  );
}

export default Main;
