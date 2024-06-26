"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IoSearch } from "react-icons/io5";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", "1");
        if (term) {
            params.set("query", term);
        } else {
            params.delete("query");
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);

    return (
        <div className="relative flex flex-1">
            <input
                type="text"
                className="w-full border border-gray-700 bg-gray-800 text-white py-2 pl-10 text-sm outline-none rounded-sm placeholder-gray-400"
                placeholder="Search..."
                onChange={(e) => handleSearch(e.target.value)}
                defaultValue={searchParams.get("query")?.toString()}
            />
            <IoSearch className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
        </div>
    );
};

export default Search;
