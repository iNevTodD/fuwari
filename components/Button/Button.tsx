import css from './Button.module.css';


type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps {
    children: React.ReactNode;
    variant: ButtonVariant;
    type?: 'button' | 'submit';
}

export default function Button({children, variant = 'primary', type = 'button',}: ButtonProps){
    return(
        <button type={type} className={`${css.button} ${css[variant]}`}>{children}</button>
    )
}