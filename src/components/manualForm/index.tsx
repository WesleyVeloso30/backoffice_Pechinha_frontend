import { FormEvent, useState } from "react"

function inputValidations() {
    return {
        email: {
            regex: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i,
            message: 'Email Inválido',
        },
    }
}

enum InputType {
    EMAIL = 'email',
};

const ManualForm = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState({
        email: '',
    });

    const handleNameInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target?.value);
    }

    const validation = ({ target }: { target: EventTarget & HTMLInputElement }): boolean => {
        console.log('123',target.id);
        if(!inputValidations()[target.id as InputType].regex.test(target.value)) {
            setError({ ...error, email: inputValidations()[target.id as InputType].message})
            return false;
        };
        setError({ ...error, email: '' });
        return true;
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement> | React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        if(!error.email) {
            console.log('Enviar');
        } else {
            console.log('Não enviar');
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" className="email" onChange={handleNameInputChange} value={email} onBlur={validation}></input>
                {error.email}
            </div>
            <input type="submit"/>
        </form>
        </>
    )
}

export default ManualForm;
