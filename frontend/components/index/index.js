import React from 'react';
import Navbar from '../navbar/navbar_container';
import ProjectIndexItem from './project_index_item';
import Footer from '../footer/footer';
import {Link} from 'react-router-dom';

class Index extends React.Component{
    componentDidMount(){
        this.props.requestProjects();
    }
    render(){
        const projects = this.props.projects.map(project => {
            return <ProjectIndexItem project={project} key={project.id}/>
        });
        const projectRoutes = this.props.projects.map(project => {
            return `projects/${project.id}`;
        });

        const route1 = projectRoutes[3] ? projectRoutes[3] : "";
        const route2 = projectRoutes[0] ? projectRoutes[0] : "";
        const route3 = projectRoutes[1] ? projectRoutes[1] : "";
        const route4 = projectRoutes[2] ? projectRoutes[2] : "";
        
        debugger
        
        return (
            <>
            <Navbar/>
            {/* add back in once category search is available
            <div className="bottom-grey-border">
                <ul className="category-header small flex">
                    <li>Sneakers</li>
                    <li>Boots</li>
                    <li>Clogs</li>
                    <li>Flats</li>
                    <li>Heels</li>
                    <li>Loafers</li>
                </ul>
            </div> */}
            <div className="home flex">
            <Link to={route1}>
                <div className="featured percent-60">
                    <h3>FEATURED PROJECT</h3>
                    <img src={window.eatShoe}></img>
                    <div className="green-bg"></div>
                    <h2>Put your Boot in your Mouth</h2>
                    <p>Edible boots for the modern worker</p>
                    <span>By Bootsy Collins</span>
                </div>
            </Link>
                <ul className="recommended percent-40 left-grey-border">
                    <h3>RECOMMENDED</h3>
            <Link className="reccommended" to={route2}>
                    <li className="bottom-grey-border">
                        <img className="rec-img" src={window.bagel}></img>
                        <ul className="rec-project">
                            <li>Bagel Boots</li>
                            <li className="green-text">13% funded</li>
                            <li><span>By Franz Shoebert</span></li>
                        </ul>
                    </li>
            </Link>
            <Link to={route3}>
                    <li className="bottom-grey-border">
                        <img className="rec-img" src={window.moonBoot}/>
                        <ul className="rec-project">
                            <li>Moon Boots</li>
                            <li className="green-text">80% funded</li>
                            <li><span>By John Wilkes Boot</span></li>
                        </ul>
                    </li>
            </Link>
            <Link to={route4}>
                    <li className="bottom-grey-border">
                        <img className="rec-img" src={window.heel}></img>
                        <ul className="rec-project">
                            <li>Let the Heeling Begin</li>
                            <li className="green-text">120% funded</li>
                            <li><span>By Heelers without Borders</span></li>
                        </ul>
                    </li>
            </Link>
                </ul>
            </div>
            <Footer/>
            </>
        )
    }
}

export default Index;


