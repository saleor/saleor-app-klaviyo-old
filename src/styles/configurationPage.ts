import { makeStyles } from "@saleor/macaw-ui";

export const useStyles = makeStyles((theme) => ({
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  secretInputRow: {
    display: "flex",
    gap: theme.spacing(1),
    alignItems: "flex-start",
  },
  confirmButtonContainer: {
    paddingTop: theme.spacing(1),
    display: "flex",
    width: "100%",
  },
  confirmButton: {
    marginLeft: "auto",
  },
  fieldContainer: {
    marginBottom: theme.spacing(2),
  },
}));
