import React from 'react';
import PropTypes from 'prop-types';

function Keyword({keyword}) {
  return <div>{keyword}</div>;
}

Keyword.propTypes = {
    keyword:PropTypes.string
};

export default Keyword;
