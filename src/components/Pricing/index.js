import * as React from 'react';
 
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

 

const tiers = [
  {
    title: 'Carteira Profissional',
    subheader: 'Finalista',
    price: '60',
    description: [
      'Profissional Reconhecido',
      'Profissional Reconhecido',
      'Profissional Reconhecido',
      'Profissional Reconhecido',
      'Profissional Reconhecido',
       
    ],
    buttonText: 'obter',
   
  },
  {
    title: 'Licença de Estágio',
    subheader: 'pré finalista',
    price: '15',
    description: [
      'Trabalhe em qualquer hospital ',
      'Estagiário reconhecido',
      'Trabalhe em qualquer hospital ',
      'Estagiário reconhecido',
       
    ],
    buttonText: 'Obter',
    
  },
  {
    title: '2 Via da Carteira',
    price: '30',
    subheader: 'Most popular',
    description: [
      'Estagiário reconhecido',
      'Trabalhe em qualquer hospital ',
      'Estagiário reconhecido',
      'Estagiário reconhecido',
      'Trabalhe em qualquer hospital ',
      'Estagiário reconhecido',
    ],
    buttonText: 'Obter',
    buttonVariant: 'outlined',
  },
];

 

function PricingContent() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
       Preços
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Quickly build an effective pricing table for your potential customers with
          this layout. It&apos;s built with default MUI components with little
          customization.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Carteira Profissional' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Ver' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      
      {/* End footer */}
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}