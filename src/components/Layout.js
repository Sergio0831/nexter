import Container from "./Container";
import Features from "./Features";
import Story from "./Story";

const Layout = () => {
  return (
    <Container>
      <div className='sidebar'>Sidebar</div>
      <header className='header'>Header</header>
      <div className='realtors'>Top 3 realtors</div>
      <Features />
      <Story />
      <section className='homes'>Homes</section>
      <section className='gallery'>Gallery</section>
      <footer className='footer'>Footer</footer>
    </Container>
  );
};

export default Layout;
