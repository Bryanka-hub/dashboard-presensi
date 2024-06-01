import React from 'react';

interface Student {
    id: number;
    name: string;
    nrp: string;
    class: string;
    year: number;
}

interface StudentTableProps {
    students: Student[];
}

const StudentTable: React.FC<StudentTableProps> = ({ students }) => {
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-300 bg-gray-800 rounded-lg shadow-lg">
                <thead className="text-xs text-gray-400 uppercase bg-gray-700">
                    <tr>
                        <th className="py-3 px-6">#</th>
                        <th className="py-3 px-6">Name</th>
                        <th className="py-3 px-6">NRP</th>
                        <th className="py-3 px-6">Class</th>
                        <th className="py-3 px-6">Year</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr 
                            key={student.id} 
                            className="bg-gray-800 border-b border-gray-700 hover:bg-gray-700 transition-colors"
                        >
                            <td className="py-3 px-6 font-medium">{index + 1}</td>
                            <td className="py-3 px-6">{student.name}</td>
                            <td className="py-3 px-6">{student.nrp}</td>
                            <td className="py-3 px-6">{student.class}</td>
                            <td className="py-3 px-6">{student.year}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentTable;
