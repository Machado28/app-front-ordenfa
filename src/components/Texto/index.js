import { Button, Container, Typography } from "@material-ui/core"
import { Stack } from "@mui/material";

const Texto = ({conteudo=` Something short and leading about the collection below—its contents,
the creator, etc. Make it short and sweet, but not too short so folks
don&apos;t simply skip over it entirely.`, botao="Ver mais", titulo="Quem Somos"})=>{

  return(


<Container maxWidth="sm">
<Typography
  component="h1"
  variant="h2"
  align="center"
  color="text.primary"
  gutterBottom
>
 {titulo}
</Typography>
<Typography variant="h5" align="center" color="text.secondary" paragraph>
 {
  conteudo
 }
</Typography>
<Stack
  sx={{ pt: 4 }}
  direction="row"
  spacing={2}
  justifyContent="center"
>
  <Button variant="contained">{botao}</Button>
  
</Stack>
</Container>
  )
}
export default Texto;