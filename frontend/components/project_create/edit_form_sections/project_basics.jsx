import React from 'react';
import {Link} from 'react-router-dom';

class ProjectBasics extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.props.project;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleSubmit(){
        const formData = new FormData();
        
        formData.append('project[title]', this.state.title);
        formData.append('project[subtitle]', this.state.subtitle);
        formData.append('project[creator_id]', this.state.creator_id);
        formData.append('project[category_id]', this.state.category_id);
        formData.append('project[description]', this.state.description);
        formData.append('project[risks]', this.state.risks);
        formData.append('project[faqs]', this.state.faqs);
        formData.append('project[length]', this.state.length);
        formData.append('project[amount_received]', this.state.amount_received);
        formData.append('project[goal]', this.state.goal);
        
        if (this.state.imageFile){
            formData.append('project[image]', this.state.imageFile);
        }
        const id = this.state.id;
        this.props.props.updateProject(formData, id);

    }

    handleChange(field){
        return (e) => {
            this.setState({[field]: e.target.value });
        };
    }

    handleFile(e) {
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () =>
          this.setState({ imageUrl: reader.result, imageFile: file});
        
        if (file) {
          reader.readAsDataURL(file);
        } else {
          this.setState({ imageUrl: "", imageFile: null });
        }    
    }

    render(){
        const projectId = this.state.id;

        const previewImg = this.state.imageUrl ?
            <img src={this.state.imageUrl}/>
            :
            null
        ;

        return(
            <content className="project-edit-section">
                <nav className="grey-bottom">
                    <div className="edit-nav-left">
                        <h1>Bootbeginner</h1>   
                        <ul>
                            <li><Link to={`/projects/${projectId}/edit/basics`}>Basics</Link></li>
                            <img/>
                            <li><Link to={`/projects/${projectId}/edit/rewards`}>Rewards</Link></li>
                            <img/>
                            <li><Link to={`/projects/${projectId}/edit/story`}>Story</Link></li>
                            <img/>
                            {/* <li><Link to={`/projects/${projectId}/edit/people`}>People</Link></li> */}
                        </ul>
                    </div>
                    <Link to={`/projects/${projectId}/edit/overview`}>Exit to Project Overview</Link>
                </nav>

                {/* <ProjectEditHeader project={this.props.project}/> */}
                <header className="basic-section-header grey-bottom">
                    <h1>Start with the basics</h1>
                    <h2>Make it easy for people to learn about your project</h2>
                </header>

                <div className="basic-section-body">
                    <section className="basic-section grey-bottom">
                        <div className="instructions">
                            <h3>Project title</h3>
                            <p>Write a clear, brief title that helps people quickly understand the gist of your project.</p>
                        </div>
                        <div className="fields">
                            <div className="stack">
                                <span>Title</span>
                                <input className="basic-input" onChange={this.handleChange('title')} value={this.state.title} type="text"/>
                            </div>

                            <div className="stack">
                                <span>Subtitle</span>
                                <input className="basic-input" type="text" onChange={this.handleChange('subtitle')} value={this.state.subtitle}/>
                            </div>
                        </div>
                    </section>

                    <section className="basic-section grey-bottom">
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
                            <select className="categories basic-input" onChange={this.handleChange('category')} value={this.state.category} >
                                <option value="sneakers">Sneakers</option>
                                <option value="boots">Boots</option>
                                <option value="clogs">Clogs</option>
                                <option value="flats">Flats</option>
                                <option value="heels">Heels</option>
                                <option value="loafers">Loafers</option>
                                </select>
                            <select className="categories subcategory">

                            </select>
                        </div>
                    </section>

                    <section className="basic-section grey-bottom">
                        <div className="instructions">
                            <h3>Project location</h3>
                            <p>Enter the location that best describes where<br/> your project is based.</p>
                        </div>
                        <div className="fields">
                            <input className="basic-input" type="text" onChange={this.handleChange('location')} value={this.state.location}/>
                        </div>
                    </section>

                    <section className="basic-section grey-bottom">
                        <div className="instructions">
                        <h3>Project image</h3>
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
                            <span></span>
                            <form>
                                <input type="file" onChange={this.handleFile}/>
                                {previewImg}
                            </form>
                        </div>
                    </section>

                    <section className="basic-section grey-bottom">
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
                                <label><span className="dollars">$</span>
                                    <input className="basic-input" type="number" min="0" onChange={this.handleChange('goal')} value={this.state.goal}/>
                                </label>
                            </div>
                        </div>

                    </section>
                    <section className="basic-section grey-bottom footer-offset">
                        <div className="instructions">
                        <h3>Campaign Duration</h3>
                        <p>
                            Set a time limit for your campaign. You won't<br/>
                            be able to change this after you launch.
                        </p>
                        </div>
                        <div className="fields">
                            <input className="basic-input" type="number" onChange={this.handleChange('length')} value={this.state.length}/>
                        </div>
                        {/* split into a radio button to choose between days and end date/time. */}
                    </section>
                </div>
                
                <footer className="basic-footer">
                <Link className="grey-button" to={`/projects/${this.state.id}`}>Preview</Link>
                    {/* connect to show page once it is functional */}
                    <Link className="green-button" onClick={this.handleSubmit} to={`/projects/${projectId}/edit/${this.props.next}`}>Next: {this.props.next[0].toUpperCase() + this.props.next.slice(1)}</Link>
                </footer>
            </content>
        )
    };
};

export default ProjectBasics;