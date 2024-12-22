import Link from "next/link";
import { LoginIcon, LoginIconBig, LinkIcon } from "@/components/Icons";

const components = [
  {
    href: "/login",
    icon: LoginIcon,
    iconBig: LoginIconBig,
    title: "ورود",
    source: "https://dribbble.com/shots/23210186-Log-in-component-1",
  },
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 py-11">
        {components.map((comp) => (
          <div key={comp.title} className="relative ">
            <Link
              className="group relative z-10 block w-full overflow-hidden -translate-x-0.5 -translate-y-0.5  border-2 border-neutral-950 bg-white p-4 transition-transform hover:-translate-x-2 hover:-translate-y-2 active:translate-x-0 active:translate-y-0"
              href={comp.href}
              style={{
                clipPath:
                  "polygon(12px 0%, calc(100% - 12px) 0%, 100% 12px, 100% 100%, calc(100% - 12px) 100%, 12px 100%, 0px 100%, 0px 0px)",
              }}>
              <span className="absolute right-[-2px] top-2 w-4 h-1 block origin-top-right rotate-45 object-cover z-20 bg-neutral-950"></span>
              <comp.iconBig />
              <comp.icon />
              <h3 className="relative z-10 line-clamp-1 text-xl font-medium text-neutral-950 duration-300 group-hover:text-indigo-600">
                {comp.title}
              </h3>
            </Link>
            <Link
              className="text-zinc-300 font-light relative px-3 pb-2 float-left flex items-center hover:text-zinc-100 transition-colors z-20"
              href={comp.source}
              target="_blank">
              <LinkIcon></LinkIcon> کانسپت
            </Link>
            <div
              className="absolute inset-0 z-0 bg-neutral-950"
              style={{
                clipPath:
                  "polygon(12px 0%, calc(100% - 12px) 0%, 100% 12px, 100% 100%, calc(100% - 12px) 100%, 12px 100%, 0px 100%, 0px 0px)",
              }}></div>
          </div>
        ))}
      </div>
    </div>
  );
}
