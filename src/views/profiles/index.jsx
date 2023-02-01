import { Heading } from "../../components/Heading"
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';

export function ManageProfiles() {
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
                                <div className="relative mt-2">
                                <div className="flex items-center border-2 p-2 mr-8 rounded-xl bg-white">
                                    <span className="w-6 text-gray-400 align-middle ml-3"><SearchIcon /></span>
                                    <input type="text" placeholder="Search Item..." className="ml-2 outline-none w-full text-sm " />
                                </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>



                            
            </div>

        </>

        





    )
}