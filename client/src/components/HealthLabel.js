import React from 'react';
import PropTypes from 'prop-types';
import styles from '@/styles/sass/healthLabel.module.scss';

function HealthLabel(props) {
  function removeHealthLabel(label) {
    props.setLabels(labels => {
      return {...labels, 
        [props.activeKeyword]: labels[props.activeKeyword].filter((item, index) => item !== label)
      }
    })
}
  return <div className={styles.healthLabel}>
    <p className={styles.paragraph}>{props.children}</p>
    <img className={styles.close} onClick={() => removeHealthLabel(props.children)} src="/images/close.svg"></img>
  </div>;
}

HealthLabel.propTypes = {};

export default HealthLabel;
