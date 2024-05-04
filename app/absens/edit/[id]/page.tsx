import UpdateForm from "@/components/edit-form";
import { getAbsenById } from "@/lib/data";
import { notFound } from "next/navigation";
export const UpdateAbsenPage = async ({params}:{params:{id:string}}) => {
  const id = params.id;
  const absen = await getAbsenById(id);

  if(!absen){
    notFound();
  }

  return (
    <div className="max-w-md mx-auto mt-5">
        <h1 className="text-2xl text-center mb-2">Update Absen</h1>
        <UpdateForm absen={absen}/>
    </div>
  );
};

export default UpdateAbsenPage;