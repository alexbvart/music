import * as React from "react"

function Favorite({fill="#DEE1EC"}) {
    return (
        <svg
            width="40px"
            height="40px"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M18.938 26.588C14.52 22.593 11.96 20.421 12 17.394c.032-2.397 1.84-3.544 1.88-3.576 2.888-1.986 5.513.178 6.12.896.6-.71 3.193-2.833 6.05-.936.416.274 1.784 1.332 1.936 3.325.256 3.455-3.313 6.264-6.921 9.493a1.588 1.588 0 01-2.128-.008z"
                fill={fill}
                fillOpacity={0.7}
            />
        </svg>
    )
}

export default Favorite
