import { Outlet } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import Container from "../container/container";
import { Toaster } from "react-hot-toast";

export default function Layout() {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <header>
        <Container>
          <Header />
        </Container>
      </header>
      <Container>
        <div className="pt-32">
        <Outlet />
        </div>
      </Container>

      <footer className="bg-black">
        <Container>
          <Footer />
        </Container>
      </footer>
    </div>
  );
}
