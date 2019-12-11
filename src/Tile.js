import React from 'react';

const Tile = ({title,description,url}) => {

    return(
        <article className="tiles" >
            <span className="image">
                <img src={url} alt="" />
            </span>
            <header className="major">
                <h3><a href={"/"+ title.toLowerCase()} className="link">{title}</a></h3>
                <p>{description}</p>
            </header>
        </article>
    );
}

export default Tile;