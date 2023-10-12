import Slider from '@mui/material/Slider'
import Box from '@mui/material/Box'
import { useState } from 'react';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const content = {
  title: 'Products',
  action: 'Filter'
}

const valuetext = (value) =>`$${value}`

export default function PriceRange() {
  const [value, setValue] = useState([20, 37])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  const priceRange = `Price: $${value[0]} - $${value[1]}`

  return (
    <Box width={300}>
      <Typography mb={3} fontWeight={500} variant='h5'>{content.title}</Typography>
      <Slider
        getAriaLabel={() => 'Price Range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
      <Box mt={2} display={'flex'} justifyContent={'space-between'}>
        <Typography>{priceRange}</Typography>
        <Button color="secondary">{content.action}</Button>
      </Box>
    </Box>
  )
}