import React from 'react';
import style from "./assets/css/recipe.module.css"

const Recipe = ({title,calories,image,ingredients}) => {

    if (!ingredients) {
        return null;
    }
    return(
        <div className = {style.recipe} >
            <img className = {style.image} src={image} alt="" />
            <div >
                <h3 className = {style.h3}><span className = {style.span}>{title.charAt(0).toUpperCase() + title.slice(1)}</span></h3>
                <ul className = {style.ul}>
                {ingredients.map(ingredient => (
                    <li className = {style.li}>{ingredient.text}</li>)
                    )}
                </ul>
                <p className = {style.p}>{Math.round(calories) + " calories"}</p>
            </div>
        </div>
    );
}

export default Recipe;