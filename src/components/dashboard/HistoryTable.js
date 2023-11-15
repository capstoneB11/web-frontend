import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import format from "date-fns/format";
import id from "date-fns/locale/id"; // Import the Indonesian locale

const HistoryTable = ({ selectedDate, chickenCount }) => {
  // Filter data based on the selected date
  const filteredData = chickenCount.filter((data) => {
    const dataDate = new Date(data.timestamp);
    const selected = new Date(selectedDate);
    return dataDate.toDateString() === selected.toDateString();
  });

  return (
    <TableContainer
      className="mb-4"
      component={Paper}
      style={{ maxHeight: 300, overflowY: "auto" }}
    >
      <Table aria-label="chicken count history">
        <TableHead>
          <TableRow>
            <TableCell align="center">Tanggal</TableCell>
            <TableCell align="center">Prediksi Jumlah Ayam</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData.map((data, index) => (
            <TableRow key={index}>
              <TableCell align="center" component="th" scope="row">
                {format(new Date(data.timestamp), "dd MMMM yyyy, HH:mm:ss", {
                  locale: id,
                })}
              </TableCell>
              <TableCell align="center">{data.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HistoryTable;
