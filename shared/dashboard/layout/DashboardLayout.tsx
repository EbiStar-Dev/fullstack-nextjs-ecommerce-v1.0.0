import Header from "./Header";
import Sidebar from "./Sidebar";

export default function DashboardLayout ({children}){
    return(
        <div className="dashboard-layout">
            <Sidebar/>
        <div className="dashboard-content">
            <Header/>
             <main className="dashboard-main">
                {children}
             </main>
        </div>
        </div>
    )
}