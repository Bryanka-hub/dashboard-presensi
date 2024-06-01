"use client";
import React from 'react';

const students = [
    { id: 1, name: "Aprilia Dwi Cristianto", nrp: "3122500032", class: "B", year: 2022 },
    { id: 2, name: "Bryanka Miella Wafi", nrp: "3122500033", class: "B", year: 2022 },
    { id: 3, name: "Nandana Rajendra K", nrp: "3122500034", class: "B", year: 2022 },
    { id: 4, name: "Nabilatus Sya'adah", nrp: "3122500035", class: "B", year: 2022 },
    { id: 5, name: "Mei Rosa Widyawati", nrp: "3122500036", class: "B", year: 2022 },
    { id: 6, name: "Argya Dwi Ferdinand P", nrp: "3122500037", class: "B", year: 2022 },
    { id: 7, name: "Hammam Mujahid", nrp: "3122500038", class: "B", year: 2022 },
    { id: 8, name: "Octa Ramadhani R", nrp: "3122500039", class: "B", year: 2022 },
    { id: 9, name: "Alfira Putri N", nrp: "3122500040", class: "B", year: 2022 },
    { id: 10, name: "Fieza Nur Maulida A", nrp: "3122500041", class: "B", year: 2022 },
    { id: 11, name: "Andra Al Ayubi", nrp: "3122500042", class: "B", year: 2022 },
    { id: 12, name: "Ian Ale Harisyah", nrp: "3122500043", class: "B", year: 2022 },
    { id: 13, name: "Mirza Ramadhani H", nrp: "3122500044", class: "B", year: 2022 },
    { id: 14, name: "Yasmin Damayanti V", nrp: "3122500045", class: "B", year: 2022 },
    { id: 15, name: "Bayu Hadi Leksana", nrp: "3122500046", class: "B", year: 2022 },
    { id: 16, name: "M Ainur Ramadhan", nrp: "3122500047", class: "B", year: 2022 },
    { id: 17, name: "Andru Falah Arifin", nrp: "3122500048", class: "B", year: 2022 },
    { id: 18, name: "Khanza Fadila A", nrp: "3122500049", class: "B", year: 2022 },
    { id: 19, name: "Nur Fauziyyah D", nrp: "3122500050", class: "B", year: 2022 },
    { id: 20, name: "Yudhistira Surya R", nrp: "3122500051", class: "B", year: 2022 },
    { id: 21, name: "Muhammad Ridwan A", nrp: "3122500052", class: "B", year: 2022 },
    { id: 22, name: "Abid Farhan A", nrp: "3122500053", class: "B", year: 2022 },
    { id: 23, name: "Achmad Dwiki N", nrp: "3122500054", class: "B", year: 2022 },
    { id: 24, name: "Fadhilah Margi P", nrp: "3122500055", class: "B", year: 2022 },
    { id: 25, name: "Muhammad Ghazi A", nrp: "3122500056", class: "B", year: 2022 },
    { id: 26, name: "Aldino Erlangga D", nrp: "3122500057", class: "B", year: 2022 },
    { id: 27, name: "Surya Tegar Prasetya", nrp: "3122500058", class: "B", year: 2022 },
    { id: 28, name: "Aaron Febrian P", nrp: "3122500060", class: "B", year: 2022 },
    { id: 29, name: "Nanang Karisma F", nrp: "3121500012", class: "B", year: 2021 },
    { id: 30, name: "Mohammad Fauzi", nrp: "3121500044", class: "B", year: 2021 },
];

const handleButtonClick = (action: string, studentId: number) => {
    console.log(`Action: ${action}, Student ID: ${studentId}`);
};

const PermissionList: React.FC = () => {
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
                        <th className="py-3 px-6">Actions</th>
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
                            <td className="py-3 px-6">
                                <button 
                                    className="mr-2 px-3 py-1 text-sm text-white bg-blue-500 rounded" 
                                    onClick={() => handleButtonClick('S', student.id)}
                                >
                                    S
                                </button>
                                <button 
                                    className="mr-2 px-3 py-1 text-sm text-white bg-green-500 rounded" 
                                    onClick={() => handleButtonClick('I', student.id)}
                                >
                                    I
                                </button>
                                <button 
                                    className="px-3 py-1 text-sm text-white bg-red-500 rounded" 
                                    onClick={() => handleButtonClick('A', student.id)}
                                >
                                    A
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PermissionList;
