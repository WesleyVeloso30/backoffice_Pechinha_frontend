import { AccessButton } from "../../components/accessButton"
import HookForm from "../../components/hookForm";
// import ManualForm from "../../components/manualForm";
import './login.css'

export const Login = () => {
    const imgUrl = 'https://s2-techtudo.glbimg.com/b5YztaIHpXYbpVYJsK0ySxOKW_w=/0x0:1344x768/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2024/A/h/ZskOJZQ9amSC55FcJROA/dream-studio-ai.png';

    return (
        <>
            <div className="loginContainer">
                <img className="image" src={imgUrl} alt="" />
                <aside>
                    <div className="container">
                        <h2>Login</h2>
                        {/* <ManualForm /> */}
                        <HookForm inputs={[
                            {
                                label: 'email',
                                type: 'text',
                            },
                            {
                                label: 'password',
                                type: 'text',
                            },
                        ]} />
                        {/* <AccessButton buttonName="Entrar" /> */}
                    </div>
                </aside>
            </div>
        </>
    )
}