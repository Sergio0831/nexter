import Logo from "../img/logo.png";
import LogoBBC from "../img/logo-bbc.png";
import LogoForbes from "../img/logo-forbes.png";
import LogoTech from "../img/logo-techcrunch.png";
import LogoBI from "../img/logo-bi.png";

const Header = () => {
  return (
    <header className='header'>
      <img src={Logo} alt='Nexter logo' className='header__logo' />
      <h3 className='heading-3'>Your own home:</h3>
      <h1 className='heading-1'>The utimate personal freedom</h1>
      <button type='button' className='btn header__btn'>
        View your own property
      </button>
      <div className='header__seenon-text'>Seen on</div>
      <div className='header__seenon-logos'>
        <img src={LogoBBC} alt='Seen on logo 1' />
        <img src={LogoForbes} alt='Seen on logo 2' />
        <img src={LogoTech} alt='Seen on logo 3' />
        <img src={LogoBI} alt='Seen on logo 4' />
      </div>
    </header>
  );
};

export default Header;
