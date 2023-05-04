//get the data and print it to the screen
const Employee = (props) => {
    const { person } = props;
    console.log(person);

    return (
        //destructuring object into it's individual fields
        <>
            <td>{person.id}</td>
            <td>{person.email}</td>
            <td>{person.first_name}</td>
            <td>{person.last_name}</td>
            <td><img src={person.avatar} /></td>
        </>
    )
}
export default Employee;