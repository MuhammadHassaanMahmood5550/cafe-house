import Navbar from './Navbar';
import Top from './Top';
import Contactsection from './Contactsection'
const Contact = () => {
    return ( 
        <div id="contact_section">
            <Navbar contact={"contact"} contactcolor={"gold"}></Navbar>
       <Top title={"Contact Us"} color={"gold"}></Top>
       <Contactsection></Contactsection>
        </div>
     );
}
 
export default Contact;