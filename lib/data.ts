import { prisma } from "@/lib/prisma";

const ITEMS_PER_PAGE =  10;

export const getAbsens = async (query: string, currentPage: number) => {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    try {
        const absens = await prisma.absen.findMany({
            skip: offset,
            take: ITEMS_PER_PAGE,
            where:{
                OR:[
                    {
                        name: {
                            contains: query,
                            mode: "insensitive"
                         }
                    },
                    {
                        nrp: {
                            contains: query,
                            mode: "insensitive"
                         }
                    },
                    {
                        status: {
                            equals: query,
                            mode: "insensitive"
                         }
                    },
                ]
            }
        });
        return absens;
    } catch (error) {
        throw new Error("Gagal Mengambil Data Absen");
    }
};

export const getAbsenById = async (id: string) => {
    try {
        const absen = await prisma.absen.findUnique({
            where: { id },
        });
        return absen;
    } catch (error) {
        throw new Error("Gagal Mengambil Data Absen");
    }
};

export const getAbsenPages = async (query: string) => {
    try {
        const absens = await prisma.absen.count({
            where:{
                OR:[
                    {
                        name: {
                            contains: query,
                            mode: "insensitive"
                         }
                    },
                    {
                        nrp: {
                            contains: query,
                            mode: "insensitive"
                         }
                    },
                    {
                        status: {
                            equals: query,
                            mode: "insensitive"
                         }
                    },
                ]
            }
        });
        const totalPages = Math.ceil(Number(absens) / ITEMS_PER_PAGE);
        return totalPages;
    } catch (error) {
        throw new Error("Gagal Mengambil Data Absen");
    }
};
