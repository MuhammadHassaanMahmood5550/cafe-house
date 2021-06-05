import Navbar from './Navbar'
import Top from './Top'
import Middle from './Middle'

const Menu = () => {
  return (
    <div id="menu_section" className="">
      <Navbar menu={'menu'} menucolor={'gold'}></Navbar>
      <Top title={'Our Menus'} color={'gold'}></Top>
      <Middle menu={'menu'}></Middle>

      <div className="container pt-5">
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

        <div className="row pt-4 pb-5">
          <div className="col-md-4 mb-5">
            <div className="parent mx-auto">
              <img
                src={require('../img/vertical-menu-bg.png').default}
                alt=""
              />

              <div className="child">
                <ul>
                  <li>AFFOGATO</li>
                  <li>CAFFÈ AMERICANO</li>
                  <li>CAFFÈ LATTE</li>
                  <li>COFFEE MILK</li>
                  <li>CAFÉ MOCHA</li>
                  <li>CAPPUCCINO</li>
                  <li>ESPRESSO ICED COFFEE</li>
                  <li>INSTANT COFFEE</li>
                  <li>CAFFÈ LATTE</li>
                  <li>COFFEE MILK</li>
                  <li className="" >CAFÉ MOCHA</li>
                </ul>
                {/* <p className="para">AFFOGATO</p>
                <p className="para">CAFFÈ AMERICANO</p>
                <p className="para">CAFFÈ LATTE</p>
                <p className="para">COFFEE MILK</p>
                <p className="para">CAFÉ MOCHA</p>
                <p className="para">CAPPUCCINO</p>
                <p className="para">ESPRESSO</p>
                <p className="para">ICED COFFEE</p>
                <p className="para">INSTANT COFFEE</p> */}
              </div>
            </div>
          </div>
          <div className="col-md-8">
          <ul class="list-unstyled media-bg mb-3 p-3">
  <li class="media for_block text-md-left text-center">
    <img src={require('../img/special-4.jpg').default} class="mr-md-3" alt="..." />
    <div class="media-body  ml-md-3">
      <h3 class="mt-0 my-md-1 my-3">Pakistano 1</h3>
      <p className="pr-4">Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. Red ipsum.</p>
    </div>
    <div className="order_container mx-auto">
              <a href="" className="order">Order Now</a>
               </div>
  </li>
  </ul>

  <ul class="list-unstyled media-bg mb-3 p-3">
  <li class="media for_block text-md-left text-center">
    <img src={require('../img/special-3.jpg').default} class="mr-md-3" alt="..." />
    <div class="media-body  ml-3">
      <h3 class="mt-0 my-md-1 my-3">Pakistano 2</h3>
      <p className="pr-4">Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. Red ipsum.</p>
    </div>
    <div className="order_container mx-auto">
              <a href="" className="order">Order Now</a>
               </div>
  </li>
  </ul>

  <ul class="list-unstyled media-bg mb-3 p-3">
  <li class="media for_block text-md-left text-center">
    <img src={require('../img/1.jpg').default} class="mr-md-3" alt="..." />
    <div class="media-body  ml-3">
      <h3 class="mt-0 my-md-1 my-3">Pakistano 3</h3>
      <p className="pr-4">Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. Red ipsum.</p>
    </div>
    <div className="order_container mx-auto">
              <a href="" className="order">Order Now</a>
               </div>
  </li>
  </ul>

  <ul class="list-unstyled media-bg mb-3 p-3">
  <li class="media for_block text-md-left text-center">
    <img src={require('../img/special-4.jpg').default} class="mr-md-3" alt="..." />
    <div class="media-body  ml-3">
      <h3 class="mt-0 my-md-1 my-3">Pakistano 4</h3>
      <p className="pr-4">Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. Red ipsum.</p>
    </div>
    <div className="order_container mx-auto">
              <a href="" className="order">Order Now</a>
               </div>
  </li>
  </ul>

  <ul class="list-unstyled media-bg mb-3 p-3">
  <li class="media for_block text-md-left text-center">
    <img src={require('../img/special-3.jpg').default} class="mr-md-3" alt="..." />
    <div class="media-body  ml-3">
      <h3 class="mt-0 my-md-1 my-3">Pakistano 5</h3>
      <p className="pr-4">Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. Red ipsum.</p>
    </div>
    <div className="order_container mx-auto">
              <a href="" className="order">Order Now</a>
               </div>
  </li>
  </ul>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
