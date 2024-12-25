import { FormEvent, useState } from "react"

function inputValidations() {
    return {
        email: {
            regex: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i,
            message: 'Email Inválido',
        },
    }
}

enum InputTypeForValidation {
    EMAIL = 'email',
};

enum FieldId {
    NAME = 'nome',
    EMAIL = 'email',
    PASSWORD = 'senha',
}

type Field = {
    id: FieldId,
    type: string,
    label: string,
}

const formsField: Field[] = [
    {
        id: FieldId.NAME,
        type: 'text',
        label: 'Nome',
    },
    {
        id: FieldId.EMAIL,
        type: 'email',
        label: 'Email',
    },
    {
        id: FieldId.PASSWORD,
        type: 'password',
        label: 'Senha',
    },
];

const formIdReduce = formsField.reduce((acc, field) => {
    return {
        ...acc,
        [field.id]: ''
    }
}, {} as { nome: string, senha: string, email: string});

const ManualForm = () => {
    const [form, setForms] = useState(formIdReduce);
    const [error, setError] = useState(formIdReduce);

    const handleNameInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        setForms({...form, [id]: value});
    }

    const validation = ({ target }: { target: EventTarget & HTMLInputElement }): boolean => {
        if(!inputValidations()[target.id as InputTypeForValidation].regex.test(target.value)) {
            setError({ ...error, email: inputValidations()[target.id as InputTypeForValidation].message})
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
            {formsField.map(({ id, label, type }) => <div key={id} style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor={id}>{label}:</label>
                <input type={type} id={id} className="email" onChange={handleNameInputChange} value={form[id]} onBlur={validation}></input>
                {error[id]}
            </div>)}
            <div>
            </div>
            <input type="submit"/>
        </form>
        </>
    )
}

export default ManualForm;
