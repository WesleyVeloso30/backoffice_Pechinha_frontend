import { FormEvent, useState } from "react"

const ManualForm = (props) => {
    const [email, setEmail] = useState('');

    const handleNameInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target?.value);
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('clicou aqui');
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" className="email" onChange={handleNameInputChange} value={email}></input>
            </div>
            <input type="submit"/>
        </form>
        </>
    )
}

export default ManualForm;
