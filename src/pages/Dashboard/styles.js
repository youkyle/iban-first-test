import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        backgroundRepeat: "no-repeat",
        boxSizing: "border-box",
      },
      headTable: {
          border: "1px solid #DFE5E8",
          borderRadius: "2px",
          backgroundColor: "#F6F9FC"
      },
      bodyTable: {
        border: "1px solid #DFE5E8",
        borderRadius: "2px",
        backgroundColor: "#F6F9FC" 
      },
      rowTable: {
          borderBottom: "1px solid #DFE5E8"
      },
      chip: {
        fontWeight: "500",
        height: "25px !important",
      }  
}))

export {useStyles}