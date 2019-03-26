import React from 'react';
import PropTypes from 'prop-types'

export default function Button(props){
    return (
        <button>{props.children}</button>
    );
}

Button.propTypes = {
    /** The size of the button */
    size: PropTypes.oneOf(['default', 'large', 'small', 'compressed']),
  
    /** The visual style used to convey the button's purpose */
    appearance: PropTypes.oneOf(['default', 'primary', 'secondary', 'cta', 'link', 'destructive']),
  
    /** Name of icon */
    // icon: PropTypes.oneOf(__ICONNAMES__),
  
    /** Name of icon */
    iconAlign: PropTypes.oneOf(['left', 'right']),
  
    /** Tooltip to show when the user hovers over the button */
    label: PropTypes.string,
  
    /** The URL to navigate to when the button is clicked */
    href: PropTypes.string,
  
    /** Specifies where to open the navigated document */
    target: PropTypes.oneOf(['_blank', '_self', '_parent', '_top']),
  
    /** Disables the button, changing the visual style and make it unable to be pressed */
    disabled: PropTypes.bool,
  
    /** Loading state when waiting for an action to complete */
    loading: PropTypes.bool,
  
    /** Successful state when action is completed successfuly */
    success: PropTypes.bool,
  
    /** Type of button */
    type: PropTypes.oneOf(['submit', 'button', 'reset']),
  
    /** Handler to be called when the button is clicked */
    onClick: PropTypes.func
  }
  
  Button.defaultProps = {
    size: 'default',
    appearance: 'default',
    icon: null,
    iconAlign: 'left',
    disabled: false,
    loading: false,
    success: false
  }