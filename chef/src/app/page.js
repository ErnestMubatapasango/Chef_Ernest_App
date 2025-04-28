
import Header from "./components/Header";
import Main from "./components/Main";


export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="bg-[#FAFAF8] h-[40rem] max-h-[40rem] w-[40rem] rounded-2xl p-2">
        <div className="bg-white h-full rounded-2xl shadow-2xl space-y-8">
          <Header />
          <Main />
        </div>
        

      </div>
    </div>
  );
}
