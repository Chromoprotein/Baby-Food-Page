import Link from "next/link";

export function UpdateLogButton({ id }: { id: string }) {
    return (
        <Link href={`baby/${id}/edit`}>Edit</Link>
    );
}