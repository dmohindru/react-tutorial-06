import className from 'classnames';

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


    // build class name according to props pass down to this component
    const classes = className('flex items-center px-3 py-1.5 border', {
        'border-blue-500 bg-blue-500 text-white': primary,
        'border-gray-900 bg-gray-900 text-white': secondary,
        'border-green-500 bg-green-500 text-white': success,
        'border-yellow-400 bg-yellow-400 text-white': warning,
        'border-red-500 bg-red-500 text-white': danger,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-500': outline && primary,
        'text-gray-500': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-500': outline && warning,
        'text-red-500': outline && danger

    })

    return <button className={classes}>{ children }</button>
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

