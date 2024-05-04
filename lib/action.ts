"use server"

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const AbsenSchema = z.object({
    name: z.string().min(6),
    nrp: z.string().min(10),
});

export const saveAbsen = async (prevstate: any, formData: FormData) => {
    const validatedFields = AbsenSchema.safeParse(Object.fromEntries(formData.entries()));
    if(!validatedFields.success){
        return{
            Error: validatedFields.error.flatten().fieldErrors,
        };
    }
    try {
        await prisma.absen.create({
            data: {
                name: validatedFields.data.name,
                nrp: validatedFields.data.nrp,
            },
        });
    } catch (error) {
        return{message: "Data gagal di tambahkan"};
    }

    revalidatePath("/absens");
    redirect("/absens");
};

export const updateAbsen = async (id:string, revstate: any, formData: FormData) => {
    const validatedFields = AbsenSchema.safeParse(Object.fromEntries(formData.entries()));
    if(!validatedFields.success){
        return{
            Error: validatedFields.error.flatten().fieldErrors,
        };
    }
    try {
        await prisma.absen.update({
            data: {
                name: validatedFields.data.name,
                nrp: validatedFields.data.nrp,
            },
            where:{id}
        });
    } catch (error) {
        return{message: "Update Absen"};
    }

    revalidatePath("/absens");
    redirect("/absens");
};

export const deleteAbsen = async (id:string) => {
    try {
        await prisma.absen.delete({
            where:{id},
        });
    } catch (error) {
        return{message: "Tidak dapat hapus Absen"};
    }
    revalidatePath("/absens");
};