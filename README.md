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

#### AWS S3:

By integrating Amazon Web Services S3 load time is minimized and storage space is not a concern. The Rails credentials are integrated with the AWS credentials, allowing the app to access AWS. The bucket policy permissions then allow the storage of data in S3.

#### Projects:

Every project must have a minimum of the following to be created
* Category - The type of footwear to which the project is related
* Subtitle - A short description of what the project is about
* Location - The country in which the project is based

Whenever the user navigates to the next section of this form, the data they've entered into the form up to that point is saved to the component state, so they can return to previous sections to review and/or change their prior answers. Upon completion of this form, an instance of the project is saved to the back end.

At that point the user is free to edit and add additional information

* Rewards - What backers will receive for backing the project
* Title - The main title of the project
* Funding Goal - The dollar amount that the project is trying to reach
* Campaign Duration - The number of days the campaign will run
* Story - A detailed description of the project
* Risks and Challenges - Potential issues that the project may encounter after launching that could affect the ability to deliver

Similar to the project creation form, there are onChange event listeners on each field of each section of the form that set the value of a key in component state that corresponds to the field being changed. 

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

This ensures a re-render of the field as every change to the the field and component state occurs. Every field's value is equal to the corresponding key-value pair in component state. Navigating to the next section of the form triggers an update action to be fired to the back end, saving the updated information to the project. This is what allows a user to complete the form in any order. A user can partially complete each section and still navigate to subsequent or previous sections.

![](./app/assets/images/form-nav.gif)

Users can upload an image for their project. These uploads are handled through the AWS S3 connection. Storing images in S3 reduces load time for the app.

Every part of a project's edit form is protected by auth routes, ensuring that only the creator can view or edit the incomplete form. If a user attempts to manually enter the url for a project's edit page that they do not own, they will be redirected to the home page.

#### Rewards:
Every project can have many rewards, which are added as part of project creation, which have a value that must be pledged to receive them. Every user can have many rewards, based on the the pledges they've made to projects. The relationship between a user, a pledge, and a project is tracked in the joins table "pledges", which ties the user id, project id, reward id, and the pledged amount. The sum of pledges in this table determine how much backing a project has received. The association with the users tracks how many rewards will be given and to who.

#### Dropdown:
Once a user has logged in, they can use the dropdown menu to view their five most recent projects. The dropdown menu's display is tied to the component state "display". The button in the top right corner has an onClick listener that fires the toggleDropdown function, which sets the toggles the display value between true and false. The dropdown variable is defined by a ternary, tied to the display value. 

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

Selecting a project through the dropdown will bring the user to that project's edit page. The dropdown menu also contains the logout button which destroy's the current user's session.