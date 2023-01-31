import { Box, Typography } from "@mui/material";
import { Heading } from "../../components/Heading";
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import { DataGrid } from "@mui/x-data-grid";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { mockDataTeam } from "../../data/sampleData";



export default function InventoryView () {

    const columns = [
        {
            field: "id",
            headerName: "ID"
        },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell"
        },
        {
            field: "age",
            headerName: "Age",
            type: "number",
            headerAlign: "left",
            align: "left"            
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
        },
        {
            field: "access",
            headerName: "Access Level", 
            flex: 1,
            renderCell: ( {row: {access }} ) => {
                return ( 
                    <Box
                        width="60%"
                        m="0 auto"
                        p="5px"
                        display="flex"
                        justifyContent="center"
                        backgroundColor={
                        access === "admin"
                            ? "#00ff00"                            
                            : "#00e600"
                        }
                        borderRadius="4px"
                    >
                        {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
                        {access === "manager" && <SecurityOutlinedIcon />}
                        {access === "user" && <LockOpenOutlinedIcon />}
                        <Typography color={"#b1b1b1"} sx={{ ml: "5px" }}>
                        {access}
                        </Typography>
                    </Box>
                )
            }
        }


    ]


    return (
        <div className="m-[20px]">
            <div className="flex justify-between align-middle">
                <Heading title="MANAGE INVENTORY" subtitle="Manage the inventory!" icon={<ImportantDevicesIcon className="w-[45px] h-[45px]"/>}/>
            </div>

            <div>
                <DataGrid rows={mockDataTeam} columns={columns}/>
            </div>

        </div>
    )
}