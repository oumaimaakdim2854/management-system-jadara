// // src/pages/admin/AdminLayout.tsx
// import { Outlet, Link, useLocation, useNavigate } from "react-router-dom"
// import { useEffect } from "react"

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
//     SidebarInset,
//     SidebarProvider,
//     SidebarTrigger,
// } from "@/components/ui/sidebar"

// import {
//     LayoutDashboard,
//     Users,
//     Calendar,
//     FolderKanban,
// } from "lucide-react"

// import {
//     Breadcrumb,
//     BreadcrumbItem,
//     BreadcrumbLink,
//     BreadcrumbList,
//     BreadcrumbPage,
//     BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb"
// import { Separator } from "@/components/ui/separator"

// export default function AdminLayout() {
//     const location = useLocation()
//     const navigate = useNavigate()
//     const role = localStorage.getItem("role")

//     // Rediriger les étudiants
//     useEffect(() => {
//         if (role === "student") {
//             navigate("/dashboard/programs")
//         }
//     }, [role, navigate])

//     const activePath = location.pathname

//     const menuItems = [
//         { title: "Dashboard", url: "/admin/dashboard", icon: <LayoutDashboard className="w-4 h-4" /> },
//         { title: "Users", url: "/admin/dashboard/users", icon: <Users className="w-4 h-4" /> },
//         { title: "Groups", url: "/admin/dashboard/groups", icon: <FolderKanban className="w-4 h-4" /> },
//         { title: "Events", url: "/admin/dashboard/events", icon: <Calendar className="w-4 h-4" /> },
//         { title: "Programs", url: "/admin/dashboard/programs", icon: <FolderKanban className="w-4 h-4" /> },
//     ]

//     return (
//         <SidebarProvider>
//             <div className="flex min-h-screen">
//                 {/* Sidebar admin */}
//                 <Sidebar className="w-64">
//                     <SidebarHeader>
//                         <Link to="/admin/dashboard">
//                             <img
//                                 src="/smta-logo1.png"
//                                 alt="Logo"
//                                 className="h-10 w-10 rounded-xl"
//                             />
//                         </Link>
//                     </SidebarHeader>

//                     <SidebarContent className="flex flex-col h-full">
//                         <SidebarGroup>
//                             <SidebarGroupLabel className="text-xs uppercase tracking-wider px-4 py-2 text-sky-100 bg-sky-700 rounded">
//                                 Main
//                             </SidebarGroupLabel>
//                             <SidebarGroupContent>
//                                 <SidebarMenu>
//                                     {menuItems.map(({ title, url, icon }) => (
//                                         <SidebarMenuItem key={title}>
//                                             <SidebarMenuButton
//                                                 asChild
//                                                 className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${activePath === url
//                                                         ? "bg-muted text-primary"
//                                                         : "hover:bg-amber-300 hover:text-base"
//                                                     }`}
//                                             >
//                                                 <Link to={url} className="flex items-center gap-2">
//                                                     {icon}
//                                                     <span>{title}</span>
//                                                 </Link>
//                                             </SidebarMenuButton>
//                                         </SidebarMenuItem>
//                                     ))}
//                                 </SidebarMenu>
//                             </SidebarGroupContent>
//                         </SidebarGroup>
//                     </SidebarContent>
//                     <SidebarRail />
//                 </Sidebar>

//                 {/* Main content */}
//                 <SidebarInset>
//                     <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
//                         <SidebarTrigger className="-ml-1" />
//                         <Separator orientation="vertical" className="mr-2 h-4" />
//                         <Breadcrumb>
//                             <BreadcrumbList>
//                                 <BreadcrumbItem className="hidden md:block">
//                                     <BreadcrumbLink href="#">Admin Dashboard</BreadcrumbLink>
//                                 </BreadcrumbItem>
//                                 <BreadcrumbSeparator className="hidden md:block" />
//                                 <BreadcrumbItem>
//                                     <BreadcrumbPage>Current Page</BreadcrumbPage>
//                                 </BreadcrumbItem>
//                             </BreadcrumbList>
//                         </Breadcrumb>
//                     </header>
//                     <div className="flex flex-1 flex-col gap-4 p-4">
//                         <Outlet />
//                     </div>
//                 </SidebarInset>
//             </div>
//         </SidebarProvider>
//     )
// }
