import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import useNoticias from '../hooks/useNoticias'
import Noticia from '../components/Noticia'
import Stack from '@mui/material/Stack'
import Pagination from '@mui/material/Pagination'

const ListadoNoticias = () => {

    const { noticias, totalNoticias, handleChangePagina, pagina } = useNoticias()
    const totalPaginas = Math.ceil(totalNoticias / 20)

    console.log(totalPaginas)

  return (
    <>
    <Typography 
        textAlign="center"
        marginY={5}
        variant="h3"
        component="h2"
    >
        Ultimas noticias
    </Typography>
    <Grid
        container
        spacing={3}
    >
        {noticias.map( (noticia) => (
            <Noticia key={noticia.url} noticia={noticia}/>
        ))}
    </Grid>
        <Stack 
            direction={"row"}
            justifyContent="center"
            alignItems="center" 
            spacing={2} 
            marginY={5}>
            <Pagination 
                page={pagina}
                count={totalPaginas} 
                color="primary"
                onChange={handleChangePagina}
            />
        </Stack>
    </>
  )
}

export default ListadoNoticias
