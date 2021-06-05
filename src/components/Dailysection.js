const Dailysection = () => {
  return (
    <div id="daily_section" className="py-5 text-dark">
      <div className="container">
        <div className="d-flex flex-column flex-md-row">
          <div className="m-2 text-left">
            <img
              src={require('../img/logo.png').default}
              alt=""
              className="img-fluid d-inline mr-3"
              style={{ transform: 'translateY(-9px)' }}
            />
            <h3 className="d-inline curve_font2">Daily Menu</h3>
          </div>
          <div className="m-2 text-left align-self-center">
            <div className="underline"></div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4 text-md-center  mb-4">
            <img
              src={require('../img/menu-board.png').default}
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-md-7">
            <p className="mb-4">
              Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
              Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
              ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
            </p>
            <ol className="ml-5 " >
              <li className="">Tellus eget condimentum rhoncus.</li>
              <li>Sem quam semper libero.</li>
              <li>Sit amet adipiscing sem neque sed ipsum.</li>
              <li>Nam quam nunc, blandit vel, luctus pulvinar.</li>
              <li>
                Maecenas nec odio et ante tincidunt tempus.
              </li>
              <li>Maecenas nec odio et ante tincidunt tempus.</li>
            </ol>
            <button className="btn btn-bg gold mb-5">READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dailysection
