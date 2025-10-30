import Link from "next/link"
import Image from "next/image"

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-1.5 sm:gap-2 relative z-10 group">
      {/* <div className="relative w-8 h-8 sm:w-10 sm:h-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-gradient-from to-gradient-to rounded-lg rotate-45 transform origin-center group-hover:scale-105 transition-transform"></div>
        <div className="absolute inset-[2.5px] sm:inset-[3px] bg-background rounded-lg flex items-center justify-center text-foreground font-bold">
          T
        </div>
      </div>
      <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-transparent">
        Tennissine's Space
      </span> */}
     <Image
      src="/images/logos/Main Logo-02.png"
      alt="Tennissine's Space Logo"
      height={200}
      width={300}/>
    </Link>
  )
}
