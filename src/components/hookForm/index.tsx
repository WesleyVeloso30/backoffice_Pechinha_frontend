import { FieldValues, useForm } from 'react-hook-form';
import { useState } from "react"
import './style.css'

const HookForm = (props) => {
    const [email, setEmail] = useState('');

    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    const handleNameInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target?.value);
    }

    const handleSubmitForm = (data: FieldValues) => {
        // event.preventDefault();
        console.log('clicou aqui');
        console.log(data);
    }

    // const emailWatch = watch('email');
    // console.log(emailWatch); Fica assistindo cada alteração do input
    return (
        <>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="email"
                    className={`${errors.email ? "campo-obrigatorio" : "campo-preenchido"}`}
                    {
                        ...register('email', {
                            required: 'Campo Obrigatório',

                        })
                    }
                />
                { errors.email && <p>{ errors.email.message as string }</p>}
            </div>
            <input type="submit"/>
        </form>
        </>
    )
}

export default HookForm;
