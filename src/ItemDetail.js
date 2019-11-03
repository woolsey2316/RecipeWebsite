import React, {useState, useEffect} from 'react';
import style from './App.css';
import {link} from 'react-router-dom';

function ItemDetail({match}) {
    useEffect(() => {
        fetchItem();
    }, []);

    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const fetchItem = await fetch(
            `https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get?ids=${match.params.id}`
        );
        const item = await fetchItem.json();
        console.log(item);
        setItem(item);
    }

    setItem(item);

    return (
        <div>
            <h1>{item.name}</h1>
            <img src={item.images.transparent} alt="" />
        </div>
    )
}

export default ItemDetail;