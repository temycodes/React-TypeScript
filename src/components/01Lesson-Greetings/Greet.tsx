type GreetProps = {
    name: string,
    numberCount: number,
    isLoggedIn: boolean,
}

export const Greet = (props:GreetProps) => {
    return (
        <div>
            <h2>{
                props.isLoggedIn ? `Welcome to {props.name}, you have {props.numberCount} unread messages` : 'Welcome guest'
                }
            </h2>
        </div>
    )
}