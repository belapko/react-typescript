import React, {useRef, useState} from 'react';

const EventsExample = () => {
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value)
        console.log(inputRef.current?.value)
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('drag')
    }

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
        console.log('Drop')
    }

    return (
        <div>
            <input type='text' value={value} onChange={changeHandler} placeholder={'Управляемый'}/>
            <input ref={inputRef} type='text' placeholder={'Неуправляемый'}/>
            <button onClick={clickHandler}>Click me to log input</button>
            <div onDrag={dragHandler} draggable={true} style={{
                width: '200px',
                height: '200px',
                background: '#5372f0',
                margin: '20px',
                color: 'white',
                fontSize: '100px'
            }}>1
            </div>
            <div onDrop={dropHandler} onDragLeave={leaveHandler} onDragOver={dragWithPreventHandler}
                 style={{
                     width: '200px',
                     height: '200px',
                     background: isDrag ? '#5372f0' : 'red',
                     margin: '20px',
                     color: 'white',
                     fontSize: '100px'
                 }}>2
            </div>
        </div>
    );
};

export default EventsExample;