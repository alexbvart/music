import * as React from "react"

function SkipPrevious({fill="#fff"}) {

    return (
        <svg
            width="40px"
            height="40px"
            viewBox="0 0 38 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12 14a1 1 0 011-1h.333a1 1 0 011 1v12a1 1 0 01-1 1H13a1 1 0 01-1-1V14zm5.24 5.183a1 1 0 000 1.634l7.183 5.07A1 1 0 0026 25.07V14.93a1 1 0 00-1.577-.817l-7.182 5.07z"
                fill={fill}
            />
        </svg>
    )
}

export default SkipPrevious
