import React, {useState} from 'react';

export enum CardVariant {
    outline = 'outlined',
    primary = 'primary',
}

interface CardProps {
    width?: string,
    height?: string,
    variant: CardVariant,
    onClick: (num: number) => void, // вместо void можно указать другой тип если она должна что то возвращать
    children?: React.ReactNode,
}


const Card: React.FC<CardProps> = ({width, height, variant, onClick, children}) => { // Объект с пропсами типа CardProps
    const [state, setState] = useState(0);

    return (
        <div style={{
            width,
            height,
            border: variant === CardVariant.outline ? '3px solid #5372f0' : 'none',
            background: variant === CardVariant.primary ? 'rgba(94, 185, 185, 0.8)' : 'none'
        }} onClick={() => onClick(state)}>
            {children}
        </div>
    );
};

export default Card;