import React from 'react';
import PropTypes from 'prop-types';
import Keyword from '../components/Keyword'
import styles from '@/styles/sass/customSearch.module.scss'

function KeywordPanel({keywords, setKeyword, activeKeyword}) {
  return <div className={styles.inner}>
      {keywords.map(keyword => 
        <h3 className={activeKeyword === keyword ? `${styles.active}` : `${styles.normal}`} onClick={() => setKeyword(keyword)}>{keyword}</h3>
      )}
  </div>;
}

KeywordPanel.propTypes = {
    keywords:PropTypes.arrayOf(PropTypes.string)
};

export default KeywordPanel;


