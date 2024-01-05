import { FormControl, InputLabel, Select, MenuItem, } from '@mui/material'

import useNoticias from '../hooks/useNoticias'

const Formulario = () => {

    const CATEGORIAS = [
        {value: "general", label:'General'},
        {value: "business", label:'Negocios'},
        {value: "entertainment", label:'Entretenimiento'},
        {value: "health", label:'Salud'},
        {value: "science", label:'Ciencia'},
        {value: "sports", label:'Deportes'},
        {value: "technology", label:'Tecnologia'}
    ]

    const { categoria, handleChangeCategoria } = useNoticias()
    
  return (
    <form>
        <FormControl fullWidth>
            <InputLabel>Categoria</InputLabel>
            <Select
                onChange={handleChangeCategoria} 
                value={categoria}
                label="Categoria">
            {CATEGORIAS.map(category => (
                <MenuItem key={category.value} value={category.value}>
                {category.label}
                </MenuItem>
            ))}
            </Select>
            
        </FormControl>
    </form>
  )
}

export default Formulario
