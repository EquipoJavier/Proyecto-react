import TableCell from "@mui/material/TableCell";

export default function Cell({text}) {
  return (
    <TableCell
      style={{
        fontSize: "20px",
        textAlign: "center",
        borderRight: "1px solid black",
      }}
    >
      {text}
    </TableCell>
  );
}
