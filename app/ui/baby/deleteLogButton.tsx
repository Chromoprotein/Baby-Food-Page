import { deleteFoodLog } from "@/app/lib/actions";
import { IoIosRemoveCircle } from "react-icons/io";

export function DeleteLogButton({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteFoodLog.bind(null, id);
  console.log("id test " + id)
  return (
    <form action={deleteInvoiceWithId}>
      <button><IoIosRemoveCircle /></button>
    </form>
  );
}