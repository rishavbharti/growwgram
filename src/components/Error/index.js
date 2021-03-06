import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ message }) => {
  return <p className='grid place-items-center h-96'>{message}</p>;
};

Error.propTypes = {
  message: PropTypes.string,
};

export default Error;
