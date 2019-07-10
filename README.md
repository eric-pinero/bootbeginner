# Bootbeginner

### Architecture and Technologies
Bootbeginner was built using:
* JavaScript 9
* JSX
* React 16.8.6
* Redux 4.0.1
* Ruby on Rails 5.2.3
* PostgreSQL 2.2.2

### Background and Overview
 Bootbeginner is a Kickstarter inspired crowdfunding single page web app aimed exclusively at footwear based projects. It was the final project for the App Academy software engineering bootcamp.

https://bootbeginner.herokuapp.com/#/

<img width="1440" alt="Screen Shot 2019-07-03 at 11 53 33 AM" src="https://user-images.githubusercontent.com/34456998/60606777-f059ad00-9d89-11e9-852c-304814a650fa.png">


#### Projects:

Every project must has a minimum of the following to be created
* Category - The type of footwear to which the project is related
* Subtitle - A short description of what the project is about
* Location - The country in which the project is based

At that point the user is free to edit and add additional information

<img width="1440" alt="Screen Shot 2019-07-03 at 12 00 48 PM" src="https://user-images.githubusercontent.com/34456998/60607034-70801280-9d8a-11e9-9977-dc7ef1dea1c7.png">

* Rewards - What backers will receive for backing the project
* Title - The main title of the project
* Funding Goal - The dollar amount that the project is trying to reach
* Campaign Duration - The number of days the campaign will run
* Story - A detailed description of the project
* Risks and Challenges - Potential issues that the project may encounter after launching that could affect the ability to deliver

All fields must be complete before a project can be launched.

The creator can use the preview button to see how their project page will appear to users after it has launched.

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
        
        const dropdown = this.state.display ? 
```