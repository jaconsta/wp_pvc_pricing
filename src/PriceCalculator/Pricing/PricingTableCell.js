import { withStyles } from '@material-ui/core/styles'
import TableCell from '@material-ui/core/TableCell'

export default withStyles(theme => ({
  root: {
    padding: '4px 15px 4px 15px'
  },
  head: {
    backgroundColor: '#0091EA',// theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
  footer: {
    backgroundColor: '#DD2C00',
    color: theme.palette.common.white,
    fontSize: 14
  }
}))(TableCell);
