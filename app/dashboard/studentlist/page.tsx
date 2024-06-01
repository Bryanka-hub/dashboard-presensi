// pages/student-list.tsx
import StudentTable from '@/components/student-table';

const StudentListPage = () => {
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
    

    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold mb-4">Student List</h1>
            <StudentTable students={students} />
        </div>
    );
};

export default StudentListPage;
