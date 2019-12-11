import React from 'react';

const Banner = () => {
    return (
        <div className="inner">
            <header className="major">
                <h1>Recipe Search Engine</h1>
            </header>
            <div className="content">
                <p>Triple-tested recipes, expert cooking tips and food inspiration</p>
                <ul className="actions">
                    <li><a href="#one" className="button next scrolly">Get Started</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Banner;