import React from "react";
import {Link} from "react-router-dom";

const StartProject = () => {
    return(
    <content className="start-project">
        <h1>Bring your creative project to life</h1>
        <Link>Start a Project</Link>

        <section className="start img-top">
            <div className="start img-left">
                <img></img>
            </div>

            <div className="start img-right">
                <img></img>
                <img></img>
            </div>
        </section>

        <section className="green">
            <h2>
                We see Bootbeginner as a home for creative minds and a 
                wonderful platform; where people who believe, respect and 
                see the beauty of footwear can support an idea and make it a reality
            </h2>
            <span>- DE LA SOLE</span>
        </section>

        <section className="start-faqs">
            <ul className="questions-answers">
                <li>
                    <h3>What can I use Bootbeginner to fund?</h3>
                    <p>
                        Bootbeginner is specifically for creative footwear projects in the 
                        following categories: Sneakers, Boots, Clogs, Flats, Heels, and Loafers.
                    </p>
                </li>

                <li>
                    <h3>Who can I get pledges from?</h3>
                    <p>
                        Many of people visit Bootbeginner every week, but support always 
                        begins with people you know. Friends, fans, and the communities 
                        you’re a part of  will likely be some of your earliest supporters, 
                        not to mention your biggest resources for spreading the 
                        word about your project.
                    </p>
                </li>

                <li>
                    <h3>How much work is it to run a project?</h3>
                    <p>
                        Every Bootbeginner project has its share of exhilarating and 
                        challenging moments, but the amount of work generally depends on the 
                        size and complexity of the project.
                        <br/>
                        Expect the first few days after launch to be very busy as you 
                        spread the word to your community, answer questions from potential 
                        backers, and more. You may need to spend the last few days 
                        rallying your social networks in order to reach your funding goal.
                        <br/>
                        Projects sometimes take on a life of their own, and in that case 
                        you should expect to spend more time creating and fulfilling rewards.
                    </p>
                </li>

                <li>
                    <h3>How do I get in touch with questions?</h3>
                    <p>
                        You can reach out with your questions via messenger pigeon, 
                        smoke signal, or Pony Express. 
                    </p>
\                </li>

                <div className="promo">
                    <video></video>
                </div>

                <h2>Why Bootbeginner?</h2>
            
                <li>
                    <span>1</span>
                    <h3>Bootbeginner is just for footwear projects.</h3>
                    <p>
                        There are many options for crowdfunding, but Bootbeginner's 
                        focus and dedication
                    </p>
                </li>

                <li>
                    <span>2</span>
                    <h3>Bootbeginner offers both technical and arch support</h3>
                    <p>
                        We want you to succeed and we know that's not possible if you
                        worry about your crowdfunding site not functioning or if your 
                        shoes don't offer you adequate support.
                    </p>
                </li>

                <li>
                    <span>3</span>
                    <h3>Bootbeginner is the premiere platform in its space</h3>
                    <p>
                        Bootbeginner has the largest community of any footwear based
                        crowdfunding site, beating out Indiegogoboots and Platformeon.
                    </p>
                </li>
            </ul>

        </section>

        <section className="categories">
            <h2>Create a project in any of the following categories</h2>

            <ul>
                <li id="sneakers">Sneakers</li>
                <li id="boots">Boots</li>
                <li id="clogs">Clogs</li>
                <li id="flats">Flats</li>
                <li id="heels">Heels</li>
                <li id="loafers">Loafers</li>
            </ul>

            <section className="mid-categories">
                <div className="category-description">
                    <p id="sneakers-description">
                        Comfortable, versatile, and stylish. Who doesn't love a good sneaker?
                    </p>
                    <p id="boots-description" hidden>
                        Boots are incredibly diverse. You can find them on a hiking trail or on a catwalk.
                    </p>
                    <p id="clogs-description" hidden>
                        Beautiful, sturdy, mysterious. They greatly resemble the trees that gave them life.
                    </p>
                    <p id="flats-description" hidden>
                        Flats sit firmly at the intersection of form and function. 
                        Providing fashion without compromising an ounce of utility.
                    </p>
                    <p id="heels-description" hidden>
                        For those who not only want to stand out, but to stand above.
                    </p>
                    <p id="loafers-description" hidden>
                        Don't let the name fool you, this daring footwear 
                        is just as at home in a lounge as it is in a workplace.
                    </p>
                </div>

                <div>
                    <h3>Interested?</h3>
                    <p>
                        Click start and get sketching. See how it looks. 
                        Then share it with your friends
                    </p>
                    <Link to="/"></Link> 
                    {/* need to replace / with next page route */}
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
            <h1>"Every shoe has a tongue that cannot be silenced"</h1>
            <span>- Brian Shoeman, a successful Bootbeginner project creator</span>
            <Link to="/"></Link> 
        </section>
    </content>
    )
}

export default StartProject;
