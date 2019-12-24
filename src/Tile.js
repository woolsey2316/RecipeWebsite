import React from 'react';
import Style from './assets/css/tile.module.css'

const Tile = ({title,description,url}) => {

    return (<article style={{backgroundImage: "url(" + url +")"}} src={Style.article}>

        <header className="major">
            <h3><a href={"/" + title.toLowerCase()} className="link">{title}</a></h3>
            <p src={Style.p}>{description}</p>
        </header>
    </article>);
}

export default Tile;