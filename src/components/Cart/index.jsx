import Card from '@mui/material/Card'
import MuiTable from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import DeleteIcon from '@mui/icons-material/Delete'
import FilterListIcon from '@mui/icons-material/FilterList'
import { useMemo, useRef, useState } from 'react'
import { addToArray_RemoveIfExists } from 'utils/array'
import AlertSnackBar from 'components/Snackbar'
import DeleteDialog from 'components/common/Dialog/DeleteDialog'
const thumb = 'https://ucarecdn.com/729dcf73-e2ca-40a2-88ee-7cbd291d6b68/assets_images_shop_thumb_1.png';
import Box from '@mui/material/Box'



function createData(name, calories, fat, carbs, protein, img = thumb) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    img
  }
}

let tableRows = [
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Donut', 452, 25.0, 51, 4.9),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Honeycomb', 408, 3.2, 87, 6.5),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Jelly Bean', 375, 0.0, 94, 0.0),
  createData('KitKat', 518, 26.0, 65, 7.0),
  // createData('Lollipop', 392, 0.2, 98, 0.0),
  // createData('Marshmallow', 318, 0, 81, 2.0),
  // createData('Nougat', 360, 19.0, 9, 37.0),
  // createData('Oreo', 437, 18.0, 63, 4.0),
]

const headCells = [
  {
    id: 'name',
    numeric: false,
    label: 'Product',
  },
  {
    id: 'price',
    numeric: true,
    label: 'Price',
  },
  {
    id: 'quantity',
    numeric: true,
    label: 'Quantity',
  },
  {
    id: 'total',
    numeric: true,
    label: 'total',
  },
  {
    id: 'protein',
    numeric: true,
    label: 'Protein (g)',
  },
]

const styles = {
  maxWidth: 'fit-content',
  tableContainer: {
    tHead: {
      'th:nth-child(2)': {
        pl: 0
      }
    },
  }
}

export default function Cart() {
  const [selected, setSelected] = useState([])
  const [rows, setRows] = useState(tableRows)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const rowCount = rows.length
  const selectedCount = selected.length

  // mislead
  const buttonRef = useRef()
  const dialogRef = useRef()
  const [deleteItems, setDelete] = useState(false)

  const Del = () => {
    dialogRef.current.dispatchDelete()

    if (deleteItems) {

      const set = new Set(selected)
  
      setRows(prev => [...prev.filter(row => !set.has(row.name))])
      setSelected([])
    }


  }

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name)
      setSelected(newSelected)

      return
    }
    setSelected([])
  }

  const handleClick = (event, name) => {
    // if name exists remove it from selected else add it
    const newArr = addToArray_RemoveIfExists(selected, name)

    setSelected(newArr)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const isSelected = (name) => selected.indexOf(name) !== -1

  const visibleRows = useMemo(
    () =>
      rows.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [rows, page, rowsPerPage]
  )

  return (
    <Card sx={{
      mt: 2,
      px: 5,
      pt: 2,
      // position: 'relative',
      boxShadow: "0px 5px 83px 0px rgba(9, 29, 62, 0.15)"
      // maxWidth: 'fit-content'
    }}>
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(selected.length && {
            bgcolor: 'rgba(255, 255, 255, 0.15)'
          }),
        }}
      >
        {selected.length ? (
          <Typography
            sx={{ flex: '1 1 100%' }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {selected.length} selected
          </Typography>
        ) : (
          <Typography
            sx={{ flex: '1 1 100%' }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Nutrition
          </Typography>
        )}

        {selected.length ? (
          <Tooltip title="Delete">
            <IconButton onClick={Del}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
      <TableContainer sx={styles.tableContainer}>
        <MuiTable
          sx={{ minWidth: 650 }}
          aria-labelledby="tableTitle"
        >
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  indeterminate={selectedCount > 0 && selectedCount < rowCount}
                  checked={rowCount > 0 && selectedCount === rowCount}
                  onChange={handleSelectAllClick}
                  inputProps={{
                    'aria-label': 'select all desserts',
                  }}
                />
              </TableCell>
              {headCells.map((headCell) => (
                <TableCell
                  key={headCell.id}
                  align={headCell.numeric ? 'right' : 'left'}
                >
                  {headCell.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleRows.map((row, index) => {
              const isItemSelected = isSelected(row.name)
              const labelId = `enhanced-table-checkbox-${index}`

              return (
                <TableRow
                  hover
                  onClick={(event) => handleClick(event, row.name)}
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row.name}
                  selected={isItemSelected}
                  sx={{ cursor: 'pointer' }}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isItemSelected}
                      inputProps={{
                        'aria-labelledby': labelId,
                      }}
                    />
                  </TableCell>
                  <TableCell
                    component="th"
                    id={labelId}
                    scope="row"
                    padding="none"
                  >
                    <Box display={'flex'} alignItems={'center'} gap={3} p={1}>
                      <Box width={74} height={74} component="img" src={thumb} alt={'alt'} />
                      <Typography>{row.name}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </MuiTable>
      </TableContainer>
      {rowCount > 5 && <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rowCount}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />}
      <DeleteDialog count={4} setDelete={setDelete} ref={dialogRef} />
      <AlertSnackBar severity='success' ref={buttonRef}>success is the option</AlertSnackBar>
    </Card>
  )
}