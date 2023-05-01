import React from 'react';

interface ListProps<T> { // Может быть любым типом. Обычно любой тип обозначают буквой T
    items: T[]; // Ожидаем на входе массив элементов любого типа
    renderItem: (item: T) => React.ReactNode // Комопнент, который необходимо отрисовать
}

export default function List<T>(props: ListProps<T>) {
    return (
        <div>
            {props.items.map(props.renderItem)}
        </div>
    )
}