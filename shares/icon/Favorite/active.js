import * as React from "react"

function FavoriteActive() {
    return (
        <svg
            width="40px"
            height="40px"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6.938 13.588C2.52 9.593-.04 7.421 0 4.394.032 1.997 1.84.85 1.88.818c2.89-1.986 5.514.178 6.122.896.6-.71 3.192-2.833 6.049-.936.416.274 1.784 1.332 1.936 3.325.256 3.455-3.313 6.264-6.921 9.493a1.588 1.588 0 01-2.128-.008z"
                fill="url(#prefix__paint0_linear)"
            />
            <defs>
                <linearGradient
                    id="prefix__paint0_linear"
                    x1={15.608}
                    y1={11.529}
                    x2={0.311}
                    y2={11.377}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FAACA8" stopOpacity={0.9} />
                    <stop offset={1} stopColor="#DDD6F3" stopOpacity={0.9} />
                </linearGradient>
            </defs>
        </svg>
    )
}

export default FavoriteActive
