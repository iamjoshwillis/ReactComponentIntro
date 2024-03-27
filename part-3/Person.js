const Person = (props) => {
    let reply;
    if(props.age < 18) {
        reply = "You Must Be 18"
    } else {
        reply = "Please Go Vote!"
    }
    return (
        <div>
            <p>
                Learn some information about this person.
            </p>
            <p>
                Name: {props.name}, Age: {props.age}
            </p>
            <h3>{reply}</h3>
            <h3>Hobbies:</h3>
            <ul>
                {props.hobbies.map((h) => (<li>{h}</li>))}
            </ul>
        </div>
    )
}