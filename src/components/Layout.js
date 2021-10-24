import Container from "./Container";

const Layout = () => {
  return (
    <Container>
      <div className='sidebar'>Sidebar</div>
      <header className='header'>Header</header>
      <div className='realtors'>Top 3 realtors</div>
      <section className='features'>Features</section>
      <div className='story__pictures'>Story Pictures</div>
      <div className='story__content'>Story Content</div>
      <section className='homes'>Homes</section>
      <section className='gallery'>Gallery</section>
      <footer className='footer'>Footer</footer>
    </Container>
  );
};

export default Layout;
