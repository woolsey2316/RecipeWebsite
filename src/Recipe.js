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
                <h2 className = {style.h2}>{title}</h2>
                <p className = {style.p}>recipe</p>
                <p className = {style.p}>{Math.round(calories) + " calories"}</p>
            </div>
        </div>
    );
}

export default Recipe;