import Link from 'next/link';

export default function HeaderButton({ children,href }:{children:any,href:string}) {
  return (
    <Link href={href} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
      {children}
    </Link>
  );
}
