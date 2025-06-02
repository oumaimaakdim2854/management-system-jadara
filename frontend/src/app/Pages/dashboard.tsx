import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
// import TableContent from "@/components/table-content"
import { Outlet, useNavigate } from "react-router-dom"
import { useEffect } from "react"


export default function Page() {

  const role = localStorage.getItem("role")
  const navigate = useNavigate()

  // Redirige l’étudiant s’il accède à une route interdite
  useEffect(() => {
    if (role === "student") {
      const path = window.location.pathname
      if (path.includes("/users")) {
        navigate("/dashboard/programs")
      }
    }
  }, [role, navigate])


  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Building Your Application
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          
          <Outlet/>
          
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
