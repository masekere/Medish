import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'

const styles = {
    sidebar: {
        maxWidth: {xl: 330},
        gap: 5,

        flexDirection: {xs: 'row', xl: 'column'},
        flexWrap: {xs: 'wrap', xl: 'nowrap'}
    }
}

const margin = (reversed) => ({
    ml: reversed ? {xl: 'auto'} : 0,
    mr: reversed ? 0 : {xl: 'auto'}
})

const flexDirection = (reversed) => ({
    flexDirection: reversed ? {xs: 'column-reverse', xl: 'row-reverse'} : {xs: 'column-reverse', xl: 'row'}
})

export default function RowGrid({sidebar, content, reversed}) {
  return (
    <Grid  container {...flexDirection(reversed)}>
      <Grid item xs={12} xl={4}>     
        <Stack sx={styles.sidebar} {...margin(reversed)}>
          {sidebar}
        </Stack>
      </Grid>
      <Grid item xs={12} xl={8}> 
        {content}
      </Grid>
    </Grid>
  )
}