import React, {useEffect, useState} from 'react'

const Lista = () => {
    
    const [page, setPage] = useState(1)
    const [estado, setEstado] = useState(null)

    useEffect(() => {
        
       fetch(`https://api.datos.gob.mx/v1/condiciones-atmosfericas?page=${page}&pageSize=10`)
        .then(res => res.json())
        .then(data => setEstado(data))        

        
    }, [])


    console.log(estado);

    return (
        <div>
            <h1>Lista</h1>
            <button>Aumentar</button>

            <button>Disminuir</button> 

            {JSON.stringify(estado)}                       
        </div>
        
    )
}

export default Lista