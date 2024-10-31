export const Text = () => {
    return (
        <>
     
        </>
    )
}

export const Arrow = (props) => {
    return (
        <>
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" className={props.className}>
                <path d="M12.25 29.75L29.75 12.25" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.25 12.25H29.75V29.75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </>
    );
};