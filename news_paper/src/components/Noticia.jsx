import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const Noticia = ({noticia}) => {
    const { author, title, content, description, publishedAt, source, url, urlToImage } = noticia
  return (
    <Grid item md={6} lg={3}>
        <Card>
            {urlToImage && 
            
            <CardMedia
                component="img"
                alt={`Imagen de la noticia ${title}`}
                image={urlToImage}
                height={"250"}
            />
            }
            <CardContent>
                <Typography variant="body1" color="error">
                    {source.name}
                </Typography>
                <Typography variant="h6" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" >
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                    <Link
                    
                    href={url}
                    target="_blank"
                    variant="button"
                    width={'100%'}
                    textAlign="center"
                    sx={{
                        textDecoration: 'none'
                    }}
                    >
                    Leer Noticia
                </Link>
            </CardActions>
        </Card>
    </Grid>
  )
}

export default Noticia
