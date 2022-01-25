import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '@/styles/sass/Label.module.scss'


function Label({label, labels, setLabels, activeKeyword}) {
    const nonActive = Object.values(labels).map(labels => 
        labels.reduce((prev, curr) => 
            curr !== label && prev, true
            )
        ).reduce((prev,curr) => prev && curr)

    function addHealthLabel(label) {
        setLabels(labels => { 
            return {...labels, 
                [activeKeyword]: [...labels[activeKeyword], label] 
            }
        })
    }
    function removeHealthLabel(label) {
        setLabels(labels => {
            return {...labels, 
                [activeKeyword]: labels[activeKeyword].filter((item, index) => item !== label)
            }
        })
    }
  return <div className={styles.outer}>
      {nonActive && <img className={styles.addLabel} onClick={() => addHealthLabel(label)} src="/images/addLabel.svg"></img>}
      {!nonActive && <img className={styles.removeLabel} onClick={() => removeHealthLabel(label)} src="/images/chosen.svg"></img>}
      <p className={styles.label}>{label}</p>
    </div>;
}

Label.propTypes = {
    label: PropTypes.string
};

export default Label;
