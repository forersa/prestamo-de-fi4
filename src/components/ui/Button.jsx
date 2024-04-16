import PropTypes from 'prop-types'
export default function Button( { type = 'Button', onClick, disabled, children }) {
    return (
        <button 
        type={type}
        className="bg-red-200 hover:bg-red-700 text-black font-bold py-1 px-2 rounded disabled:opacity-75 disabled:cursor-not-allowed" 
    disabled={disabled}
    onClick={onClick}>
        {children}
        </button>
    )
}
Button.PropTypes = {
    type: PropTypes.oneOf(['Button', 'Submit', 'Reset']),
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func
}