// import { useEffect, useState } from "react"
// import {
//     Table, TableBody, TableCaption, TableCell,
//     TableHead, TableHeader, TableRow
// } from "@/components/ui/table"
// import { Pencil, Trash2 } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import axios from "axios"


// interface Group  {
//     _id: string;
//     name: string;
//     year: number;
//     level: string;
// }
// function Groups() {
//     const [groups, setGroups] = useState<Group[]>([])

//     useEffect(() => {
//         const fetchGroups = async () => {
//             try {
//                 const token = localStorage.getItem('token') // ou sessionStorage
//                 const response = await axios.get('http://localhost:5000/api/groups', {
//                     headers: {
//                         Authorization: `Bearer ${token}`
//                     }
//                 })
//                 setGroups(response.data)
//             } catch (error) {
//                 console.error("Erreur lors de la récupération des groupes", error)
//             }
//         }

//         fetchGroups()
//     }, [])

//     return (
//         <div className="w-full overflow-x-auto">
//             <Table className="min-w-[600px]">
//                 <TableCaption>Liste des groupes enregistrés</TableCaption>
//                 <TableHeader>
//                     <TableRow>
//                         <TableHead className="w-[200px]">Nom</TableHead>
//                         <TableHead>Année</TableHead>
//                         <TableHead>Niveau</TableHead>
//                         <TableHead className="text-right">Actions</TableHead>
//                     </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                     {groups.map((group) => (
//                         <TableRow key={group._id}>
//                             <TableCell>{group.name}</TableCell>
//                             <TableCell>{group.year}</TableCell>
//                             <TableCell>{group.level}</TableCell>
//                             <TableCell>
//                                 <div className="flex justify-end gap-2">
//                                     <Button variant="outline" size="icon">
//                                         <Pencil className="h-4 w-4" />
//                                     </Button>
//                                     <Button variant="destructive" size="icon">
//                                         <Trash2 className="h-4 w-4" />
//                                     </Button>
//                                 </div>
//                             </TableCell>
//                         </TableRow>
//                     ))}
//                 </TableBody>
//             </Table>
//         </div>
//     )
// }

// export default Groups
import { useEffect, useState } from "react"
import {
    Table, TableBody, TableCaption, TableCell,
    TableHead, TableHeader, TableRow
} from "@/components/ui/table"
import { Pencil, Trash2, Save, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import axios from "axios"
import { Input } from "@/components/ui/input"

interface Group {
    _id: string;
    name: string;
    year: number;
    level: string;
}

function Groups() {
    const [groups, setGroups] = useState<Group[]>([])
    const [editingGroupId, setEditingGroupId] = useState<string | null>(null)
    const [editedName, setEditedName] = useState("")
    const [editedYear, setEditedYear] = useState(0)
    const [editedLevel, setEditedLevel] = useState("")

    useEffect(() => {
        fetchGroups()
    }, [])

    const fetchGroups = async () => {
        try {
            const token = localStorage.getItem('token')
            const response = await axios.get('http://localhost:5000/api/groups', {
                headers: { Authorization: `Bearer ${token}` }
            })
            setGroups(response.data)
        } catch (error) {
            console.error("Erreur lors de la récupération des groupes", error)
        }
    }

    const startEditing = (group: Group) => {
        setEditingGroupId(group._id)
        setEditedName(group.name)
        setEditedYear(group.year)
        setEditedLevel(group.level)
    }

    const cancelEditing = () => {
        setEditingGroupId(null)
    }

    const handleUpdate = async (id: string) => {
        try {
            const token = localStorage.getItem("token")
            await axios.put(`http://localhost:5000/api/groups/${id}`, {
                name: editedName,
                year: editedYear,
                level: editedLevel,
            }, {
                headers: { Authorization: `Bearer ${token}` }
            })

            setGroups(groups.map(group =>
                group._id === id
                    ? { ...group, name: editedName, year: editedYear, level: editedLevel }
                    : group
            ))

            setEditingGroupId(null)
        } catch (error) {
            console.error("Erreur lors de la mise à jour :", error)
        }
    }

    const handleDelete = async (id: string) => {
        const confirm = window.confirm("Voulez-vous vraiment supprimer ce groupe ?")
        if (!confirm) return

        try {
            const token = localStorage.getItem("token")
            await axios.delete(`http://localhost:5000/api/groups/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            setGroups(groups.filter(group => group._id !== id))
        } catch (error) {
            console.error("Erreur lors de la suppression :", error)
        }
    }

    return (
        <div className="w-full overflow-x-auto">
            <Table className="min-w-[600px]">
                <TableCaption>Liste des groupes enregistrés</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[200px]">Nom</TableHead>
                        <TableHead>Année</TableHead>
                        <TableHead>Niveau</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {groups.map((group) => (
                        <TableRow key={group._id}>
                            {editingGroupId === group._id ? (
                                <>
                                    <TableCell>
                                        <Input value={editedName} onChange={(e) => setEditedName(e.target.value)} />
                                    </TableCell>
                                    <TableCell>
                                        <Input type="number" value={editedYear} onChange={(e) => setEditedYear(parseInt(e.target.value))} />
                                    </TableCell>
                                    <TableCell>
                                        <Input value={editedLevel} onChange={(e) => setEditedLevel(e.target.value)} />
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex justify-end gap-2">
                                            <Button variant="outline" size="icon" onClick={() => handleUpdate(group._id)}>
                                                <Save className="h-4 w-4" />
                                            </Button>
                                            <Button variant="ghost" size="icon" onClick={cancelEditing}>
                                                <X className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </>
                            ) : (
                                <>
                                    <TableCell>{group.name}</TableCell>
                                    <TableCell>{group.year}</TableCell>
                                    <TableCell>{group.level}</TableCell>
                                    <TableCell>
                                        <div className="flex justify-end gap-2">
                                            <Button variant="outline" size="icon" onClick={() => startEditing(group)}>
                                                <Pencil className="h-4 w-4" />
                                            </Button>
                                            <Button variant="destructive" size="icon" onClick={() => handleDelete(group._id)}>
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </>
                            )}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default Groups
