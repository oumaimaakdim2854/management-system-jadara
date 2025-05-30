// Importation des hooks React
import { useEffect, useState } from "react"

// Importation des composants UI (table et boutons)
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Pencil, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import axios from "axios"

// Définition du type User
interface User {
    _id: string;
    name: string;
    email: string;
    role: string;
}

// Composant principal
function TableContent() {
    // État pour stocker la liste des utilisateurs
    const [users, setUsers] = useState<User[]>([])

    // Récupérer les utilisateurs à l'affichage du composant
    useEffect(() => {
        fetchUsers()
    }, [])

    // Fonction pour récupérer les utilisateurs depuis l'API
    const fetchUsers = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/users", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            setUsers(response.data)
        } catch (error) {
            console.error("Erreur lors de la récupération des utilisateurs :", error)
        }
    }

    // Fonction pour supprimer un utilisateur
    const DeleteUser = async (id: string) => {
        if (!confirm("Souhaitez-vous vraiment supprimer ceci ?")) return
        try {
            await axios.delete(`http://localhost:5000/api/users/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })

                  // Mise à jour de l'état après suppression
            setUsers(users.filter(user => user._id !== id))
        } catch (error) {
            console.error("Erreur lors de la suppression :", error)
        }
    }
    // const DeleteUser = async (id) => {
    //     // Affiche une alerte de confirmation
    //     const confirm = window.confirm("Es-tu sûr de vouloir supprimer cet utilisateur ?");

    //     // Si l'utilisateur clique sur Annuler, on arrête là
    //     if (!confirm) return;

    //     try {
    //         // Appel API pour supprimer l'utilisateur
    //         await axios.delete(`http://localhost:5000/api/users/${id}`, {
    //             headers: {
    //                 Authorization: `Bearer ${localStorage.getItem("token")}`,
    //             },
    //         });

    //         // Mise à jour de la liste sans l'utilisateur supprimé
    //         setUsers(users.filter(user => user._id !== id));
    //     } catch (error) {
    //         console.error("Erreur lors de la suppression :", error);
    //         alert("Une erreur est survenue.");
    //     }
    // };


    return (
        <div className="w-full overflow-x-auto">

            <Table className="min-w-[600px]">
                <TableCaption>Liste des utilisateurs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">ID</TableHead>
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
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.role}</TableCell>
                            <TableCell>
                                <div className="flex justify-end gap-2">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        aria-label={`Edit ${user.name}`}>
                                        <Pencil className="h-4 w-4" />
                                    </Button>
                                    <Button variant="destructive" size="icon" aria-label={`Delete ${user.name}`}
                                        onClick={() => DeleteUser(user._id)}
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default TableContent
