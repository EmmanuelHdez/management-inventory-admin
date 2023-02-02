import {    
    gridPageCountSelector,
    gridPageSelector,
    useGridApiContext,
    useGridSelector,
} from '@mui/x-data-grid';
import { Heading } from "../../components/Heading"
import { Box } from "@mui/system";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataContacts } from "../../data/sampleData";
import { dataUsersInventory } from "../../data/sampleData";
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';


function PaginationComponent() {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  
    return (
      <Pagination
        color="secondary"            
        shape="rounded"
        page={page + 1}
        count={pageCount}            
        renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
        onChange={(event, value) => apiRef.current.setPage(value - 1)}
      />
    );
}

export function ManageProfiles() {
    

    const infoColumns = [
        {
            field: 'number', 
            headerName: 'Employee No.',
            flex: 0.5,
            headerClassName: "white-column--cell",
        },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            headerClassName: "white-column--cell",
        },
        {
            field: "work_area",
            headerName: "Work Area",
            flex: 1,  
            headerClassName: "white-column--cell",          
        },
        {
            field: "employment",
            headerName: "Employment",
            flex: 1,          
            headerClassName: "white-column--cell",  
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,       
            headerClassName: "white-column--cell",     
        },
        {
            field: "phone",
            headerName: "Phone",
            flex: 1,   
            headerClassName: "white-column--cell",         
        },
        {
            headerName: "Actions",
            flex: 1,
            headerClassName: "white-column--cell",   
        }

    ]


    return (

        <>

            <div className="m-[20px]">
                <div className="flex justify-between align-middle">
                    <Heading title="MANAGE USERS" subtitle="Manage users of all workareas!" icon={<GroupAddIcon className="w-[45px] h-[45px]"/>}/>
                </div>
            </div>

            <div className="flex-col bg-indigo-50 mx-[3rem] rounded-xl mt-11 ">

                <div className="flex justify-between relative items-center mt-5 px-7 py-6 border-b-2 border-gray-300">
                    <div className="">
                        <h2 className="text-2xl text-[#2B92EC] font-semibold"> Users Information</h2>
                    </div>


                    <div className="flex justify-between space-x-6">

                        <div className="bg-white border-2 border-[#2B92EC] rounded-xl shadow-lg cursor-pointer">
                            <div className="flex items-center justify-around px-5 py-3">                  
                                <div className="text-center">
                                    <span className="text-[#2B92EC]"> Export to excel</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border-2 border-[#2B92EC] rounded-xl shadow-lg cursor-pointer">
                            <div className="flex items-center justify-around px-5 py-3">                  
                            <div className="text-center">
                                <span className="text-[#2B92EC]"> Import Data</span>
                            </div>
                            </div>
                        </div>

                        <div className="bg-[#2B92EC] rounded-xl shadow-lg cursor-pointer">
                            <div className="flex items-center justify-around px-5 py-3">                  
                                <div className="text-center">                    
                                    <div className="flex justify-between md:inline-flex items-center">

                                        <span className="text-white mr-2"><AddIcon /></span>      
                                        <span className="text-white">New User</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>

                <div className="px-5 pb-5">

                    <div className="max-w-full mx-auto relative items-center mt-5 bg-white shadow-lg rounded-xl">

                        <div className="relative overflow-x-auto flex justify-between">
                            <div className="p-4">
                                <div className="relative">
                                    <div className="flex items-center border-2 px-2 py-[5px] mr-8 rounded-xl bg-white">
                                        <span className="text-gray-400 align-middle ml-2"><SearchIcon className="w-4"/></span>
                                        <input type="text" placeholder="Search Item..." className="ml-2 outline-none w-full text-xs" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="px-2 pb-3">
                            
                            <Box className="h-[450px]"
                                sx={{
                                    "& .MuiDataGrid-root": {
                                        border: "0",
                                    },
                                    "& .MuiDataGrid-columnHeaders": {
                                        backgroundColor: "#2B92EC",
                                        borderBottom: "none",
                                    },
                                    '& .white-column--cell': {
                                        color: '#FFFFFF',
                                    },
                                    "& .MuiDataGrid-footerContainer": {
                                        borderTop: "none",
                                        backgroundColor: "#2B92EC",
                                    },                                    
                                }}
                            
                            >
                                <DataGrid
                                    rows={dataUsersInventory}
                                    columns={infoColumns}
                                    components={{
                                        Pagination: PaginationComponent,
                                    }}
                                    pageSize={10}
                                    rowsPerPageOptions={[10]}
                                    hideFooterSelectedRowCount
                                />
                            </Box>                           
                        </div>



                    </div>

                </div>



                            
            </div>

        </>

        





    )
}