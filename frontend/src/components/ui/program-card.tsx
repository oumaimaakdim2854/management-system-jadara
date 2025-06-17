import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ShieldCheck,
    Code,
    Brain,
    Clock,
    GraduationCap,
    Pencil,
    Trash2,
    Plus,
} from "lucide-react"
import axios from "axios"

type ProgramType = {
    _id: string;
    title: string;
    description: string;
    duration: string;
    level: string;
    icon: keyof typeof icons;
}
const icons = {
    shield: ShieldCheck,
    code: Code,
    brain: Brain,
};

export default function CourseGrid() {

    const [showAddForm, setShowAddForm] = useState(false)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [duration, setDuration] = useState("")
    const [level, setLevel] = useState("Beginner")

    const [icon, setIcon] = useState<keyof typeof icons>("shield")
    const [programs, setPrograms] = useState<ProgramType[]>([])
    const [editingProgram, setEditingProgram] = useState<ProgramType | null>(null)

    // Récupérer les programme à l'affichage du composant
    useEffect(() => {
        fetchProgrmas()
    }, [])

    // Fonction pour récupérer programme depuis l'API
    const fetchProgrmas = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/programs", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            setPrograms(response.data)
        } catch (error) {
            console.error("Erreur lors de la récupération des Programmes :", error)
        }
    }

    // Fonction pour supprimer Programme
    const DeleteProgram = async (id: string) => {
        if (!confirm("Souhaitez-vous vraiment supprimer ?")) return
        try {
            await axios.delete(`http://localhost:5000/api/programs/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })

            // Mise à jour de l'état après suppression
            setPrograms(programs.filter(programs => programs._id !== id))
        } catch (error) {
            console.error("Erreur lors de la suppression :", error)
        }
    }

    const handleEdit = (program: ProgramType) => {
        setEditingProgram(program)
        setShowAddForm(true)
        setTitle(program.title)
        setDescription(program.description)
        setDuration(program.duration)
        setLevel(program.level)
        setIcon(program.icon)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const programData = {
            title,
            description,
            duration,
            level,
            icon,
        }

        try {
            if (editingProgram) {
                // Update
                await axios.put(
                    `http://localhost:5000/api/programs/${editingProgram._id}`,
                    programData,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                    }
                )
                // Mise à jour locale de la liste
                setPrograms(programs.map(p => (p._id === editingProgram._id ? { ...p, ...programData } : p)))
            } else {
                // Create
                const response = await axios.post(
                    "http://localhost:5000/api/programs",
                    programData,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                    }
                )
                setPrograms([...programs, response.data])
            }
            // Reset form et fermeture
            setShowAddForm(false)
            setEditingProgram(null)
            setTitle("")
            setDescription("")
            setDuration("")
            setLevel("Beginner")
            setIcon("shield")
        } catch (error) {
            console.error("Erreur lors de la sauvegarde :", error)
        }
    }


    return (
        <div className="p-4 space-y-6">
            {/* Add Course Button */}
            <div className="flex justify-end">
                <Button
                    onClick={() => setShowAddForm(!showAddForm)}
                    className="relative group overflow-hidden rounded-full px-5 py-2 text-white bg-gradient-to-r from-blue-600 to-amber-300 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></span>
                    <span className="relative z-10 flex items-center gap-2 font-medium">
                        <Plus className="h-4 w-4" />
                        Add Course
                    </span>
                </Button>
            </div>

            {/* Form appears here ABOVE cards */}
            {showAddForm && (
                <Card className="max-w-xl mx-auto p-6 shadow-xl border border-blue-400 animate-fadeIn">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">
                            Add New Course
                        </h2>


                        <div className="relative z-0 w-full group">
                            <select
                                id="icon"
                                required
                                value={icon}
                                onChange={(e) => setIcon(e.target.value as keyof typeof icons)}
                                className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            >
                                <option value="">Select an icon</option>
                                <option value="shield">Shield</option>
                                <option value="brain">Brain</option>
                                <option value="code">Code</option>
                            </select>
                            <label
                                htmlFor="icon"
                                className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Icon
                            </label>
                        </div>


                        <div className="relative z-0 w-full group">
                            <input
                                type="text"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                                className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                            />
                            <label
                                htmlFor="title"
                                className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Course Title
                            </label>
                        </div>

                        <div className="relative z-0 w-full group">
                            <textarea
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                                rows={3}
                                placeholder=" "
                                className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 resize-none appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            />
                            <label
                                htmlFor="description"
                                className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Description
                            </label>
                        </div>

                        <div className="flex gap-6">
                            <div className="relative z-0 w-1/2 group">
                                <input
                                    type="text"
                                    id="duration"
                                    value={duration}
                                    onChange={(e) => setDuration(e.target.value)}
                                    required
                                    placeholder=" "
                                    className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                />
                                <label
                                    htmlFor="duration"
                                    className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Duration
                                </label>
                            </div>

                            <div className="relative z-0 w-1/2 group">
                                <select
                                    id="level"
                                    value={level}
                                    onChange={(e) => setLevel(e.target.value)}
                                    className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                >
                                    <option>Beginner</option>
                                    <option>Intermediate</option>
                                    <option>Advanced</option>
                                </select>
                                <label
                                    htmlFor="level"
                                    className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Level
                                </label>
                            </div>
                        </div>

                        <div className="flex justify-end gap-4">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => {
                                    setShowAddForm(false)
                                    setEditingProgram(null)
                                    setTitle("")
                                    setDescription("")
                                    setDuration("")
                                    setLevel("Beginner")
                                    setIcon("shield")
                                }}
                            >
                                Cancel
                            </Button>
                            <Button type="submit" className="bg-blue-600 text-white">
                                Save Course
                            </Button>
                        </div>
                    </form>
                </Card>
            )}

            {/* Courses Grid */}
            {!showAddForm && (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {programs.map((program, index) => (
                        <Card
                            key={index}
                            className="relative flex flex-col justify-between overflow-hidden rounded-2xl border bg-background shadow-lg transition-transform hover:scale-[1.02]"
                        >
                            <div className="absolute top-0 h-1 w-full bg-gradient-to-r from-amber-300 to-blue-500" />

                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    {icons[program.icon] && React.createElement(icons[program.icon], { className: "h-6 w-6 text-blue-500" })}
                                    <CardTitle className="text-xl font-semibold">
                                        {program.title}
                                    </CardTitle>
                                </div>
                                <CardDescription className="text-sm text-muted-foreground mt-1">
                                    {program.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="space-y-3 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4" />
                                    <span>{program.duration}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <GraduationCap className="h-4 w-4" />
                                    <span>{program.level}</span>
                                </div>
                            </CardContent>

                            <CardFooter className="mt-auto flex justify-end gap-2 pt-4">
                                <Button onClick={() => handleEdit(program)} variant="outline" size="sm" className="gap-1">
                                    <Pencil className="h-4 w-4" />
                                    Update
                                </Button>
                                <Button onClick={() => DeleteProgram(program._id)} variant="destructive" size="sm" className="gap-1">
                                    <Trash2 className="h-4 w-4" />
                                    Delete
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            )}

        </div>
    )
}


