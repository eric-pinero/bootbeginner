import React from "react";
import Dropdown from "../navbar/dropdown_container";
import { Link } from "react-router-dom"

class ProjectForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            categoryName: "default",
            subtitle: "",
            location: "default",
            page: 1,
            active: false
        };

        this.nextPage = this.nextPage.bind(this);
        this.prevPage = this.prevPage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    nextPage(){
        
        this.setState({page : (this.state.page + 1)});
    }

    prevPage(){
        this.setState({page : (this.state.page - 1)});
    }

    handleChange(field){
        return (e) => {
            this.setState({[field]: e.target.value, active: true});
        };
    }

    handleSubmit(e){
        e.preventDefault();
        const categoryName = this.state.categoryName;
        const subtitle = this.state.subtitle;
        const location = this.state.location;

        const project = Object.assign({}, this.state);

        if (categoryName && subtitle && location){
            this.props.createProject(project).then((res) => {
                this.props.history.push(`/projects/${res.project.id}/edit/overview`)
            })
        }else {
            this.props.receiveErrors(['Please complete all sections before proceeding']);
        }

    }

    componentWillUnmount(){
        this.setState({errors: []});
    }

    render(){
        const errors = (this.props.errors && this.props.errors.length === 0) ?
            null
            :
            <ul className="errors">
                {this.props.errors.map(error => <li>{error}</li>)}
            </ul>
        ;


        let nextButton = this.state.active ? 
            "active next-button"
            : 
            "inactive next-button"
        ;

        let activeNext = this.state.active ?
            () => this.nextPage()
            :
            () => {}
        ;

        const categoryPage = 
            <section className="create-form">
                <h1>First, let’s get you set up.</h1>
                <h2>
                    Pick a project category to connect 
                    with a specific community. You can always 
                    update this later.
                </h2>
                <form>
                    <select className="start-form categories" value={this.state.categoryName} onChange={this.handleChange('categoryName')}>
                        <option value="default" disabled>Select your category</option>
                        {/* figure out how to make default option disappear after selection while preserving the selection*/}
                        <option value="sneakers">Sneakers</option>
                        <option value="boots">Boots</option>
                        <option value="clogs">Clogs</option>
                        <option value="flats">Flats</option>
                        <option value="heels">Heels</option>
                        <option value="loafers">Loafers</option>
                    </select>
                    <div className="grey-line"/>
                    <div className="form-footer">
                        <div/>
                        <span className={nextButton} onClick={activeNext}>Next: Project Idea</span>
                    </div>
                </form>
            </section>
        ;

        const descriptionPage = 
        <section className="create-form">
            <h1>Describe what you'll be creating.</h1>
            <h2>
                And don't worry, you can edit this later, too.
            </h2>
            <form>
                <textarea className="start-form" value={this.state.subtitle} onChange={this.handleChange('subtitle')}></textarea>

                <div className="grey-line"/>
                
                <div className="form-footer">
                        <span className="prev-button" onClick={() => this.prevPage()}>Category</span>
                        <span className={nextButton} onClick={activeNext}>Next: Location</span>
                </div>
            </form>
            {/* This section connects to the subtitle of the project */}
        </section>
        ;
        
        const locationPage = 
            <section className="create-form">
                <h1>Finally, let’s confirm your eligibility.</h1>
                <h2>
                    Tell us where you’re based and confirm a few other details 
                    before we proceed.
                </h2>
                <form onSubmit={this.handleSubmit}>
                    <select className="start-form" value={this.state.location} onChange={this.handleChange('location')}>
                        <option value="default" disabled>Select your country</option>
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Canada">Canada</option>
                        <option value="Denmark">Denmark</option>
                        <option value="France">France</option>
                        <option value="Germany">Germany</option>
                        <option value="Hong Kong">Hong Kong</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Italy">Italy</option>
                        <option value="Japan">Japan</option>
                        <option value="Luxemborg">Luxemborg</option>
                        <option value="Mexico">Mexico</option>
                        <option value="New-zealand">New Zealand</option>
                        <option value="Norway">Norway</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Spain">Spain</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Netherlands">the Netherlands</option>
                        <option value="United Kingdom">the United Kingdom</option>
                        <option value="United States">the United States</option>
                    </select>
                    <div className="grey-line"/>

                    <div className="form-footer">
                        <span className="prev-button" onClick={() => this.prevPage()}>Project Idea</span>
                        <span className="next-button" onClick={this.handleSubmit}>Continue</span>
                    </div>
                </form>
            </section>
        ;


        let formPage;
        
        if (this.state.page === 1) {
            formPage = categoryPage;
        }else if (this.state.page === 2){
            
            formPage = descriptionPage
        }else if (this.state.page === 3){
            
            formPage = locationPage;
        }

        return(
        <content className="project-create-form">
            <header>
                <nav className="create-nav grey-bottom">
                    <h1><Link to="/">Bootbeginner</Link></h1>
                    <Dropdown/>
                </nav>
                <p>{this.state.page} of 3</p>
            </header>
            
            {errors}
            {formPage}
        </content>
    )}
}

export default ProjectForm;