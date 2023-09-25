export function SpinnerIcon() {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill="#fff"
                d="M25,5A20.14,20.14,0,0,1,45,22.88a2.51,2.51,0,0,0,2.49,2.26h0A2.52,2.52,0,0,0,50,22.33a25.14,25.14,0,0,0-50,0,2.52,2.52,0,0,0,2.5,2.81h0A2.51,2.51,0,0,0,5,22.88,20.14,20.14,0,0,1,25,5Z">
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 25 25"
                    to="360 25 25"
                    dur="1s"
                    repeatCount="indefinite"
                />
            </path>
        </svg>
    )
}

export function LogoutIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.90002 7.55999C9.21002 3.95999 11.06 2.48999 15.11 2.48999H15.24C19.71 2.48999 21.5 4.27999 21.5 8.74999V15.27C21.5 19.74 19.71 21.53 15.24 21.53H15.11C11.09 21.53 9.24002 20.08 8.91002 16.54" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 12H3.62" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.85 8.6499L2.5 11.9999L5.85 15.3499" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}