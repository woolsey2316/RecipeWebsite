import React, {useState, useEffect} from 'react';
import style from './App.css';
import {link} from 'react-router-dom';

function About() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );

        const items = await data.json();
        
        console.log(items.items);
        setItems(items.items);
    }

    return (
        <div>
            {items.map(item => (
                <h1 key={item.itemid}>
                    <link to={`/recipe/${item.itemid}`}>{item.name}</link>
                </h1>
            ))}
        </div>
    )
}

export default About;