const Middle = (props) => {
    return ( 
        <div id="middle_section" className="py-5 text-center">
            <div className="container">
                <div className="row middle_section_row">
                    <div className="col-md-8 text-left">
                        {props.menu ? <h3 className="text-capitalize mb-4 curve_font2">Varity of Menu</h3> : <h3 className="text-capitalize mb-4 curve_font2 gold1">the best coffee for you</h3> }
                      
                        <h3>Cafe House</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quibusdam similique nisi non sapiente sunt praesentium quae blanditiis, et iure officiis ad eveniet earum rerum repudiandae nobis facilis sit. Distinctio eaque iste a molestiae enim?</p>
                        <button className="btn btn-bg gold mb-5">DETAILS</button>
                    </div>
                    <div className="col-md-4 text-md-center text-left">
                        
    <img src={require('../img/1.jpg').default} alt="" className="img-fluid rounded-circle img1"/>
    <img src={require('../img/shadow.png').default} className="bg-shadow" alt="" />
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default Middle;