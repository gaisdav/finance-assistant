import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles({
  monthWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
  },
  weekWrapper: {
    display: "flex",
  },
  dayWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 4,
  },
});
