import { DeleteButton, EditButton } from "@/components/buttons";
import { getAbsens } from "@/lib/data";
import { formatDate } from "@/lib/utils";

const AbsenTable = async ({
    quary,
    currentPage,
}: {
    quary: string;
    currentPage: number;
}) => {
    const absens = await getAbsens(quary, currentPage);

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-300 bg-gray-800 rounded-lg shadow-lg">
                <thead className="text-xs text-gray-400 uppercase bg-gray-700">
                    <tr>
                        <th className="py-3 px-6">#</th>
                        <th className="py-3 px-6">Name</th>
                        <th className="py-3 px-6">NRP</th>
                        <th className="py-3 px-6">Created At</th>
                        <th className="py-3 px-6">Status</th>
                        <th className="py-3 px-6">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {absens.map((absen, index) => (
                        <tr 
                            key={absen.id} 
                            className="bg-gray-800 border-b border-gray-700 hover:bg-gray-700 transition-colors"
                        >
                            <td className="py-3 px-6 font-medium">{index + 1}</td>
                            <td className="py-3 px-6">{absen.name}</td>
                            <td className="py-3 px-6">{absen.nrp}</td>
                            <td className="py-3 px-6">{formatDate(absen.createdAt.toString())}</td>
                            <td className="py-3 px-6">{absen.status}</td>
                            <td className="py-3 px-6 flex justify-center gap-2">
                                <EditButton id={absen.id} />
                                <DeleteButton id={absen.id} />
                                
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AbsenTable;
