import "./Header.css"
const Header = ({logo,home,project, skills,contactme}) => {
    return (
      <header>
        <div>
        <h1> {logo} </h1>
        </div>
        <nav>
        <ul>
        <li>Home{home}</li>
        <li>Projects{project}</li>
        <li>Skills{skills}</li>
        <li>Contact Me{contactme}</li>
        </ul>
        </nav>
      </header>
    );
  };
  export default Header;
