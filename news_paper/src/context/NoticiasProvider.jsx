import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const NoticiasContext = createContext()
const  NoticiasProvider = ({children}) => {
    const [categoria, setCategoria] = useState('general')
    const [noticias, setNoticias] = useState([])
    const [pagina, setPagina]= useState(1)
    const [totalNoticias, setTotalNoticias] = useState(0)

    useEffect(() => {
        const consultarApi = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
            // const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=9be2164db5454145a6408b08134715dd`
            const { data: news } = await axios(url)
            setNoticias(news.articles)
            setTotalNoticias(news.totalResults)
        }
        consultarApi()
        setPagina(1)
    },[categoria])

    useEffect(()=> {
        const consultarApiNextPage = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=mx&page=${pagina}&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
            // const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=9be2164db5454145a6408b08134715dd`
            const { data: news } = await axios(url)
            setNoticias(news.articles)
            setTotalNoticias(news.totalResults)
        }
        consultarApiNextPage()

    },[pagina])

    const handleChangeCategoria = e => {
        setCategoria(e.target.value)
    }

    const handleChangePagina = (e, currentValue) => {
        setPagina(currentValue)
    }

    return(
        <NoticiasContext.Provider 
            value={{
                categoria, 
                handleChangeCategoria,
                noticias,
                totalNoticias,
                handleChangePagina,
                pagina
            }}
        >
            {children}
        </NoticiasContext.Provider>
    )
}

export {
    NoticiasProvider
}

export default NoticiasContext