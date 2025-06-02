import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function UpdateUser() {
    const [updateEmail, setupdateEmail] = useState("");
    const [updatename, setupdatename] = useState("");

    const { id } = useParams();
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/users/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                setupdateEmail(response.data.email);
                setupdatename(response.data.username);
            })
            .catch((error) => console.error(error));
    }, [id]);

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        axios
            .put(
                `http://localhost:5000/api/users/${id}`,
                {
                    name: updatename,
                    email: updateEmail,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            .then(() => {
                navigate(-1); // Retour à la page précédente
            })
            .catch((error) => console.error(error));
    };

    return (
        <form onSubmit={handleUpdate} className="max-w-md mx-auto mt-10 space-y-4">
            <h2 className="text-xl font-bold">Modifier l'utilisateur</h2>
            <Input
                type="email"
                value={updateEmail}
                onChange={(e) => setupdateEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <Input
                type="text"
                value={updatename}
                onChange={(e) => setupdatename(e.target.value)}
                placeholder="Nom d'utilisateur"
                required
            />
            <Button type="submit" className="w-full">
                Mettre à jour
            </Button>
        </form>
    );
}

export default UpdateUser;
