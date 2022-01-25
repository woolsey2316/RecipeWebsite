import React from 'react'
import styles from '@/styles/sass/RecipeHero.module.scss'

export default function RecipeHero({type}) {
    return (
        <div className={styles.heroContainer}>
            <h2 className={styles.h2}>{type} Recipes</h2>
        </div>
    )
}
