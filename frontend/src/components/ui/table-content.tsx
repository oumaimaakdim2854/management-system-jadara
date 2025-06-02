// // Importation des hooks React
// import { useEffect, useState } from "react"
// // Importation des composants UI (table et boutons)
// import {
//     Table,
//     TableBody,
//     TableCaption,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from "@/components/ui/table"
// import { Pencil, Trash2 } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import axios from "axios"
// // import { useNavigate } from "react-router";

// // Définition du type User
// interface User {
//     _id: string;
//     name: string;
//     email: string;
//     role: string;
// }
// // Composant principal
// function TableContent() {
//     // const navigate = useNavigate();

//     // État pour stocker la liste des utilisateurs
//     const [users, setUsers] = useState<User[]>([])
//     const [editingUser, setEditingUser] = useState<User | null>(null)
//     const [editedName, setEditedName] = useState("")
//     const [editedRole, setEditedRole] = useState("")

//     // Récupérer les utilisateurs à l'affichage du composant
//     useEffect(() => {
//         fetchUsers()
//     }, [])
//     // Fonction pour récupérer les utilisateurs depuis l'API
//     const fetchUsers = async () => {
//         try {
//             const response = await axios.get("http://localhost:5000/api/users", {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem("token")}`,
//                 },
//             })
//             setUsers(response.data)
//         } catch (error) {
//             console.error("Erreur lors de la récupération des utilisateurs :", error)
//         }
//     }
//     // Fonction pour supprimer un utilisateur
//     const DeleteUser = async (id: string) => {
//         if (!confirm("Souhaitez-vous vraiment supprimer ?")) return
//         try {
//             await axios.delete(`http://localhost:5000/api/users/${id}`, {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem("token")}`,
//                 },
//             })
//             // Mise à jour de l'état après suppression
//             setUsers(users.filter(user => user._id !== id))
//         } catch (error) {
//             console.error("Erreur lors de la suppression :", error)
//         }
//     }


//     return (
//         <div className="w-full overflow-x-auto">

//             <Table className="min-w-[600px]">
//                 <TableCaption>Liste des utilisateurs</TableCaption>
//                 <TableHeader>
//                     <TableRow>
//                         <TableHead className="w-[100px]">ID</TableHead>
//                         <TableHead>Nom</TableHead>
//                         <TableHead>Email</TableHead>
//                         <TableHead>Rôle</TableHead>
//                         <TableHead className="text-right">Actions</TableHead>
//                     </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                     {users.map((user, index) => (
//                         <TableRow key={user._id}>
//                             <TableCell className="font-medium">{index + 1}</TableCell>
//                             <TableCell>{user.name}</TableCell>
//                             <TableCell>{user.email}</TableCell>
//                             <TableCell>{user.role}</TableCell>
//                             <TableCell>
//                                 <div className="flex justify-end gap-2">
//                                     <Button
//                                         variant="outline"
//                                         size="icon"
//                                         aria-label={`Edit ${user.name}`}
//                                         onClick={() => {
//                                             setEditingUser(user)
//                                             setEditedName(user.name)
//                                             setEditedRole(user.role)
//                                         }}
//                                     // onClick={() => navigate(`/admin/dashboard/users/${user._id}/edit`)}
//                                     >
//                                         <Pencil className="h-4 w-4" />
//                                     </Button>
//                                     <Button variant="destructive" size="icon" aria-label={`Delete ${user.name}`}
//                                         onClick={() => DeleteUser(user._id)}
//                                     >
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

// export default TableContent
import { useEffect, useState } from "react"
import axios from "axios"
import { Pencil, Trash2 } from "lucide-react"
// import { toast } from "react-hot-toast"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"

interface User {
    _id: string
    name: string
    email: string
    role: string
}

const TableContent = () => {
    const [users, setUsers] = useState<User[]>([])
    const [editingUser, setEditingUser] = useState<User | null>(null)
    const [editedName, setEditedName] = useState("")
    const [editedRole, setEditedRole] = useState("")
    const [editedEmail, setEditedEmail] = useState("")


    // Charger les utilisateurs au chargement du composant
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/users", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                })
                setUsers(response.data)
            } catch (error) {
                console.error("Erreur lors du chargement des utilisateurs :", error)
                // toast.error("Erreur de chargement")
            }
        }

        fetchUsers()
    }, [])

    const handleUpdate = async (id: string) => {
        if (!editedName.trim()) {
            return
            // toast.error("Le nom est requis")
        }

        try {
            await axios.put(
                `http://localhost:5000/api/users/${id}`,
                { name: editedName, email: editedEmail, role: editedRole },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            )

            setUsers(users.map(user =>
                user._id === id ? { ...user, name: editedName, email: editedEmail, role: editedRole } : user
            ))

            // toast.success("Utilisateur mis à jour")
            setEditingUser(null)
        } catch (error) {
            console.error("Erreur lors de la mise à jour :", error)
            // toast.error("Échec de la mise à jour")
        }
    }

    const handleDelete = async (id: string) => {
        const confirm = window.confirm("Voulez-vous vraiment supprimer cet utilisateur ?")
        if (!confirm) return

        try {
            await axios.delete(`http://localhost:5000/api/users/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })

            setUsers(users.filter(user => user._id !== id))
            // toast.success("Utilisateur supprimé")
        } catch (error) {
            console.error("Erreur lors de la suppression :", error)
            // toast.error("Échec de la suppression")
        }
    }

    return (
        <div className="overflow-x-auto">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Nom</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Rôle</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map((user, index) => (
                        <TableRow key={user._id}>
                            <TableCell className="font-medium">{index + 1}</TableCell>

                            {editingUser?._id === user._id ? (
                                <>
                                    <TableCell>
                                        <input
                                            type="text"
                                            value={editedName}
                                            onChange={(e) => setEditedName(e.target.value)}
                                            className="border px-2 py-1 rounded w-full"
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <input
                                        type = "texte"
                                        value = {editedEmail}
                                        onChange={(e) => setEditedEmail(e.target.value)}
                                        className="border px-2 py-1 rounded w-full"
                                        />
                                        </TableCell>
                                    <TableCell>
                                        <select
                                            value={editedRole}
                                            onChange={(e) => setEditedRole(e.target.value)}
                                            className="border px-2 py-1 rounded w-full"
                                        >
                                            <option value="student">Étudiant</option>
                                            <option value="admin">Administrateur</option>
                                        </select>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex justify-end gap-2">
                                            <Button onClick={() => handleUpdate(user._id)}>Sauvegarder</Button>
                                            <Button
                                                variant="outline"
                                                onClick={() => {
                                                    setEditingUser(null)
                                                    setEditedName("")
                                                    setEditedEmail("")
                                                    setEditedRole("")
                                                }}
                                            >
                                                Annuler
                                            </Button>
                                        </div>
                                    </TableCell>
                                </>
                            ) : (
                                <>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.role}</TableCell>
                                    <TableCell>
                                        <div className="flex justify-end gap-2">
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                aria-label={`Edit ${user.name}`}
                                                onClick={() => {
                                                    setEditingUser(user)
                                                    setEditedName(user.name)
                                                    setEditedEmail(user.email)
                                                    setEditedRole(user.role)
                                                }}
                                            >
                                                <Pencil className="h-4 w-4" />
                                            </Button>
                                            <Button
                                                variant="destructive"
                                                size="icon"
                                                onClick={() => handleDelete(user._id)}
                                            >
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

export default TableContent
