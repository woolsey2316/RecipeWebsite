import React from 'react';
import Tile from './Tile';
import Overview from './Overview';
import Footer from './Footer';
import Banner from './Banner';

const Home = ()=> {
    return (
        <div id="wrapper">
            <header id="header" className="reveal alt">
                <a href="/" className="logo"><strong>Recipes</strong> <span>for various dietary requirements</span></a>
            </header>

            <div id="main">
                <Banner id="banner" className="major" />
                <section id="one" className="tiles">
                    <Tile title="Vegan" url="./images/pic01.jpg" description= "No meat, poultry, fish, dairy, eggs or honey"/>
                    <Tile title="Sugar Conscious" url="./images/pic02.jpg" description= "Less than 4g of sugar per serving"/>
                    <Tile title="Gluten Free" url="./images/pic03.jpg" description= "free from wheat, barley, rye, and oats."/>
                    <Tile title="Paleo" url="./images/pic04.jpg" description= "foods that in the past could only be obtained by hunting and gathering."/>
                    <Tile title="Keto" url="./images/pic05.jpg" description= "Maximum 7 grams of net carbs per serving"/>
                    <Tile title="Low Carb" url="./images/pic06.jpg" description= "Less than 20% of total calories from carbs"/>
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