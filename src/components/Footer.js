const Footer = () => {
    return ( 
        <div className="">
        <div id="footer_section" className=" py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 mb-4">
                        <h1 className="top_heading mb-3">MAIN MENU</h1>
                        <h5 className="below_hea mb-3">HOME</h5>
                        <h5 className="below_hea mb-3">ABOUT US</h5>
                        <h5 className="below_hea mb-3">DIRECTORY</h5>
                        <h5 className="below_hea mb-3">BLOG</h5>
                        <h5 className="below_hea">OVER SERVICES</h5>
                    </div>
                    <div className="col-md-5 mb-4">
                    <h1 className="top_heading  mb-3">ABOUT US</h1>
                      <p>Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</p>
                      <p className="mt-2">Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.</p>
                    </div>
                    <div className="col-md-4">
                    <h1 className="top_heading mb-3">GET SOCIAL</h1>
                      <p>Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante.</p>
                      <a href="#" className=""> <i className="fa fa-facebook mx-2 mx-2 text-white"></i> </a>
                      <a href="#" className=""> <i className="fa fa-twitter text-white mx-2"></i> </a>
                      <a href="#" className=""> <i className="fa fa-instagram text-white mx-2"></i> </a>
                      <a href="#" className=""> <i className="fa fa-google text-white mx-2"></i> </a>
                      <a href="#" className=""> <i className="fa fa-youtube text-white mx-2"></i> </a>
                    </div>
                </div>   
            </div>
        </div>
        <p className="text-dark text-center my-4">Copyright © Hassaan kahn 5550</p>
        </div>
     );
}
 
export default Footer;