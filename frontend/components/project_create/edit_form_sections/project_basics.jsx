import React from 'react';
import {Link} from 'react-router-dom';

class ProjectBasics extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <content>
                <header>
                    <h1>Start with the basics</h1>
                    <h2>Make it easy for people to learn about your project</h2>
                </header>

                <section className="basic-section">
                    <div className="instructions">

                    </div>
                </section>

                <section className="basic-section">
                    <div className="instructions">
                        <h3>Project title</h3>
                        <p>Write a clear, brief title that helps people quickly understand the gist of your project.</p>
                    </div>
                    <div className="fields">
                        <div>
                            <span>Title</span>
                            <input type="text"/>
                        </div>

                        <div>
                            <span>Subtitle</span>
                            <input type="text"/>
                        </div>
                    </div>
                </section>

                <section className="basic-section">
                    <div className="instructions">
                        <h3>Project category</h3>
                        <p>
                            Choose the category that most closely<br/> 
                            aligns with your project.
                            <br/>
                            Think of where backers may look to find it.<br/> 
                            Reach a more specific community by also<br/> 
                            choosing a subcategory.
                            <br/>
                            You’ll be able to change the category and<br/> 
                            subcategory even after your project is live.
                        </p>
                    </div>
                    <div className="fields">
                        <select className="category">

                        </select>
                        <select className="subcategory">

                        </select>
                    </div>
                </section>

                <section className="basic-section">
                    <div className="instructions">
                        <h3>Project location</h3>
                        <p>Enter the location that best describes where<br/> your project is based.</p>
                    </div>
                    <div className="fields">
                        <input type="text"/>
                    </div>
                </section>

                <section className="basic-section">
                    <div className="instructions">
                    <h3>Project location</h3>
                        <p>
                            Add an image that clearly represents your project.<br/>
                            Choose one that looks good at different<br/> 
                            sizes. It will appear in different sizes in<br/> 
                            different places: on your project page,<br/> 
                            across the Kickstarter website and mobile<br/> 
                            apps, and (when shared) on social<br/> 
                            channels.
                            <br/>
                            You may want to avoid including banners,<br/> 
                            badges, and text because they may not be<br/> 
                            legible at smaller sizes.
                            <br/>
                            Your image should be at least 1024x576<br/> 
                            pixels. It will be cropped to a 16:9 ratio.
                        </p>
                    </div>

                    <div className="fields">
                        {/* Upload image here */}
                    </div>
                </section>

                <section className="basic-section">
                    <div className="instructions">
                        <h3>Funding goal</h3>
                        <p>
                            Set an achievable goal that covers what you<br/> 
                            need to complete your project.
                            <br/>
                            Funding is all-or-nothing. If you don’t meet<br/> 
                            your goal, you won’t receive any money.
                        </p>
                    </div>

                    <div className="fields">
                        <span>Goal amount</span>
                        <div className="goal-value">
                            <span>$</span>
                            <input type="number" min="0"/>
                        </div>
                    </div>

                </section>
                <section className="basic-section">
                    <div className="instructions">
                    <h3>Campaign Duration</h3>
                    <p>
                        Set a time limit for your campaign. You won't<br/>
                        be able to change this after you launch.
                    </p>
                    </div>
                </section>
            </content>
        )
    };
};

export default ProjectBasics;