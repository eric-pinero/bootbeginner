import React from "react";
import {Link} from "react-router-dom";

class ProjectForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            page: 1,
            category: "",
            subtitle: "",
            location: "",
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
            this.setState({[field]: e.target.value });
        };
    }

    handleSubmit(e){
        e.preventDefault();
        const category = this.state.category;
        const subtitle = this.state.subtitle;
        const location = this.state.location;

        const project = Object.assign({}, this.state)
        if (category && subtitle && location){
            this.props.createProject(project)
        }else {
            this.props.receiveErrors(['Please complete all sections before proceeding'])
        }

    }

    render(){
        const categoryPage = 
            <section className="create-form">
                <h1>First, let’s get you set up.</h1>
                <h2>
                    Pick a project category to connect 
                    with a specific community. You can always 
                    update this later.
                </h2>
                <form>
                    <select value={this.state.category} onChange={this.handleChange('category')} className="categories">
                        <option value="DEFAULT" disabled>Select your category</option>
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
                        <span className="next-button" onClick={() => this.nextPage()}>Next: Project Idea</span>
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
                <textarea value={this.state.description} onChange={this.handleChange('description')}></textarea>

                <div className="grey-line"/>
                
                <div className="form-footer">
                        <span className="prev-button" onClick={() => this.prevPage()}>Category</span>
                        <span className="next-button" onClick={() => this.nextPage()}>Next: Location</span>
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
                    <select onChange={this.handleChange('location')}>
                        <option></option>
                        <option id="australia">Australia</option>
                        <option id="boots">Austria</option>
                        <option id="belgium">Belgium</option>
                        <option id="canada">Canada</option>
                        <option id="denmark">Denmark</option>
                        <option id="france">France</option>
                        <option id="germany">Germany</option>
                        <option id="hong-kong">Hong Kong</option>
                        <option id="ireland">Ireland</option>
                        <option id="italy">Italy</option>
                        <option id="japan">Japan</option>
                        <option id="luxemborg">Luxemborg</option>
                        <option id="mexico">Mexico</option>
                        <option id="new-zealand">New Zealand</option>
                        <option id="norway">Norway</option>
                        <option id="singapore">Singapore</option>
                        <option id="spain">Spain</option>
                        <option id="switzerland">Switzerland</option>
                        <option id="netherlands">the Netherlands</option>
                        <option id="united-kingdom">the United Kingdom</option>
                        <option id="united-states">the United States</option>
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
            <span>{this.state.page} of 3</span>
            {formPage}
        </content>
    )}
}

export default ProjectForm;