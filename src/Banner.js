import React from 'react';

const Banner = () => {
    return (
        <div className="inner">
            <header className="major">
                <h1>Recipe Search Engine</h1>
            </header>
            <div className="content">
                <p>A variety of organic recipes and food inspiration for various dietary inclinations</p>
                <ul className="actions">
                    <li><a href="#one" className="button next scrolly">Get Started</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Banner;