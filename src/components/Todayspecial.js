import Navbar from './Navbar';
import Top from './Top';
import Popularsection from './Popularsection';
import Dailysection from './Dailysection';
const Todayspecial = () => {
    return ( 
        <div id="today_section">
            <Navbar today={"today"} todaycolor={"gold"}></Navbar>
       <Top title={"Today's Special"} color={"gold"}></Top>
       <div className="" style={{marginTop: "110px"}}>
       <Popularsection popular={"popular"}></Popularsection>
       </div>
       <Dailysection></Dailysection>
        </div>
     );
}
 
export default Todayspecial;