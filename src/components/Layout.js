import Container from "./Container";
import Features from "./Features";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Header from "./Header";
import Homes from "./Homes";
import Realtors from "./Realtors";
import SideBar from "./SideBar";
import Story from "./Story";

const Layout = () => {
  return (
    <Container>
      <SideBar />
      <Header />
      <Realtors />
      <Features />
      <Story />
      <Homes />
      <Gallery />
      <Footer />
    </Container>
  );
};

export default Layout;
