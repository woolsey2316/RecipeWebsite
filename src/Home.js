import React from 'react';
import Tile from './Tile';
import Overview from './Overview';
import Footer from './Footer';
import Banner from './Banner';

const imagePath1 = process.env.PUBLIC_URL + '/images/pic01.jpg';
const imagePath2 = process.env.PUBLIC_URL + '/images/pic02.jpg';
const imagePath3 = process.env.PUBLIC_URL + '/images/pic03.jpg';
const imagePath4 = process.env.PUBLIC_URL + '/images/pic04.jpg';
const imagePath5 = process.env.PUBLIC_URL + '/images/pic05.jpg';
const imagePath6 = process.env.PUBLIC_URL + '/images/pic06.jpg';

const Home = ()=> {
    return (
        <div id="wrapper">
            <header id="header" className="reveal alt">
                <a href="/" className="logo"><strong>Recipes</strong> <span>for various dietary requirements</span></a>
            </header>

            <div id="main">
                <Banner id="banner" className="major" />
                <section id="one" className="tiles">
                    <Tile title="Vegan" url= {imagePath1} description= "No meat, poultry, fish, dairy, eggs or honey"/>
                    <Tile title="Sugar Conscious" url= {imagePath2}  description= "Less than 4g of sugar per serving"/>
                    <Tile title="Gluten Free" url= {imagePath3} description= "free from wheat, barley, rye, and oats."/>
                    <Tile title="Paleo" url= {imagePath4} description= "foods that in the past could only be obtained by hunting and gathering."/>
                    <Tile title="Keto" url= {imagePath5} description= "Maximum 7 grams of net carbs per serving"/>
                    <Tile title="Low Carb" url= {imagePath6} description= "Less than 20% of total calories from carbs"/>
                </section>

                <section id="two">
                    <Overview/>
                </section>
            </div>
            <Footer/>
		</div>
    );
}

export default Home;