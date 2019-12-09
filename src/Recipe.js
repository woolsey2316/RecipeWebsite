import React from 'react';
import style from "./recipe.module.css"

const Recipe = ({title,calories,image,ingredients}) => {

    if (!ingredients) {
        return null;
    }
    return(
        <div className = {style.recipe} >
            <img className = {style.image} src={image} alt="" />
            <div >
                <h1 className = {style.h1}>{title}</h1>
                <ul>
                    {ingredients.map(ingredient => (
                        <li className = {style.li}>{ingredient.text}</li>
                    ))}
                </ul>
                <p>{Math.round(calories) + " calories"}</p>
            </div>
        </div>
    );
}

export default Recipe;