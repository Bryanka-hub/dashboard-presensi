"use client";

import { SubmitButton } from "@/components/buttons";
import { updateAbsen } from "@/lib/action";
import type { Absen } from "@prisma/client";
import { useFormState } from "react-dom";

export const UpdateForm = ({ absen }: { absen: Absen }) => {
  const UpdateAbsenWithId = updateAbsen.bind(null, absen.id);
  const [state, formAction] = useFormState(UpdateAbsenWithId, null);

  return (
    <div className="bg-gray-900 p-6 rounded-md">
      <form action={formAction}>
        <div className="mb-5">
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">
            Nama Lengkap
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-gray-800 border border-gray-700 text-gray-300 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Full Name..."
            defaultValue={absen.name}
          />
          <div id="name-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.name}</p>
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor="nrp" className="block text-sm font-medium text-gray-300">
            NRP
          </label>
          <input
            type="text"
            name="nrp"
            id="nrp"
            className="bg-gray-800 border border-gray-700 text-gray-300 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="NRP..."
            defaultValue={absen.nrp}
          />
          <div id="nrp-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.nrp}</p>
          </div>
        </div>
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-300">Status</label>
          <div className="flex items-center space-x-4 mt-2">
            <label className="inline-flex items-center text-gray-300">
              <input
                type="radio"
                name="status"
                value="S"
                className="form-radio text-blue-500"
                defaultChecked={absen.status === "S"}
              />
              <span className="ml-2">Sakit (S)</span>
            </label>
            <label className="inline-flex items-center text-gray-300">
              <input
                type="radio"
                name="status"
                value="I"
                className="form-radio text-green-500"
                defaultChecked={absen.status === "I"}
              />
              <span className="ml-2">Izin (I)</span>
            </label>
            <label className="inline-flex items-center text-gray-300">
              <input
                type="radio"
                name="status"
                value="A"
                className="form-radio text-red-500"
                defaultChecked={absen.status === "A"}
              />
              <span className="ml-2">Alpha (A)</span>
            </label>
          </div>
          <div id="status-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.status}</p>
          </div>
        </div>
        <div id="message-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">{state?.message}</p>
        </div>
        <SubmitButton label="Update" />
      </form>
    </div>
  );
};

export default UpdateForm;
