import Link from "next/link";

export default function NavLink({href,children,className}:{className?:string,href:string,children:any}){
    return <Link href={href} className={"hover:text-gray-300 text-center "+className}>
        {children}
    </Link>
}