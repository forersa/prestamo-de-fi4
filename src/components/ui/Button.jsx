import PropTypes from 'prop-types'
import LoadingSpinner from './LoadingSpinner'
export default function Button({ type = 'button', onClick, disabled, children, isLoading }) {
    return (
        <button 
        type={type}
        className="bg-red-200 hover:bg-red-700 text-black font-bold py-1 px-2 rounded disabled:opacity-75 disabled:cursor-not-allowed" 
        disabled={disabled}
        onClick={onClick}>
        
        <span className="flex items-center gap-2 justify-center">
            {isLoading && <LoadingSpinner className="h-5 w-5" />}
            {children}
        </span>    

        </button>
    )
}
Button.PropTypes = {
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func
}