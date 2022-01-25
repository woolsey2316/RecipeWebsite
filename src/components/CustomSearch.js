import React, { useState } from 'react';
import KeywordPanel from '../components/KeywordPanel'
import TagContainer from '../container/TagContainer'
import SearchContainer from '../container/SearchContainer'
import styles from '@/styles/sass/customSearch.module.scss'

const labelMap = {
  "Allergies": ["celery-free","crustacean-free","Dairy-free","Egg-free","Fish-free","Gluten-free","Lupine-free","Mustard-free","Peanut-free","Sesame-free","Shellfish-free","Soy-free","Tree-Nut-free","Wheat-free"],
  "Diets": ["Alcohol-free","Balanced","High-Fiber","High-Protein","Keto","Kidney friendly","Kosher","Low-Carb","Low-Fat","Low potassium","Low-Sodium","No oil added","No-sugar","Paleo","Pescatarian","Pork-free","Red meat-free","Sugar-conscious","Vegan","Vegetarian"],
  //"Calories": [], 
  //"Nutrients": ["Fat","Saturated","Trans","Monounsturated","Polyunsaturated","Carbs","Fiber","Sugars","Protein", "Cholesterol","Sodium","Calcium","magnesium","Potassium","Iron","Phosphorus","Vitamin A","Vitamin C","Thiamin (B1)","Riboflavin (B2)","Niacin (B3)","Vitamin B6","Folate (Equivalent)","Vitamin B12","Vitamin D","Vitamin E","Vitamin K"]
}

const keywords = Object.keys(labelMap)

function CustomSearch({labels, setLabels}) {
  const [activeKeyword, setKeyword] = useState(keywords[0])
  
  return <div className={styles.outer}>
    <KeywordPanel keywords={keywords} setKeyword={setKeyword} activeKeyword={activeKeyword}></KeywordPanel>
    <TagContainer labelMap={labelMap} labels={labels} setLabels={setLabels} activeKeyword={activeKeyword}></TagContainer>
    <SearchContainer setLabels={setLabels} activeKeyword={activeKeyword} labels={labels}></SearchContainer>
  </div>;
}

export default CustomSearch;
