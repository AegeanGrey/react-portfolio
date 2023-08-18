import '../assets/style/App.css';

const UserInput = (props) => {

    // We establish what we will utilize as our props
    const { label, err, onChange, id, ...inputProps } = props;

    // It will take in the label key value from each of the objects within inputs array and create a new input type with it
    return (
        <div>
            <h2>{label}</h2>
            <input {...inputProps} onChange={onChange} />
            <span>{err}</span>
        </div>
    )
}

export default UserInput;
