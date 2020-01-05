import React from 'react';
import style from "./assets/css/recipe.module.css"

const Recipe = ({title,calories,image,ingredients,url}) => {

    if (!ingredients) {
        return null;
    }
    return(
        <div className={style.recipe} >
            <a className={style.a} href={url}>
                <img className={style.image} src={image} alt="" />
            </a>
            <div>
                <a href={url}><h3 className={style.h3}>
                    <span className={style.span}>{title.charAt(0).toUpperCase() + title.slice(1)}</span></h3>
                </a>
                <p className={style.p}>{Math.round(calories) + " calories"}</p>
                <ul className={style.ul}>
                    {ingredients.map(ingredient => (
                        <li key={ingredient.text} className={style.li}>{ingredient.text}</li>)
                        )}
                </ul> 
            </div>
            
        </div>

    );
}

export default Recipe;