import React from "react";
import {Link} from "react-router-dom";
import Navbar from "../navbar/navbar_container";
import Footer from '../footer/footer';

class ProjectLearn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedCategory: "sneakers"
        }

        this.changeCategory = this.changeCategory.bind(this)
    }

    changeCategory(categoryName){
        this.setState({selectedCategory: categoryName})
    }

    render(){
        let displayedCategory;
        switch (this.state.selectedCategory) {
            case "sneakers":
                displayedCategory =
                    <p >
                        Comfortable, versatile, and stylish. Who doesn't love a good sneaker?
                    </p>      
                break;
            case "boots":

                displayedCategory =
                    <p >
                        Boots are incredibly diverse. You can find them on a hiking trail or on a catwalk.
                    </p>
                break;

            case "clogs":
                displayedCategory =
                    <p >
                        Beautiful, sturdy, mysterious. They greatly resemble the trees that gave them life.
                    </p>
                break
            case "flats":
                displayedCategory =
                    <p >
                        Flats sit firmly at the intersection of form and function. 
                        Provide function without compromising an ounce of utility.
                    </p>
                break;       
            case "heels":
                
                displayedCategory =
                    <p >
                        For those who not only want to stand out, but to stand above.
                    </p>
                break;
            case "loafers":
                
                displayedCategory =    
                <p >
                    Don't let the name fool you, this daring footwear 
                    is just as at home in a lounge as it is in a workplace.
                </p>
                break
            default:
                
                    displayedCategory =
                    <p >
                        Comfortable, versatile, and stylish. Who doesn't love a good sneaker?
                    </p>
                break;
        }


        
        return(
        <>
        <Navbar/>
        <content className="learn-project">
            <div className="padded">
                <div className="learn-top">
                    <h1>Bring your creative project to life.</h1>
                    <Link className="start-project" to="/projects/start">Start a Project</Link>
                </div>

                <section className="learn img-top">
                    <div className="learn img-left">
                        <img></img>
                    </div>

                    <div className="learn img-right">
                        <img></img>
                        <img></img>
                    </div>
                </section>
            </div>

            <section className="green">
                <div>
                    <p>"</p>
                    <div className="quote">
                        <h1>We see Bootbeginner as a home for creative minds and a 
                        wonderful platform; where people who believe, respect and 
                        see the beauty of footwear, can support an idea and make it a reality
                        </h1>
                        <p>- DE LA SOLE</p>
                    </div>
                </div>
            </section>

            <section className="learn-faqs">
                <h1>
                    A Bootbeginner project does more than raise <br/> money. 
                    It builds community around your work.
                </h1>
                <ul className="questions-answers">
                    <li className="q-a">
                        <h3 className="question">What can I use Bootbeginner to fund?</h3>
                        <p className="answer">
                            Bootbeginner is specifically for creative footwear projects in the 
                            following categories: Sneakers, Boots, Clogs, Flats, Heels, and Loafers.
                            However, there is still a lot of room to be creative with Bootbeginner.
                            Projects have ranged from footwear accessories, to statuary resembling footwear.
                            The only limit is your imagination.
                        </p>
                    </li>

                    <li className="q-a">
                        <h3 className="question">Who can I get pledges from?</h3>
                        <p className="answer">
                            Many of people visit Bootbeginner every week, but support always 
                            begins with people you know. Friends, fans, and the communities 
                            you’re a part of  will likely be some of your earliest supporters, 
                            not to mention your biggest resources for spreading the 
                            word about your project.
                        </p>
                    </li>

                    <li className="q-a">
                        <h3 className="question">How much work is it to run a project?</h3>
                        <div>
                            <p className="answer-part">
                                Every Bootbeginner project has its share of exhilarating and 
                                challenging moments, but the amount of work generally depends on the 
                                size and complexity of the project.
                            </p>
                            <p className="answer-part">
                                Expect the first few days after launch to be very busy as you 
                                spread the word to your community, answer questions from potential 
                                backers, and more. You may need to spend the last few days 
                                rallying your social networks in order to reach your funding goal.
                            </p>
                            <p className="answer-part">
                                Projects sometimes take on a life of their own, and in that case 
                                you should expect to spend more time creating and fulfilling rewards.
                            </p>
                        </div>
                    </li>

                    <li className="q-a">
                        <h3 className="question">How do I get in touch with questions?</h3>
                        <p className="answer">
                            You can reach out with your questions via messenger pigeon, 
                            smoke signal, or Pony Express. 
                        </p>
                    </li>
                </ul>
            </section>

            <div className="promo">
                <video></video>
                <img src={window.hopeShoe}></img>
            </div>

            <section className="learn-faqs bottom">

                <ul className="questions-answers">
                <h2 className="left-header">Why Bootbeginner?</h2>
                    <li className="q-a">
                        <div className= "q-count">
                            <p>1</p>
                            <h3 className="question num">Bootbeginner is just for footwear projects.</h3>
                        </div>
                        <p className="answer num">
                            There are many options for crowdfunding, but Bootbeginner's 
                            focus and dedication to footwear sets it apart in a crowded marketplace.
                        </p>
                    </li>

                    <li className="q-a">
                        <div className= "q-count">
                            <p>2</p>
                            <h3 className="question num">Bootbeginner offers both technical and arch support</h3>
                        </div>
                        <p className="answer num">
                            We want you to succeed and we know that's not possible if you
                            worry about your crowdfunding site not functioning or if your 
                            shoes don't offer you adequate support.
                        </p>
                    </li>

                    <li className="q-a">
                        <div className= "q-count">
                            <p>3</p>
                            <h3 className="question num">Bootbeginner is the premiere platform in its space</h3>
                        </div>
                        <p className="answer num">
                            Bootbeginner has the largest community of any footwear based
                            crowdfunding site, with over twice the market share of ßIndiegogoboots.
                        </p>
                    </li>
            </ul>

            </section>

            <section className="learn-categories">
                <h2 className="left-header">
                    Create a project in any of the following categories
                </h2>

                <ul>
                    <li className="category-option" onClick={() => this.changeCategory("sneakers")} id="sneakers">Sneakers</li>
                    <li className="category-option" onClick={() => this.changeCategory("boots")} id="boots">Boots</li>
                    <li className="category-option" onClick={() => this.changeCategory("clogs")} id="clogs">Clogs</li>
                    <li className="category-option" onClick={() => this.changeCategory("flats")} id="flats">Flats</li>
                    <li className="category-option" onClick={() => this.changeCategory("heels")} id="heels">Heels</li>
                    <li className="category-option" onClick={() => this.changeCategory("loafers")} id="loafers">Loafers</li>
                </ul>

                <section className="mid-categories">
                    <div className="category-description">
                        {displayedCategory}
                    </div>

                    <div className="interested">
                        <h3>Interested?</h3>
                        <p>
                            Click start and get sketching. See how it looks. 
                            Then share it with your friends
                        </p>
                        <Link className="start-project" to="/projects/start">Start a Project</Link> 
                    </div>

                </section>
                <div className="category-images">
                    <img></img>
                    <img></img>
                    <img></img>
                    <img></img>
                </div>
                
            </section>

            <section className="closing">
                <div className="quote">
                    <h1>"Every shoe has a tongue that cannot be silenced."</h1>
                    <p>- Brian Shoeman, a successful Bootbeginner project creator</p>
                    <Link className="start-project" to="/projects/start">Start a Project</Link> 
                </div>
            </section>
        </content>
        <Footer/>
        </>
        )
    }
}

export default ProjectLearn;
