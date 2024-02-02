import ConvertCurrency from "./components/Converts/CovertCurrency";

export default function Home() {
  return (
    <>
      <header className="py-[45px] md:py-[100px]">
        <h1 className="text-4xl text-center px-5 md:text-5xl md:px-0">Convert Currency</h1>
      </header>
      <main className="flex flex-col flex-gap-[70px] items-center justify-center">
        <ConvertCurrency />
      </main>
    </>
  )
}
