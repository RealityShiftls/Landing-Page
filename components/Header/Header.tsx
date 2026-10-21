import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Header() {
  return (
    <header className="relative mx-7 md:mx-10 h-87.5 md:h-125">

      {/* Border wrapper */}
      <div
        className="absolute inset-0 bg-white rounded-2xl md:rounded-4xl
        md:[clip-path:polygon(0_0,100%_0,100%_70%,55%_70%,55%_100%,0_100%)]"
      />

      {/* Image and overlay */}
      <div className="absolute inset-0.5 overflow-hidden rounded-2xl md:rounded-4xl">
        <Image
          src="/drone.jpg"
          alt="Agricultural drone flying over a farm"
          fill
          priority
          sizes="(max-width: 768px) calc(100vw - 56px), calc(100vw - 96px)"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center
        items-center px-5 text-center text-white
        md:items-start md:px-9 md:text-left">

        <p className="text-white/70 text-xs">
          The latest innovation for multi-domain applications
        </p>

        <h1 className="font-sans text-xl md:text-4xl md:font-semibold">
          Building Technology That Moves Businesses Forward
        </h1>

        <div className="mt-3 flex gap-4">
          <Link href="#contact" className="flex items-center gap-1 border-b-[1.5px] text-xs md:text-base">
            Get In Touch
            <IoIosArrowRoundForward size={25} className="-rotate-45" />
          </Link>

          <Link href="#services" className="flex items-center gap-1 border-b-[1.5px] text-xs md:text-base">
            Our Services
            <IoIosArrowRoundForward size={25} className="-rotate-45" />
          </Link>
        </div>
      </div>

      {/* Bottom-right white rectangular section */}
      <div className="absolute rounded-t-xl bottom-0 right-0 z-20 hidden md:flex
        h-[30%] w-[45%] items-center justify-center
        rounded-tl-3xl bg-[#fafafa] text-black">

        <div className="grid w-full grid-cols-3 gap-4 px-6 text-center">
          <div>
            <p className="text-2xl font-semibold">0</p>
            <p className="text-xs text-gray-500">Projects</p>
          </div>

          <div>
            <p className="text-2xl font-semibold">0K</p>
            <p className="text-xs text-gray-500">Users</p>
          </div>

          <div>
            <p className="text-2xl font-semibold">0K</p>
            <p className="text-xs text-gray-500">Reach</p>
          </div>
        </div>
      </div>

    </header>
  );
}