"use client";
import { SubmitButton } from "@/components/buttons";
import { saveAbsen } from "@/lib/action";
import { useFormState } from "react-dom";

export const Createfrom = () => {
    const [state, formAction] = useFormState(saveAbsen, null);
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
                placeholder="Full Name..."/>
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
                placeholder="Nrp..."/>
                <div id="nrp-error" aria-live="polite" aria-atomic="true">
                    <p className="mt-2 text-sm text-red-500">{state?.Error?.nrp}</p>
                </div>
            </div>
            <div id="message-error" aria-live="polite" aria-atomic="true">
                    <p className="mt-2 text-sm text-red-500">{state?.message}</p>
            </div>
            <SubmitButton label="save"/>
        </form>
    </div>
  );
};

export default Createfrom;
