import { FormEvent, useState } from "react"

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

const ManualForm = (props) => {
    const [form, setForms] = useState(formIdReduce);

    const handleNameInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        setForms({...form, [id]: value});
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('clicou aqui');
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            {formsField.map(({ id, label, type }) => <div key={id}>
                <label htmlFor={id}>{label}:</label>
                <input type={type} id={id} className="email" onChange={handleNameInputChange} value={form[id]}></input>
            </div>)}
            <div>
            </div>
            <input type="submit"/>
        </form>
        </>
    )
}

export default ManualForm;
