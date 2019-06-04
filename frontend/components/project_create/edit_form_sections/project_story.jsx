import React from 'react';
import {Link} from 'react-router-dom';

class ProjectStory extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return (
            <content>
                <header>
                    <h1>Introduce your project</h1>
                    <h2>Tell people why they should be excited about your project. Get specific but be clear and be brief.</h2>
                </header>

                <section>
                    <div>
                        <h3>Project description</h3>
                        <p>
                            Describe what you're raising funds to do, why you care about it, how you 
                            plan to make it happen, and who you are. Your description should tell 
                            backers everything they need to know. If possible, include images to 
                            show them what your project is all about and what rewards look 
                            like.
                        </p>
                    </div>
                    <textarea></textarea>
                </section>

                <section className="basic-section">
                    <div className="instructions">
                        <h3>Project title</h3>
                        <p>Write a clear, brief title that helps people quickly understand the gist of your project.</p>
                    </div>

                    <div className="fields">
                        <div>
                            <span>Title</span>
                            <textarea></textarea>
                        </div>
                    </div>
                </section>
            </content>
            
        )
    }
}

export default ProjectStory;