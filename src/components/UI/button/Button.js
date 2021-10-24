import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ className, text, onClick, disabled }) => {
    return (
        <button 
            className={className}
            onClick={onClick}
            disabled={disabled}
        >{text}</button>
    );
};

Button.propTypes = {
    className: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool
};

export default Button;