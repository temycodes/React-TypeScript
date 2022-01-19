type StatusProps = {
    status: 'loading' | 'succcess' | 'error'
}

export const Status =(props: StatusProps)=> {
    let message 
    if (props.status === 'loading') {
        message = 'loading...'
    } else if (props.status === 'succcess') {
        message = 'Data fetched successfully'
    } else if (props.status === 'error') {
        message='Error fetching data'
    }

    return (
        <div>
            <h2>Status - {message}</h2>
        </div>
    )
}