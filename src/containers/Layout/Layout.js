import Header from "../../components/Header/Header";
import "./Layout.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Layout({ children, ...props }) {
  return (
    <div className="container">
      <Navbar {...props} />
      <Header className="layout-header bordered" />
      <main className="layout-main bordered">
        <section className="layout-content">{children}</section>
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
