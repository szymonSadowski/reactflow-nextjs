import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>ReactFlow - examples</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            ReactFlow - Nodes
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/edge"
            >
              <h3 className="text-2xl font-bold">Edge Based →</h3>
              <div className="text-lg">
                Example when you drag the edge the spawn new nodes
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/drag"
            >
              <h3 className="text-2xl font-bold">Drag and Drop Based →</h3>
              <div className="text-lg">
                Example when you drag and drop nodes to spawn them
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}