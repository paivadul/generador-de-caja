import React, { useState } from "react"; //importa React y llama al método useState para guardar varios estados

const Generador = () => {

    const [colors, setColors] = useState([]); //estado de colores cargados (para enviar después del onClick y crear el div)
    const [inputColor, setinputColor] = useState(''); //estado de colores cargados en el input 

    const cargarColor = (e) => {
        setinputColor(e.target.value) //MANEJADOR DE CAMBIOS: agg a inputColor cada vez que se escribe en el input un valor
    }

    const addColor = () => {
        if (inputColor !== '') { //AGG COLOR: agg el color cada vez que se ejecuta el onClick
            setColors([...colors, inputColor]); //setColors ahora vale los colores cargados + el color cargado en el input
            setinputColor(''); //el input queda vacío una vez añadido el color cargado allí
        }
    }

    const subColor = (index) =>{
        setColors(colors.filter((color, i) => i !== index))
    }

    return (
        <div >
            <div class="mb-3">
                <label>Color</label>
                <input type="text" value={inputColor} onChange={cargarColor} class="form-control" ></input>
                <button onClick={addColor} >Add</button>
            </div>
            <div class="cont-color">
                {
                colors.map((color, i) => (
                    <div class="color" key={i} style={{backgroundColor: color }} onClick={() => subColor(i)} ></div>
                ))
                }
            </div>
        </div>
    )
}

export default Generador;