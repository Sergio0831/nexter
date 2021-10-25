import Container from "./Container";
import Features from "./Features";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Homes from "./Homes";
import Story from "./Story";

const Layout = () => {
  return (
    <Container>
      <div className='sidebar'>Sidebar</div>
      <header className='header'>Header</header>
      <div className='realtors'>Top 3 realtors</div>
      <Features />
      <Story />
      <Homes />
      <Gallery />
      <Footer />
    </Container>
  );
};

export default Layout;
