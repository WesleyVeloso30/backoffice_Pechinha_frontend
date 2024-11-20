import { FieldValues, useForm } from 'react-hook-form';
import { useState } from "react"
import './style.css'
import { firstLetterCapitalized } from '../../shared/utils';

const HookForm = ({ inputs }: {
    inputs: {
        type: string;
        label: string;
    }[];
}) => {
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
        <form onSubmit={handleSubmit(handleSubmitForm)}>
            <div>
                {inputs.map((input, index) => {
                    return (
                        <div key={index}>
                            <label htmlFor={`${input.label}`}>{firstLetterCapitalized(input.label)}:</label>
                            <input
                                // key={index}
                                type="text"
                                id={`${input.label}`}
                                className={`${errors[input.label] ? "campo-obrigatorio" : "campo-preenchido"}`}
                                {
                                    ...register(input.label, {
                                        required: 'Campo Obrigatório',
                                    })
                                }
                            />
                            { errors[input.label] && <p>{ errors[input.label]?.message as string }</p>}
                        </div>
                    )
                })}
            </div>
            <input type="submit"/>
        </form>
    )
}

export default HookForm;
