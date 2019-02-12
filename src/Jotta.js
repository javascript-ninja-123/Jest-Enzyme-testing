import React from 'react';
import PropTypes from 'prop-types';

/**
 *  @function
 *  @param {object} props
 *  @return {JSX.Element}
 */
const Jotta = ({ success }) => {
    return(
        <div data-test="whatisup">
            {
                success ? <p data-test="yes">yesss</p> : <p data-test="loading">loading</p>
            }
        </div>
    )
}

Jotta.defaultProps = {success:true};

Jotta.propTypes = {
    success:PropTypes.bool
}

export default Jotta;