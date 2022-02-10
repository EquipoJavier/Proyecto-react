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
import { Add, Close, FindReplace } from "@material-ui/icons";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import axios from "axios";
import Cell from "./Cell/Cell";
import Loading from "../../../Loading/Loading";

const images = {
  azul: azul,
  mensual: mensual,
  viajes: viajes,
};

export default function Read({
  url,
  setDone,
  setShowForm,
  user,
  done,
  pageEndPoint,
  setForUpdate,
  setPageEndPoint,
  setShowLogin,
}) {
  async function deleteVoucher(item) {
    confirmAlert({
      title: "Borrar tarjeta " + item.type,
      message:
        "¿Quieres borrar la tarjeta " +
        item.type +
        " de " +
        item.name +
        " " +
        item.surname +
        "?",
      buttons: [
        {
          label: "Borrar",
          onClick: async () => {
            alert("Borrando la tarjeta de " + item.name);
            await axios
              .delete(url + "/" + item.id)
              .then((response) => {
                setPageEndPoint(
                  pageEndPoint.filter((tarjeta) => tarjeta.id !== item.id)
                );
              })
              .catch((error) => {
                console.log(error);
              });
          },
        },
        {
          label: "Cancelar",
          onClick: () => alert("Cancelando operación de borrado..."),
        },
      ],
    });
  }

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
                  <Cell text={"Nombre"} border_right={"1px solid black"} />
                  <Cell text={"Apellidos"} border_right={"1px solid black"} />
                  <Cell
                    text={"Tipo de tarjeta"}
                    border_right={"1px solid black"}
                  />
                  <Cell
                    text={"Su tarjeta virtual"}
                    border_right={"1px solid black"}
                  />
                  <Cell
                    text={"Su fotografía"}
                    border_right={"1px solid black"}
                  />
                  <Cell
                    text={"¿Desea editar sus datos?"}
                    border_right={"1px solid black"}
                  />
                  <Cell
                    text={"¿Desea borrar su tarjeta?"}
                  />
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
                        <Cell text={item.name} />
                        <Cell text={item.surname} />
                        <Cell
                          text={
                            item.type.charAt(0).toUpperCase() +
                            item.type.slice(1)
                          }
                        />
                        <Cell
                          text={
                            <img
                              key={item.name + i}
                              style={{ width: "100px", borderRadius: "5px" }}
                              src={images[item.type]}
                              alt="Loading..."
                            />
                          }
                        />
                        <Cell
                          text={
                            <img
                              key={item.name + i + "foto"}
                              style={{ width: "80px", maxHeight: "100px" }}
                              src={item.fileInput}
                              alt="Loading..."
                            />
                          }
                        />
                        <Cell
                          text={
                            <Button
                              style={{ fontSize: "14px", textAlign: "center" }}
                              variant="contained"
                              color="success"
                              startIcon={<Edit />}
                              onClick={(e) => {
                                setShowForm(true);
                                setForUpdate(item);
                              }}
                            >
                              Edit
                            </Button>
                          }
                        />
                        <Cell
                          text={
                            <Button
                              style={{ fontSize: "14px", textAlign: "center" }}
                              variant="contained"
                              color="error"
                              startIcon={<DeleteSweep />}
                              onClick={() => {
                                deleteVoucher(item);
                              }}
                            >
                              Delete
                            </Button>
                          }
                        />
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
        <Loading />
      )}
      <Button
        style={{
          fontSize: "14px",
          textAlign: "center",
        }}
        variant="contained"
        color="info"
        startIcon={<FindReplace />}
        onClick={() => setDone(false)}
      >
        Cargar los datos de nuevo
      </Button>
      <Button
        style={{
          fontSize: "14px",
          textAlign: "center",
        }}
        variant="contained"
        color="info"
        startIcon={<Close />}
        onClick={() => setShowLogin(true)}
      >
        Cerrar Sesión
      </Button>
    </div>
  );
}
