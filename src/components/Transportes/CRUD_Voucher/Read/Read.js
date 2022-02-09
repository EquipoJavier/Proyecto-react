import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import DeleteSweep from "@mui/icons-material/DeleteSweep";
import Edit from "@mui/icons-material/Edit";

import loading from "../../../Recursos/img/loading.gif";
import azul from "../../../Recursos/img/tarjeta_azul_delante.jpg";
import mensual from "../../../Recursos/img/bono_maria_delante.jpg";
import viajes from "../../../Recursos/img/tarjeta_multi.jpg";
import fondo from "../../../Recursos/img/final--transportes.jpg";
import "./Read.scss";
import { Add, FindReplace } from "@material-ui/icons";

const images = {
  azul: azul,
  mensual: mensual,
  viajes: viajes,
};

export default function Read({
  setDone,
  setShowForm,
  user,
  done,
  pageEndPoint,
}) {
  return (
    <div className="voucher__read-content">
      {done ? (
        <>
          <TableContainer
            style={{
              backgroundImage: `linear-gradient(
            130deg,
            rgba(255, 255, 255, 0.9) 0%,
            rgba(255, 255, 255, 0.7) 55%,
            transparent 90%
          ),url(${fondo})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            component={Paper}
          >
            <Table
              sx={{ minWidth: 300 }}
              size="large"
              aria-label="a dense table"
            >
              <TableHead
                style={{ backgroundColor: "rgba(190, 190, 190, 0.9)" }}
              >
                <TableRow>
                  <TableCell
                    style={{
                      fontSize: "20px",
                      textAlign: "center",
                      borderRight: "1px solid black",
                    }}
                  >
                    Nombre
                  </TableCell>
                  <TableCell
                    style={{
                      fontSize: "20px",
                      textAlign: "center",
                      borderRight: "1px solid black",
                    }}
                  >
                    Apellidos
                  </TableCell>
                  <TableCell
                    style={{
                      fontSize: "20px",
                      textAlign: "center",
                      borderRight: "1px solid black",
                    }}
                  >
                    Tipo de tarjeta
                  </TableCell>
                  <TableCell
                    style={{
                      fontSize: "20px",
                      textAlign: "center",
                      borderRight: "1px solid black",
                    }}
                  >
                    Su tarjeta virtual
                  </TableCell>
                  <TableCell
                    style={{
                      fontSize: "20px",
                      textAlign: "center",
                      borderRight: "1px solid black",
                    }}
                  >
                    Su fotografía
                  </TableCell>
                  <TableCell
                    style={{
                      fontSize: "20px",
                      textAlign: "center",
                      borderRight: "1px solid black",
                    }}
                  >
                    ¿Desea editar sus datos?
                  </TableCell>
                  <TableCell style={{ fontSize: "20px", textAlign: "center" }}>
                    ¿Desea borrar su tarjeta?
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pageEndPoint.map((item, i) => {
                  if (item.propertyOf === user)
                    return (
                      <TableRow
                        key={item.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell
                          style={{ fontSize: "20px", textAlign: "center" }}
                          component="th"
                          scope="row"
                        >
                          {item.name}
                        </TableCell>
                        <TableCell
                          style={{ fontSize: "20px", textAlign: "center" }}
                        >
                          {item.surname}
                        </TableCell>
                        <TableCell
                          style={{ fontSize: "20px", textAlign: "center" }}
                        >
                          {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                        </TableCell>
                        <TableCell
                          style={{ fontSize: "20px", textAlign: "center" }}
                        >
                          {}
                          {
                            <img
                              key={item.name + i}
                              style={{ width: "100px", borderRadius: "5px" }}
                              src={images[item.type]}
                              alt="Loading..."
                            />
                          }
                        </TableCell>
                        <TableCell
                          style={{ fontSize: "20px", textAlign: "center" }}
                        >
                          {
                            <img
                              key={item.name + i + "foto"}
                              style={{ width: "80px", maxHeight: "100px" }}
                              src={item.fileInput}
                              alt="Loading..."
                            />
                          }
                        </TableCell>
                        <TableCell
                          style={{ fontSize: "20px", textAlign: "center" }}
                        >
                          <Button
                            style={{ fontSize: "14px", textAlign: "center" }}
                            variant="contained"
                            color="success"
                            startIcon={<Edit />}
                            onClick={setShowForm}
                          >
                            Edit
                          </Button>
                        </TableCell>
                        <TableCell
                          style={{ fontSize: "20px", textAlign: "center" }}
                        >
                          <Button
                            style={{ fontSize: "14px", textAlign: "center" }}
                            variant="contained"
                            color="error"
                            startIcon={<DeleteSweep />}
                          >
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <Button
            style={{
              fontSize: "14px",
              textAlign: "center",
            }}
            variant="contained"
            color="warning"
            startIcon={<Add />}
            onClick={() => setShowForm(true)}
          >
            Crear nueva tarjeta
          </Button>
        </>
      ) : (
        <img
          className="voucher__read-content--loading"
          style={{
            width: "70px",
          }}
          src={loading}
          alt="Loading..."
        />
      )}
      <Button
        style={{
          fontSize: "14px",
          textAlign: "center",
        }}
        variant="contained"
        color="info"
        startIcon={<FindReplace />}
        onClick={()=>setDone(false)}
      >
        Cargar los datos de nuevo
      </Button>
    </div>
  );
}
