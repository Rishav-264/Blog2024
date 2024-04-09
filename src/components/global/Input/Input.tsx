import React from 'react';
import styles from "./input.module.css";

interface InputProps {
  className?: string; 
  label?: string;
  placeholder?: string,
  type?: string,
  value?: string,
  validation?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; 
}

const Input: React.FC<InputProps> = ({ label, onChange, placeholder, type = "text", value = "", validation }) => {

    const validate = ():boolean => {
        if(validation === "email"){
            const emailRegex:RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return emailRegex.test(value);
        }
        return true;
    }

    return (
        <div className={styles.container}>
            <p className={styles.label}>{label}</p>
            <input
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                className={styles.input}
                value={value}
                style={validate() ? {border:"2px solid rgb(201, 200, 197)"} :{border:"2px solid red"}}
            />
        </div>
    );
  };

export default Input;