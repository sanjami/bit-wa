import React from 'react';
import PropTypes from 'prop-types'

const Header = (props) => {
    return (
        <h1 className="deep-orange-text text-darken-2 center-align">{props.title}</h1>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}


Header.defaultProps = {
    title: 'BLOG'
  }

export default Header;