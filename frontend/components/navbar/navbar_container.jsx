import { connect } from "react-redux";
import Navbar from './navbar'



const msp = (state) => {
    return {
        loggedIn: !!state.session.id
    }
}
export default connect(msp)(Navbar);
