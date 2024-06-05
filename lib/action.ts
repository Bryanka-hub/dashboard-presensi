"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const AbsenSchema = z.object({
    name: z.string().min(6),
    nrp: z.string().min(10),
    status: z.enum(["S", "I", "A"]).optional().nullable(),
});

export const saveAbsen = async (prevstate: any, formData: FormData) => {
    const validatedFields = AbsenSchema.safeParse(Object.fromEntries(formData.entries()));
    if (!validatedFields.success) {
        return {
            Error: validatedFields.error.flatten().fieldErrors,
        };
    }

    try {
        await prisma.absen.create({
            data: {
                name: validatedFields.data.name,
                nrp: validatedFields.data.nrp,
                status: validatedFields.data.status || "hadir",
            },
        });
    } catch (error) {
        return { message: "Data gagal ditambahkan" };
    }

    revalidatePath("/absens");
    redirect("/absens");
};

export const updateAbsen = async (id: string, revstate: any, formData: FormData) => {
    const validatedFields = AbsenSchema.safeParse(Object.fromEntries(formData.entries()));
    if (!validatedFields.success) {
        return {
            Error: validatedFields.error.flatten().fieldErrors,
        };
    }

    try {
        await prisma.absen.update({
            data: {
                name: validatedFields.data.name,
                nrp: validatedFields.data.nrp,
                status: validatedFields.data.status || "null",
            },
            where: { id },
        });
    } catch (error) {
        return { message: "Gagal memperbarui data absen" };
    }

    revalidatePath("/absens");
    redirect("/absens");
};

export const deleteAbsen = async (id: string) => {
    try {
        await prisma.absen.delete({
            where: { id },
        });
    } catch (error) {
        return { message: "Tidak dapat menghapus absen" };
    }
    revalidatePath("/absens");
};
