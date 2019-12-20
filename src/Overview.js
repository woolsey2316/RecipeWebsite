import React from 'react';

const Overview = ({title,description,url}) => {

    return (
        <div className="inner">
            <header className="major">
                <h2>Purpose</h2>
            </header>
            <p>Have a think about your group of friends and colleagues right now. 
            When was the last time you ate together and what did they order? Chances 
            are they had to avoid some food or beverages. Maybe it was a soy latte, 
            perhaps a gluten free sandwich, or maybe a vegetarian salad. We’re sure 
            you can think of someone.
            </p>
            <p>
            In fact, 1 in 5 Australians currently live with a food intolerance or allergy, 
            which means the possibility of you having to cater for one or more special 
            dietary requirements is almost a certainty. Furthermore, there’s a wide variety 
            of voluntary diets that have risen to fame in recent times. These aren’t always 
            due to a food intolerance or allergy, but can restrict a similar if not greater 
            range of foods.</p>
            <ul className="actions">
                <li><a href="landing.html" className="button next">Get Started</a></li>
            </ul>
        </div>
    );
}

export default Overview;