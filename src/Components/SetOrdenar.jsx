const SetOrdenar = (props) => {
    const handleChangeSelect = (e) =>{
        props.setOrden(e.target.value);

    }
 
    return (
            <div className="header">
            
            <div className="Selectd ">
               
                <select name="order" id="" onChange={handleChangeSelect} className="form-control input-sm bg-dark text-light">
                    <option value="" disabled selected hidden>Ordenar por Nombre</option>
                    <option value="0">Ascendente</option>
                    <option value="1">Descendente</option>
                
                </select>
            </div>
        </div>
        );
    };

export default SetOrdenar;