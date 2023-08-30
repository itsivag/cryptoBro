import { useState } from "react";
import { Input } from "./components/Input";
import { ResultRow } from "./components/ResultRow";

function App() {
  const [amt, setAmt] = useState("");

  return (
    <main className="flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-center  rounded-md p-2 uppercase">
        find the Cheapest Bitcoin!
      </h1>
      <Input
        className="justify-center mt-4"
        value={amt}
        onChange={(e) => setAmt(e.target.value)}
      />
      <div className="my-8 w-full">
        <ResultRow />
        <ResultRow />
        <ResultRow />
        <ResultRow />
        <ResultRow />
      </div>
    </main>
  );
}

export default App;
