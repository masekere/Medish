import MuiTabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { styled } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const StyledTabs = styled(MuiTabs)({
  position: "relative",
  background: '#f8f9fa',
  borderRadius: 12,
  minHeight: "unset",
  padding: 4,
  marginTop: 12,
  width: 'max-content',

  ".MuiTabs-fixed": {
    overflow: "unset !important",
    overflowX: "unset !important",
  },

  ".MuiTabs-flexContainer": {
    height: "100%",
    position: "relative",
    zIndex: 10,
  },
  ".MuiTabs-indicator": {
    height: "100%",
    borderRadius: 8,
    backgroundColor: 'white',
    boxShadow: '0rem 0.25rem 0.375rem -0.0625rem rgba(0, 0, 0, 0.1), 0rem 0.125rem 0.25rem -0.0625rem rgba(0, 0, 0, 0.06)',
    transition: "all 500ms ease",
  },
  "&.MuiTabs-vertical .MuiTabs-indicator": {
    width: "100%",
  },

  button: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    textAlign: "center",
    maxWidth: "unset !important",
    minWidth: "unset !important",
    minHeight: "unset !important",
    fontSize: 16,
    fontWeight: 400,
    textTransform: "none",
    lineHeight: "inherit",
    padding: '4px 16px 4px 16px',
    borderRadius: 8,
    color: "#344767 !important",
  },
  svg: {
    marginBottom: "0 !important",
    marginRight: 6,
  }
})


export default function Tabs({items, setTabIndex, tabIndex}) {
  const handleTabChange = (e, currentValue) => {
    setTabIndex(currentValue)
}
  return (
    <AppBar elevation={0} position="static" color='transparent'>
      <StyledTabs value={tabIndex} onChange={handleTabChange}>
        {items.map(({label, icon}, index) => (
          <Tab label={label} icon={icon} key={index} />
        ))}
      </StyledTabs>
    </AppBar>
  )
}

