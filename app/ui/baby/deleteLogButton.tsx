import { deleteFoodLog } from "@/app/lib/actions";
import { MdDeleteForever } from "react-icons/md";

export function DeleteLogButton({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteFoodLog.bind(null, id);

  return (
    <form action={deleteInvoiceWithId} className="my-auto">
      <button><MdDeleteForever size="30" /></button>
    </form>
  );
}