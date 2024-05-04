import { DeleteButton, EditButton } from "@/components/buttons";
import { getAbsens } from "@/lib/data";
import { formatDate } from "@/lib/utils";
const AbsenTable = async ({
    quary,
    currentPage,
}: {
    quary: string;
    currentPage: number;
} ) => {
    const absens = await getAbsens(quary, currentPage);

    return (
        <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-sm text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th className="py-3 px-6">#</th>
                    <th className="pt-3 px-6">Name</th>
                    <th className="pt-3 px-6">Nrp</th>
                    <th className="pt-3 px-6">Created At</th>
                    <th className="pt-3 px-6">Action</th>
                </tr>
            </thead>
            <tbody>
                {absens.map((absen, index) => (
                    <tr key={absen.id} className="bg-white border-b">
                    <td className="py-3 px-6">{index + 1}</td>
                    <td className="py-3 px-6">{absen.name}</td>
                    <td className="py-3 px-6">{absen.nrp}</td>
                    <td className="py-3 px-6">
                        {formatDate(absen.createdAt.toString())}
                    </td>
                    <td className="flex justify-center gap-1 py-3">
                        <EditButton id={absen.id}/>
                        <DeleteButton id={absen.id}/>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    );
};

export default AbsenTable;