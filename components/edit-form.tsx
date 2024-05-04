"use client";

import { SubmitButton } from "@/components/buttons";
import { updateAbsen } from "@/lib/action";
import type { Absen } from "@prisma/client";
import { useFormState } from "react-dom";

export const Updatefrom = ({absen}:{absen:Absen}) => {
    const UpdateAbsenWithId = updateAbsen.bind(null, absen.id)
    const [state, formAction] = useFormState(UpdateAbsenWithId, null);
  return (
    <div>
        <form action={formAction}>
            <div className="mb-5">
                <label htmlFor="name" className="block text-sm font-medium text-gray-900">Nama Lengkap</label>
                <input
                type="text"
                name="name"
                id="name"
                className="bg-grey-50 border border-grey-30 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                placeholder="Full Name..."
                defaultValue={absen.name}
                />
                <div id="name-error" aria-live="polite" aria-atomic="true">
                    <p className="mt-2 text-sm text-red-500">{state?.Error?.name}</p>
                </div>
            </div>
            <div className="mb-5">
                <label htmlFor="nrp" className="block text-sm font-medium text-gray-900">Nrp</label>
                <input
                type="text"
                name="nrp"
                id="nrp"
                className="bg-grey-50 border border-grey-30 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                placeholder="Nrp..."
                defaultValue={absen.nrp}/>
                <div id="nrp-error" aria-live="polite" aria-atomic="true">
                    <p className="mt-2 text-sm text-red-500">{state?.Error?.nrp}</p>
                </div>
            </div>
            <div id="message-error" aria-live="polite" aria-atomic="true">
                    <p className="mt-2 text-sm text-red-500">{state?.message}</p>
            </div>
            <SubmitButton label="update"/>
        </form>
    </div>
  );
};

export default Updatefrom;
