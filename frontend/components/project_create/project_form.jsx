import React from "react"
import {Link} from "react-router-dom"

const ProjectForm = () => {
    return(
        <>
        <section id="form-1">
            <span>1 of 3</span>
            <h1>First, let’s get you set up.</h1>
            <h2>
                Pick a project category to connect 
                with a specific community. You can always 
                update this later.
            </h2>
            <form>
                <select name="categories">
                    <option id="sneakers">Sneakers</option>
                    <option id="boots">Boots</option>
                    <option id="clogs">Clogs</option>
                    <option id="flats">Flats</option>
                    <option id="heels">Heels</option>
                    <option id="loafers">Loafers</option>
                </select>
                <div className="grey-line"/>
                <input type="submit">Next: Project Idea</input>
            </form>
        </section>


        <section id="form-2">
            <span>2 of 3</span>
            <h1>Describe what you'll be creating.ß</h1>
            <h2>
                And don't worry, you can edit this later, too.
            </h2>
            <form>
                <textarea></textarea>

                <div className="grey-line"/>
                
                <div className="submits">
                    <Link>Category</Link>
                    <submit>Next: Location</submit>
                                    <select name="categories">
                    <option id="sneakers">Sneakers</option>
                    <option id="boots">Boots</option>
                    <option id="clogs">Clogs</option>
                    <option id="flats">Flats</option>
                    <option id="heels">Heels</option>
                    <option id="loafers">Loafers</option>
                </select>
                <div className="grey-line"/>
                <input type="submit">Next: Location</input>
                </div>
            </form>
            {/* This section connects to the subtitle of the project */}
        </section>

        <section id="form-3">
            <span>3 of 3</span>
            <h1>Finally, let’s confirm your eligibility.</h1>
            <h2>
            Tell us where you’re based and confirm a few other details 
            before we proceed.

            </h2>
            <form>
            <select name="categories">
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

                <ul>
                    <li>
                        <input type="checkbox">I am at least 18 years old</input>
                    </li>
                    <li>
                        <input type="checkbox">I can verify a bank account and government-issued ID.</input>
                    </li>
                    <li>
                        <input type="checkbox">I have a debit and/or credit card</input>
                    </li>
                    
                </ul>
                <div className="grey-line"/>
                <input type="submit">Continue</input>
            </form>
            {/* This section connects to the subtitle of the project */}
        </section>

        </>
    )
}

export default ProjectForm;