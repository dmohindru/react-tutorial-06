import PropTypes from 'prop-types';
// Here <Button> component acts as a wrapper to underlying <button> component 
function Button({ 
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded
    
}) {

    return <button>{ children }</button>
}

Button.propTypes = {
    checkVariationValues: ({primary, secondary, success, warning, danger}) => {
        const number = Number(!!primary)
        + Number(!!secondary)
        + Number(!!success)
        + Number(!!warning)
        + Number(!!danger)

        if (number > 1) {
            return new Error('Only one of primary, secondary, sucess, warning, danger can be true');
        }

    }

};

export default Button;

