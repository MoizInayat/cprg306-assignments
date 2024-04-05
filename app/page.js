import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-start font-mono text-sm lg:flex text-lg flex-col">
        <h1 className="w-full text-lg">CPRG 306: Web Development 2 - Assignments | Moiz Inayat |</h1>
        <div className="text-lg flex items-center justify-start w-full">
        <Link href="/week-2" target="blank"><text> week-2 Assignment</text></Link>
        </div>
        <div className="text-lg flex items-center justify-start w-full">
        <Link href="/week-3" target="blank"><text> week-3 Assignment</text></Link>
        </div>
        <div className="text-lg flex items-center justify-start w-full">
        <Link href="/week-4" target="blank"><text> week-4 Assignment</text></Link>
        </div>
        <div className="text-lg flex items-center justify-start w-full">
        <Link href="/week-5" target="blank"><text> week-5 Assignment</text></Link>
        </div>
        <div className="text-lg flex items-center justify-start w-full">
        <Link href="/week-6" target="blank"><text> week-6 Assignment</text></Link>
        </div>
        <div className="text-lg flex items-center justify-start w-full">
        <Link href="/week-7" target="blank"><text> week-7 Assignment</text></Link>
        </div>
        <div className="text-lg flex items-center justify-start w-full">
        <Link href="/week-8" target="blank"><text> week-8 Assignment</text></Link>
        </div>
        <div className="text-lg flex items-center justify-start w-full">
        <Link href="/week-10" target="blank"><text> week-10 Assignment</text></Link>
        </div>






      </div>  
    </main>
  )
}