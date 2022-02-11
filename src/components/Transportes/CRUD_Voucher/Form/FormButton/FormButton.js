import { Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import Edit from "@mui/icons-material/Edit";

export default function FormButton(btnColor="", btnBack="", bcolor="primary", comp, f, text) {
  return (
    <Button
      style={{
        fontSize: "14px",
        textAlign: "center",
        color: {btnColor},
        backgroundColor: {btnBack}
      }}
      variant="contained"
      color={bcolor}
      startIcon={<comp />}
      onClick={f}
    >
      {text}
    </Button>
  );
}