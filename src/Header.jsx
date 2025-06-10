import './App.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav-container">
        <div id="CarZone">
          CarZone
        </div>
        <ul className="header-nav">
          <li><a href="#home">Home</a></li>
          <li><a href="#service">Service</a></li>
          <li><a href="#featured">Featured Cars</a></li>
          <li><a href="#new">New Cars</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
