# Bootbeginner

### Architecture and Technologies
Bootbeginner was built using:
* JavaScript 9
* AWS S3
* React 16.8.6
* Redux 4.0.1
* Ruby on Rails 5.2.3
* PostgreSQL 2.2.2
* webpack 4.32.2

### Background and Overview
 Bootbeginner is a Kickstarter inspired crowdfunding single page web app aimed exclusively at footwear based projects. It was the final project for the App Academy software engineering bootcamp.

[Live Site](https://bootbeginner.herokuapp.com/#/)

![](./app/assets/images/learn.gif)

#### Authorization:
Bootbeginner has backend auth and persistent user state. A user will remain logged in even if they leave the site through the use of cookies. Their email address is saved to the backend where database and model level auth ensure its uniqueness. The user's password is hashed and the resulting digest is saved to the database. In the event that the email address and/or password are not valid, the user will receive an error message.

![](./app/assets/images/login.gif)


#### Projects:

Every project must have a minimum of the following to be created
* Category - The type of footwear to which the project is related
* Subtitle - A short description of what the project is about
* Location - The country in which the project is based

Whenever the user navigates to the next section of this form, the data they've entered into the form up to that point is saved to the local state, so they can return to previous sections to review and/or change their prior answers. Upon completion of this form, an instance of the project is saved to the back end.

At that point the user is free to edit and add additional information

* Rewards - What backers will receive for backing the project
* Title - The main title of the project
* Funding Goal - The dollar amount that the project is trying to reach
* Campaign Duration - The number of days the campaign will run
* Story - A detailed description of the project
* Risks and Challenges - Potential issues that the project may encounter after launching that could affect the ability to deliver

Similar to the project creation form, there are onChange event listeners on each field of each section of the form that set the a value of a key in local state that corresponds to the field being changed. 

```JavaScript
class ProjectBasics extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.props.project;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleChange(field){
        return (e) => {
            this.setState({[field]: e.target.value });
        };
    }

    render() {
        <section className="basic-section grey-bottom">
            <div className="instructions">
                <h3>Project title</h3>
                <p>
                    Write a clear, brief title that helps people 
                    quickly understand the gist of your project.
                </p>
            </div>
            <div className="fields">
                <div className="stack">
                    <span>Title</span>
                    <input 
                        className="basic-input" 
                        onChange={this.handleChange('title')} 
                        value={this.state.title} type="text"
                    />
                </div>
                <div className="stack">
                    <span>Subtitle</span>
                    <input 
                        className="basic-input" 
                        type="text" 
                        onChange={this.handleChange('subtitle')} 
                        value={this.state.subtitle}
                    />
                </div>
            </div>
        </section>
    }
}

```

This ensures a re-render of the field as every change to the the field and local state occurs. Every field's value is equal to the corresponding key-value pair in local state. Navigating to the next section of the form triggers an update action to be fired to the back end, saving the updated information to the project. This is what allows a user to complete the form in any order. A user can partially complete each section and still navigate to subsequent or previous sections.

![](./app/assets/images/form-nav.gif)

All fields must be complete before a project can be launched.

The creator can use the preview button to see how their project page will appear to users after it has launched.

Every part of a project's edit form is protected by auth routes, ensuring that only the creator can view or edit the incomplete form.

#### Dropdown:
Once a user has logged in, they can use the dropdown menu to view their five most recent projects. Selecting a project through the dropdown will bring the user to that project's edit page. The dropdown menu is also how users log out.

```javascript
class Dropdown extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            display: false
        }
        this.toggleDropdown = this.toggleDropdown.bind(this)
    }

    toggleDropdown(){
        this.setState({display: !(this.state.display)})
    }

    render() {
        const projectCount = this.props.projects.length;
        const recentProjects = this.props.projects.slice(projectCount - 5, projectCount);
        
        const dropdown = this.state.display ? dropdownmenu : null;
    }
}
```