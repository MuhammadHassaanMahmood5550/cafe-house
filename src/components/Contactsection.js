const Contactsection = () => {
    return ( 
        <div id="contact_section" className="py-5">
            <div className="container mt-5 pt-md-5">
                <h2 className="mt-5 mes-heading curve_font2">Send us a message</h2>
            <div className="row">
                <div className="col-md-5 order-2 order-md-1">
                    <form action="">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="NAME" />
                        </div>
                        <div className="form-group">
                            <input type="mail" className="form-control" placeholder="EMAIL" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="SUBJECT" />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" id="" cols="5" rows="5" placeholder="MESSAGE"></textarea>
                        </div>
                        <button className="btn btn-bg gold mb-5">SEND MESSAGE</button>
                    </form>
                </div>
                <div className="col-md-7 order-1 order-md-2 text-center mb-4">
                <p><iframe className="for_map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.136635946155!2d67.08600711416808!3d24.893320550072175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ed18aeaea6b%3A0xf50bdb260e451aa8!2sBahria%20University%20Karachi%20Campus!5e0!3m2!1sen!2s!4v1622827511837!5m2!1sen!2s" width="420" height="300" style={{border: "0"}} allowfullscreen="" loading="lazy"></iframe></p>
                </div>
            </div>
            </div>
        </div>
     );
}
 
export default Contactsection;