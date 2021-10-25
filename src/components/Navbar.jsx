import { useSelector } from "react-redux";
import design from '../components/design.css'

const Navbar = () => {
    const count=useSelector(state=>state.count)
    return (
      <div>
        <div className="Navbar-Container">
          <div className="Dashboard-Items">
           <h4>DashBoard | Cart-Items {count}</h4> 
            
          </div>
        </div>
      </div>
    );
  };
  
  export default Navbar;