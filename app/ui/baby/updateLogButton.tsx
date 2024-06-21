import Link from "next/link";

export function UpdateLogButton({ id, children }: { id: string, children: string }) {
    return (
        <Link href={`baby/${id}/edit`}>{children}</Link>
    );
}