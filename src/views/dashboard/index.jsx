import { Heading } from "../../components/Heading"
import HomeIcon from '@mui/icons-material/Home';


export function Dashboard() {
    return (
        <div className="m-[20px]">
            <div className="flex justify-between align-middle">
                <Heading title="DASHBOARD Interseting changes sadasdasdas" subtitle="Welcome to your Dashboard dasdasddsada!" icon={<HomeIcon className="w-[45px] h-[45px]"/>}/>
            </div>
        </div>
    )
}