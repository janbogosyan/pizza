import PropTypes from 'prop-types';

const Input = ({ className, value, readOnly, disabled, onChange }) => {
    return (
        <input
            className={className}
            value={value}
            disabled={disabled}
            readOnly={readOnly}
            onChange={onChange}
        />
    );
};

Input.propTypes = {
    className: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
};

export default Input;