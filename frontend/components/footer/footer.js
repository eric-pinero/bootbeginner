import React from "react";

class Footer extends React.Component{

    render(){
        return(
            <footer className="universal-footer">
                <ul className="flex links dark-grey-font">
                    <li><a href="https://www.linkedin.com/in/eric-pinero/">LinkedIn</a></li>
                    <li><a href="https://github.com/eric-pinero">Github</a></li>
                    <li><a href="ericpcodes.com">ericpcodes</a></li>
                </ul>
            </footer>
        )
    }
}
export default Footer;