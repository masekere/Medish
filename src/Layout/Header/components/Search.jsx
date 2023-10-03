import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Autocomplete from '@mui/material/Autocomplete'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import SearchIcon from "@mui/icons-material/Search"

const Search = ({setOpen, open}) => (
    <Dialog
        maxWidth='sm'
        fullWidth={true}
        disableRestoreFocus
        sx={{
            '.MuiDialog-scrollPaper': {
                alignItems: 'flex-start',
                mt: '5rem'
            }
        }}
        onClose={() => setOpen(false)} open={open} aria-labelledby='search'>
        <DialogContent>
            <Autocomplete
                fullWidth
                freeSolo
                id="search-pages"
                disableClearable
                options={siteMeta}
                // sx={{ width: 300 }}
                renderInput={(params) => (
                    <TextField {...params}
                        autoFocus
                        // label='Search...'
                        placeholder="Search..."
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <InputAdornment position="end" >
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                            type: 'search',
                        }} />
                )}
            />
        </DialogContent>
    </Dialog>
)

const siteMeta = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
    {
        label: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    }
]

export default Search