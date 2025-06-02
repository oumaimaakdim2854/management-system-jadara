import Page from "./dashboard"
export default Page

// import React from "react"
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
//     Users,
//     Calendar,
//     FolderKanban,
// } from "lucide-react"

// export default function AdminDashboard() {
//     const location = useLocation()

//     // Pour gérer l'item actif de la sidebar selon l'URL actuelle
//     const activePath = location.pathname

//     // Données des liens de la sidebar avec chemins corrigés
//     const menuItems = [
//         { title: "Dashboard", url: "/admin/dashboard", icon: <LayoutDashboard className="w-4 h-4" /> },
//         { title: "Users", url: "/admin/dashboard/users", icon: <Users className="w-4 h-4" /> },
//         { title: "Groups", url: "/admin/dashboard/groups", icon: <FolderKanban className="w-4 h-4" /> },
//         { title: "Events", url: "/admin/dashboard/events", icon: <Calendar className="w-4 h-4" /> },
//         { title: "Programs", url: "/admin/dashboard/programs", icon: <FolderKanban className="w-4 h-4" /> },
//     ]

//     return (
//         <div className="flex min-h-screen">
//             {/* Sidebar */}
//             <Sidebar className="w-64">
//                 <SidebarHeader>
//                     <Link to="/admin/dashboard">
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
//                             Main
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

//             {/* Contenu principal */}
//             <main className="flex-1 p-6">
//                 <Outlet />
//             </main>
//         </div>
//     )
// }




// import { useEffect } from "react"
// import { Outlet, useLocation, useNavigate, Link } from "react-router-dom"

// import {
//     SidebarProvider,
//     SidebarInset,
//     SidebarTrigger,
// } from "@/components/ui/sidebar"

// import {
//     Breadcrumb,
//     BreadcrumbItem,
//     BreadcrumbLink,
//     BreadcrumbList,
//     BreadcrumbPage,
//     BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb"

// import {
//     LayoutDashboard,
//     Users,
//     Calendar,
//     FolderKanban,
// } from "lucide-react"

// import { Separator } from "@/components/ui/separator"

// export default function AdminLayout() {
//     const location = useLocation()
//     const navigate = useNavigate()
//     const role = localStorage.getItem("role")
//     const activePath = location.pathname

//     // Empêcher les étudiants d’accéder à certaines routes
//     useEffect(() => {
//         if (role === "student") {
//             const path = window.location.pathname
//             if (path.includes("/users")) {
//                 navigate("/dashboard/programs")
//             }
//         }
//     }, [role, navigate])

//     const menuItems = [
//         { title: "Dashboard", url: "/admin/dashboard", icon: <LayoutDashboard className="w-4 h-4" /> },
//         { title: "Users", url: "/admin/dashboard/users", icon: <Users className="w-4 h-4" /> },
//         { title: "Groups", url: "/admin/dashboard/groups", icon: <FolderKanban className="w-4 h-4" /> },
//         { title: "Events", url: "/admin/dashboard/events", icon: <Calendar className="w-4 h-4" /> },
//         { title: "Programs", url: "/admin/dashboard/programs", icon: <FolderKanban className="w-4 h-4" /> },
//     ]

//     return (
//         <SidebarProvider>
//             {/* Sidebar customisée */}
//             <aside className="h-screen w-64 bg-slate-900 text-white fixed left-0 top-0 flex flex-col z-50">
//                 <div className="flex items-center justify-center h-16 border-b border-slate-700">
//                     <Link to="/admin/dashboard">
//                         <img src="/smta-logo1.png" alt="Logo" className="h-10 w-10 rounded-xl" />
//                     </Link>
//                 </div>
//                 <nav className="flex-1 p-4 space-y-2">
//                     {menuItems.map(({ title, url, icon }) => (
//                         <Link
//                             key={title}
//                             to={url}
//                             className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${activePath === url
//                                 ? "bg-amber-300 text-black"
//                                 : "hover:bg-slate-700 hover:text-white"
//                                 }`}
//                         >
//                             {icon}
//                             <span>{title}</span>
//                         </Link>
//                     ))}
//                 </nav>
//             </aside>

//             {/* Contenu principal à droite */}
//             <SidebarInset>
//                 <header className="flex h-16 items-center gap-2 border-b px-4 ml-64 bg-white">
//                     <SidebarTrigger className="-ml-1" />
//                     <Separator orientation="vertical" className="mr-2 h-4" />
//                     <Breadcrumb>
//                         <BreadcrumbList>
//                             <BreadcrumbItem className="hidden md:block">
//                                 <BreadcrumbLink href="#">Admin</BreadcrumbLink>
//                             </BreadcrumbItem>
//                             <BreadcrumbSeparator className="hidden md:block" />
//                             <BreadcrumbItem>
//                                 <BreadcrumbPage>{activePath.split("/").pop()}</BreadcrumbPage>
//                             </BreadcrumbItem>
//                         </BreadcrumbList>
//                     </Breadcrumb>
//                 </header>

//                 <main className="flex-1 ml-64 p-6 bg-gray-50 min-h-screen">
//                     <Outlet />
//                 </main>
//             </SidebarInset>
//         </SidebarProvider>
//     )
// }
