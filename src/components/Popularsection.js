const Popularsection = (props) => {
  return (
    <div id="popular_section" className="py-5 text-center">
      <div className="container">
        <div className="d-flex flex-column flex-md-row">
          <div className="m-2 text-left">
            <img
              src={require('../img/logo.png').default}
              alt=""
              className="img-fluid d-inline mr-3"
              style={{ transform: 'translateY(-9px)' }}
            />
            <h3 className="d-inline curve_font2">Popular Items</h3>
          </div>
          <div className="m-2 text-left align-self-center">
            <div className="underline"></div>
          </div>
        </div>

        {props.popular && 
        <div className="row text-center mb-5">
        <div className="col-md-4 mb-5 mt-5">

          <div class="card mx-auto" style={{width: "18rem", height: "28rem"}}>
            <img src={require('../img/popular-1.jpg').default} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title border-bottom pb-3 ">ameciano</h5>
              
              <p class="card-text px-3">
              Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. sed ipsum
              </p>
              <div className="order_container mx-auto">
              <a href="" className="order">Order Now</a>
               </div>
            </div>
          </div>

        </div>
        <div className="col-md-4 mt-5 mb-5">
        <div class="card  mx-auto" style={{width: "18rem", height: "28rem"}}>
            <img src={require('../img/popular-2.jpg').default} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title border-bottom pb-3 ">ameciano</h5>
              
              <p class="card-text px-3">
              Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. sed ipsum
              </p>
              <div className="order_container mx-auto">
              <a href="" className="order">Order Now</a>
               </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-5">
        <div class="card mx-auto" style={{width: "18rem", height: "28rem"}}>
            <img src={require('../img/popular-3.jpg').default} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title border-bottom pb-3 ">ameciano</h5>
              
              <p class="card-text px-3">
              Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. sed ipsum
              </p>
              <div className="order_container mx-auto">
              <a href="" className="order">Order Now</a>
               </div>
            </div>
          </div>
        </div>
      </div>
        }

        <div className="row text-center">
          <div className="col-md-4 mb-5 mt-5">

            <div class="card mx-auto" style={{width: "18rem", height: "28rem"}}>
              <img src={require('../img/popular-3.jpg').default} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title border-bottom pb-3 ">ameciano</h5>
                
                <p class="card-text px-3">
                Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. sed ipsum
                </p>
                <div className="order_container mx-auto">
                <a href="" className="order">Order Now</a>
                 </div>
              </div>
            </div>

          </div>
          <div className="col-md-4 mt-5 mb-5">
          <div class="card  mx-auto" style={{width: "18rem", height: "28rem"}}>
              <img src={require('../img/popular-2.jpg').default} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title border-bottom pb-3 ">ameciano</h5>
                
                <p class="card-text px-3">
                Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. sed ipsum
                </p>
                <div className="order_container mx-auto">
                <a href="" className="order">Order Now</a>
                 </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-5">
          <div class="card  mx-auto" style={{width: "18rem", height: "28rem"}}>
              <img src={require('../img/popular-1.jpg').default} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title border-bottom pb-3 ">ameciano</h5>
                
                <p class="card-text px-3">
                Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. sed ipsum
                </p>
                <div className="order_container mx-auto">
                <a href="" className="order">Order Now</a>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popularsection
