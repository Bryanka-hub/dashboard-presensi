import AbsenTable from "@/components/absen-table";
import { CreateButton } from "@/components/buttons";
import Pagination from "@/components/pagination";
import Search from "@/components/search";
import TableSkeleton from "@/components/skeleton";
import { getAbsenPages } from "@/lib/data";
import { Suspense } from "react";

const Absens = async ({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) => {
    const query = searchParams?.query || "";
    const currentPage = Number(searchParams?.page) || 1;

    const totalPages = await getAbsenPages(query);

    return (
        <div className="min-h-screen flex bg-gray-900 text-white">
            <div className="flex flex-col flex-grow">
                <div className="w-full px-4 py-5 flex-grow">
                    <div className="flex items-center justify-between gap-4 mb-5 card fadeInUp">
                        <Search />
                        <CreateButton />
                    </div>
                    <Suspense key={query + currentPage} fallback={<TableSkeleton />}>
                        <div className="card fadeInUp">
                            <AbsenTable quary={query} currentPage={currentPage} />
                        </div>
                    </Suspense>
                    <div className="flex justify-center mt-4 card fadeInUp">
                        <Pagination totalPages={totalPages} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Absens;
