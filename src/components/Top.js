const Top = (props) => {
    return ( 
      <div id="top_section" className="py-5">
            <div className="container text-center"> 
            <div className="lights_div">
            <img className="lights light1" src={require('../img/light.png').default} alt="" />   
            <img  className="lights light2" src={require('../img/light.png').default} alt="" /> 
            <img  className="lights light3" src={require('../img/light.png').default} alt="" />   
            </div>  
                <div className="row justify-content-center text-center blow-lights">
                    <div className="col-xl-7 col-lg-8 col-md-10 ">
                        <div className="top_heading">
                    <img className="d-inline-block mb-1 mr-3 header_line" src={require('../img/header-line.png').default} width="70" height="13" alt="" />
                     <h1 className="d-inline-block mb-4 wel-heading curve_font">{props.title}</h1>  
                <img className="d-inline-block mb-1 ml-3 header_line" src={require('../img/header-line.png').default} width="70" height="13" alt="" />
                </div>
                <h1 className="h1 gold mb-3 straight_font">CAFE HOUSE</h1>
                <p className="text-left mb-4 p-color">Cafe House template is a mobile-friendly responsive <span className="gold">Bootstrap v6.6.0</span> super layout <span className="gold">design</span>. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculusnec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>

                <button className="btn btn-bg gold">DETAILS</button>

                <div className="table_div">
                    <img src={require('../img/table-set.png').default} className="table-img" alt="" />
                    <img src={require('../img/table-set.png').default} className="table-img2 img-fluid" alt="" />
                </div>
                
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Top;