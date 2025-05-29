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

// Sample student data (replace with real data or props later)
const students = [
    { id: "ST001", name: "John Doe", group: "Group A" },
    { id: "ST002", name: "Jane Smith", group: "Group B" },
]

function TableContent() {
    return (
        <div className="w-full overflow-x-auto">
            <Table className="min-w-[600px]">
                <TableCaption>List of enrolled students</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">ID</TableHead>
                        <TableHead>Student</TableHead>
                        <TableHead>Group</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {students.map((student) => (
                        <TableRow key={student.id}>
                            <TableCell className="font-medium">{student.id}</TableCell>
                            <TableCell>{student.name}</TableCell>
                            <TableCell>{student.group}</TableCell>
                            <TableCell>
                                <div className="flex justify-end gap-2">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        aria-label={`Edit ${student.name}`}
                                        className="hover:text-blue-500"
                                    >
                                        <Pencil className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="destructive"
                                        size="icon"
                                        aria-label={`Delete ${student.name}`}
                                        className="hover:bg-red-600"
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
