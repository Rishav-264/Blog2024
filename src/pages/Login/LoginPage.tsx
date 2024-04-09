import { useState } from "react";
import style from "./loginPage.module.css";
import Button from "../../components/global/Button/Button";
import Input from "../../components/global/Input/Input";
import {motion} from "framer-motion";

const LoginPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        email:"",
        password:"",
        confirmPassword:""
    })

    const inputHandler = (type:string, value:any):void => {
        setFormData((prev)=>({
            ...prev,
            [type]:value
        }))
    }

    const handleLogin = (canLogin:boolean):void => {
        setIsLogin(canLogin);
        setFormData({
            email:"",
            password:"",
            confirmPassword:""
        });
    }

    return (
        <>
            <div className={style.container}>
                <motion.div 
                    animate={isLogin ? {x:"0vw"} : {x:"70vw"}}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className={style.slider_image}
                >
                    {isLogin ? <Button onClick={()=>handleLogin(false)}>
                        Login
                    </Button> : <Button onClick={()=>handleLogin(true)}>
                        Register
                    </Button>}
                </motion.div>
                <motion.div 
                    className={style.form_container}
                    animate={isLogin ? {x:"0vw"} : {x:"-30vw"}}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                    {isLogin ? <div className={style.form}>
                        <h3>Welcome</h3>
                        <Input 
                            label="Email" 
                            placeholder="Enter email address" 
                            value={formData?.email}
                            onChange={(e:React.ChangeEvent<HTMLInputElement>):void=>inputHandler("email", e.target.value)}
                            validation="email"
                        />
                        <Input 
                            label="Password" 
                            placeholder="Enter password" 
                            type="password" 
                            value={formData?.password}
                            onChange={(e:React.ChangeEvent<HTMLInputElement>):void=>inputHandler("password", e.target.value)}
                        />
                    </div> : <div className={style.form}>
                        <h3>Create An Account</h3>
                        <Input 
                            label="Email" 
                            placeholder="Enter email address" 
                            value={formData?.email}
                            onChange={(e:React.ChangeEvent<HTMLInputElement>):void=>inputHandler("email", e.target.value)}
                        />
                        <Input 
                            label="Password" 
                            placeholder="Enter password" 
                            type="password"
                            value={formData?.password}
                            onChange={(e:React.ChangeEvent<HTMLInputElement>):void=>inputHandler("password", e.target.value)} 
                        />
                        <Input 
                            label="Confirm" 
                            placeholder="Enter password again" 
                            type="password" 
                            value={formData?.confirmPassword}
                            onChange={(e:React.ChangeEvent<HTMLInputElement>):void=>inputHandler("confirmPassword", e.target.value)}
                        />
                    </div>}
                </motion.div>
            </div>
        </>
    )
}

export default LoginPage;