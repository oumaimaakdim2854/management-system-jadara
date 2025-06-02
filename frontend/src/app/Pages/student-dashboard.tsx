// student-dashboard.jsx
import Page from "./dashboard"
export default Page


// import { Outlet, Link, useLocation } from "react-router-dom"
// import {
//     Sidebar,
//     SidebarContent,
//     SidebarGroup,
//     SidebarGroupContent,
//     SidebarGroupLabel,
//     SidebarHeader,
//     SidebarMenu,
//     SidebarMenuButton,
//     SidebarMenuItem,
//     SidebarRail,
// } from "@/components/ui/sidebar"
// import {
//     LayoutDashboard,
//     Calendar,
//     Users,
// } from "lucide-react"

// export default function StudentDashboard() {
//     const location = useLocation()
//     const activePath = location.pathname

//     // Exemple simple des liens pour un étudiant
//     const menuItems = [
//         { title: "Dashboard", url: "/student/dashboard", icon: <LayoutDashboard className="w-4 h-4" /> },
//         { title: "My Events", url: "/student/dashboard/events", icon: <Calendar className="w-4 h-4" /> },
//         { title: "My Profile", url: "/student/dashboard/profile", icon: <Users className="w-4 h-4" /> },
//     ]

//     return (
//         <div className="flex min-h-screen">
//             {/* Sidebar */}
//             <Sidebar className="w-64">
//                 <SidebarHeader>
//                     <Link to="/student/dashboard">
//                         <img
//                             src="/smta-logo1.png"
//                             alt="Logo"
//                             className="h-10 w-10 rounded-xl"
//                         />
//                     </Link>
//                 </SidebarHeader>

//                 <SidebarContent className="flex flex-col h-full">
//                     <SidebarGroup>
//                         <SidebarGroupLabel className="text-xs uppercase tracking-wider px-4 py-2 text-sky-100 bg-sky-700 rounded">
//                             Student Menu
//                         </SidebarGroupLabel>
//                         <SidebarGroupContent>
//                             <SidebarMenu>
//                                 {menuItems.map(({ title, url, icon }) => (
//                                     <SidebarMenuItem key={title}>
//                                         <SidebarMenuButton
//                                             asChild
//                                             className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${activePath === url
//                                                     ? "bg-muted text-primary"
//                                                     : "hover:bg-amber-300 hover:text-base"
//                                                 }`}
//                                         >
//                                             <Link to={url} className="flex items-center gap-2">
//                                                 {icon}
//                                                 <span>{title}</span>
//                                             </Link>
//                                         </SidebarMenuButton>
//                                     </SidebarMenuItem>
//                                 ))}
//                             </SidebarMenu>
//                         </SidebarGroupContent>
//                     </SidebarGroup>
//                 </SidebarContent>

//                 <SidebarRail />
//             </Sidebar>

//             {/* Main content */}
//             <main className="flex-1 p-6">
//                 <Outlet />
//             </main>
//         </div>
//     )
// }
