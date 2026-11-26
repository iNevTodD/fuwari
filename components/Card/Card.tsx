import css from "./Card.module.css";

interface CardProps{
    children: React.ReactNode;
}

export default function Card({children}: CardProps){
    return (
        <div className={css.card}>{children}</div>
    )
}