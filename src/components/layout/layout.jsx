import { Outlet } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import Container from "../container/container";

export default function Layout() {
  return (
    <div>
      <header>
        <Container>
          <Header />
        </Container>
      </header>
      <Container>
        <Outlet />
      </Container>

      <footer className="bg-black">
        <Container>
          <Footer />
        </Container>
      </footer>
    </div>
  );
}
