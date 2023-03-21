import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import style from './Content.module.css';
import TabRow from "./TabRow";
import { useEffect, useState } from "react";
import ModalTab from "../ModalTab/ModalTab";


const Icon = styled(AddShoppingCartIcon)`
  color: #1667b8;
`;

const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#f5faff',
    }
}));

const StyledTableRow = styled(TableRow)(() => ({
    '&:hover': {
        backgroundColor: '#1667b806',
    },
}));

function Content() {
    const [table, setTable] = useState({ keys: [], vals: [] })
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <div className={style['wrapper']}>

            <div className={style['content-head']}>
                <h1>Notes</h1>

                <div className={style['img']}>
                    <IconButton color="primary" onClick={handleOpen} aria-label="add to shopping cart">
                        <Icon />
                    </IconButton>
                </div>
            </div>

            <TableContainer component={Paper} sx={{ maxHeight: 350, minWidth: 650 }} >
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell> All notes </StyledTableCell>
                        </StyledTableRow>
                    </TableHead>

                    <TableBody>
                        <StyledTableRow key={Math.random()} >
                            <p>test note</p>
                        </StyledTableRow>
                        {table.vals.length ? table.vals.map((row) => (
                            <StyledTableRow
                                key={Math.random()}
                            >

                                {row.map((el, index) => <TabRow key={Math.random()} id={row[0]} index={index} el={el} row={row} />)}

                            </StyledTableRow>
                        )) : null}
                    </TableBody>

                </Table>
            </TableContainer>

            {open ? <ModalTab open={open} keys={table.keys} handleClose={handleClose}  /> : null}
        </div>
    )
}

export default Content