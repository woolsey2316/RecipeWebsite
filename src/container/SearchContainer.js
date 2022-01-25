import React from 'react';
import PropTypes from 'prop-types';
import styles from '@/styles/sass/searchContainer.module.scss';
import HealthLabel from '../components/HealthLabel';

function SearchContainer({labels, setLabels, activeKeyword}) {

  return <div className={styles.outer}>
    {Object.values(labels).map(labels => labels.map(label => <HealthLabel activeKeyword={activeKeyword} setLabels={setLabels}>{label}</HealthLabel>))}
  </div>;
}

SearchContainer.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string)
};

export default SearchContainer;
