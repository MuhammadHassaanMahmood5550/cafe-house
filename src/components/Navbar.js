import {Link} from "react-router-dom";
const Navbar = (props) => {
    return ( 
        <div id="navbar_section">
          
            <nav class="navbar navbar-expand-lg navbar-dark bg-navbar pt-3">
            <div className="container">    
            <Link class="navbar-brand  ml-md-5 gold curve_font" style={{fontSize: "32px"}} to="/">
    <img src={require('../img/logo.png').default} width="28" height="35" class="d-inline-block align-top  ml-md-5 mr-3" alt="" />
    Cafe House
  </Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active mr-4">
       
        <Link className={`nav-link ${props.homecolor}`} to="/"> 
        {props.home &&
         <img src={require('../img/logo.png').default} width="17" height="25" class="d-inline-block align-top mr-2" alt="" /> }
      Home
      {props.home &&
      <img src={require('../img/nav-underline.png').default} width="73" height="15" class="d-block align-top mx-auto mr-2" alt="" /> }
      </Link>

      </li>
      <li class="nav-item mr-4">
       
        <Link className={`nav-link ${props.todaycolor}`} to="/today">
        {props.today &&
         <img src={require('../img/logo.png').default} width="17" height="25" class="d-inline-block align-top mr-2" alt="" /> }
          TODAY SPECIAL
          {props.today &&
      <img src={require('../img/nav-underline.png').default} width="73" height="15" class="d-block align-top mx-auto mr-2" alt="" /> }
          </Link>
     
      </li>
      <li class="nav-item mr-4">
      <Link className={`nav-link ${props.menucolor}`} to="/menu">
        {props.menu &&
         <img src={require('../img/logo.png').default} width="17" height="25" class="d-inline-block align-top mr-2" alt="" /> }
          MENU
          {props.menu &&
      <img src={require('../img/nav-underline.png').default} width="73" height="15" class="d-block align-top mx-auto mr-2" alt="" /> }
          </Link>
      </li>
      <li class="nav-item mr-5">
      <Link className={`nav-link ${props.contactcolor}`} to="/contact">
        {props.contact &&
         <img src={require('../img/logo.png').default} width="17" height="25" class="d-inline-block align-top mr-2" alt="" /> }
          CONTACT
          {props.contact &&
      <img src={require('../img/nav-underline.png').default} width="73" height="15" class="d-block align-top mx-auto mr-2" alt="" /> }
          </Link>
      </li>
   
    </ul>
  </div>
  </div>
</nav>
        </div>
     );
}
 
export default Navbar;