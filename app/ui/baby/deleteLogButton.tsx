import Link from "next/link";

export function DeleteLogButton({ id }: { id: string }) {
    return (
        <Link href={`baby/${id}/delete`}>Delete</Link>
    );
}