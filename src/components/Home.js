import Navbar from './Navbar';
import Top from './Top';
import Middle from './Middle';
import Todaysection from './Todaysection';
import Popularsection from './Popularsection';
import Dailysection from './Dailysection';
const Home = () => {
    return ( 
        <div id="home_section">
            <Navbar home={"home"} homecolor={"gold"}></Navbar>
       <Top title={"Welcome To"} ></Top>
       <Middle></Middle>
       <Popularsection></Popularsection>
       <Todaysection></Todaysection>
       <Dailysection></Dailysection>
        </div>
     );
}
 
export default Home;