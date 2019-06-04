import React from 'react';
import { Link } from 'react-router-dom';

class ProjectEditFooter extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                <Link></Link>
                {/* ^^ this will link to the show page ^^ */}
                <button onClick={() => this.props.changeSection(this.state.active + 1)}></button>
                {/* ^^ this submit will need to tie to the back end and update each section appropriately ^^  */}
            </>
        )
    }
}
export default ProjectEditFooter;