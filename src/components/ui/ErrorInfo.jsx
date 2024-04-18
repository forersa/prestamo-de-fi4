import { MdInfoOutline } from "react-icons/md"
import PropTypes from 'prop-types'

export default function ErrorInfo({ children }) {
    return (
      <div className="flex items-center gap-2 bg-red-200 p-2 w-fit rounded-lg">
        <MdInfoOutline className="text-black" />
        <p className="text-xs text-red-500">{children}</p>
      </div>
    )
}

ErrorInfo.propTypes = {
    message: PropTypes.string 
}