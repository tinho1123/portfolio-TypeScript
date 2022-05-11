import { Container, Grid } from '@mui/material'
import { Header, Profile } from '../shared/components'

export const Portfolio = () => {
    return (
        <Container fixed>
      <Grid container spacing={2}>

        <Grid item xs={12}>
          <Header/>
        </Grid>

        <Grid item xs={8}>
        <Profile />
        </Grid>
        
        <Grid item xs={2}>
            sds
        </Grid>
      </Grid>
    </Container>

    )
};