import React from 'react';
import {Link} from 'react-router-dom';

class ProjectRewards extends React.Component{
    constructor(props){
        super(props);

    }

    render(){

        return(
            <content>
                <header>
                    <h1>Add your rewards</h1>
                    <p>
                        Offer simple, meaningful rewards that bring backers closer to your 
                        project. Rewards don’t have to be physical items. Consider special 
                        experiences or behind-the-scenes peeks into your project.
                    </p>
                </header>
                
                <section>
                    <div>
                        <div className="instructions">
                            <h2>Rewards</h2>
                            <span>It's good to provide a range of prices but not too many options.</span>
                        </div>
                        <button>+ Add a reward</button>
                    </div>
                    <ul>
                        <li>example</li>
                        <li>example</li>
                        <li>example</li>
                    </ul>
                </section>
            </content>
        )
    }
}

export default ProjectRewards;