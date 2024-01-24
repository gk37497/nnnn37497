import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Anchor({ href, text }: { href: string; text: string }) {
  return (
    <Link href={href}>
      <span className="flex flex-row items-center space-x-5 text-anchor">
        <h5 className="text-start text-xl font-bold">{text}</h5>
        <ArrowRightIcon className="h-7 w-7 font-bold" />
      </span>
    </Link>
  );
}
