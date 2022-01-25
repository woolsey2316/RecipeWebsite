import React from 'react';
import PropTypes from 'prop-types';
import Label from '../components/Label';
import styles from '@/styles/sass/TagContainer.module.scss'



function TagContainer({activeKeyword, setLabels, labels, labelMap}) {
  return <div className={styles.outer}>
    {labelMap[activeKeyword].map(label => 
      <Label setLabels={setLabels} labels={labels} label={label} activeKeyword={activeKeyword}></Label>
      )}
    </div>;
}

TagContainer.propTypes = {};

export default TagContainer;
