const Todaysection = () => {
    return ( 
        <div id="today_section" className="py-5 text-center">
            <div className="container">
               {/* <div className="d-flex flex-row justify-content-center mb-5">
                   <div className="">
                       <img src={require('../img/special-1.jpg').default} alt="" className="img-fluid bor" />
                   </div>

                   <div className="ml-3">
                       <div className="d-flex flex-column">
                           <div className="">
                           <img src={require('../img/special-2.jpg').default} alt="" className="img-fluid bor" />
                           </div>

                           <div className="mt-md-4 mt-3">
                               <div className="d-flex flex-row">
                                   <div className=" mr-5">
                                   <img src={require('../img/special-3.jpg').default} alt="" className="img-fluid bor" />
                                   </div>
                                   <div className="">
                                   <img src={require('../img/special-4.jpg').default} alt="" className="img-fluid bor" />
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div> */}
                <div className="d-flex flex-column flex-md-row">
          <div className="m-2 text-left">
            <img
              src={require('../img/logo.png').default}
              alt=""
              className="img-fluid d-inline mr-3"
              style={{ transform: 'translateY(-9px)' }}
            />
            <h3 className="d-inline curve_font2">Today's Special</h3>
          </div>
          <div className="m-2 text-left align-self-center">
            <div className="underline"></div>
          </div>
        </div>

               <div className="row justify-centent-center mt-5">
                       <div className="col-md-6">
                         <div className="overlay1">
                         <img src={require('../img/special-1.jpg').default} alt="" className="w-100 bor" />
                         <div className="content1">
                         <h4>frigh special new</h4>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, commodi.
                         </p>
                         </div>
                         </div>
                       </div>

                       <div className="col-md-6">
                         
                           <div className="row mx-auto mt-md-0 mt-3">
                           <div className="overlay1">
                         <img src={require('../img/special-2.jpg').default} alt="" className="bor"  />
                         <div className="content2">
                         <h4>frigh special</h4>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, commodi.
                         </p>
                         </div>
                         </div>
                           </div>

                           <div className="row text-left mt-md-4 mt-3 ">
                               <div className="col-4 col-xl-4 col-md-6 col-lg-5 col-sm-4"><img src={require('../img/special-3.jpg').default} alt="" className="bor small-img1" /></div>
                               <div className="col-4"><img src={require('../img/special-4.jpg').default} alt="" className="bor small-img2" /></div>
                           </div>
                       </div>
                   </div>
            </div>
        </div>
     );
}
 
export default Todaysection;