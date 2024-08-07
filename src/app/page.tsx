"use client"

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormEvent, useState } from "react";

export default function Home() {

  const [input, setInput] = useState<string>("")

  const handleClickForm = (event: FormEvent) => {
    event.preventDefault()

    if(input === "") {
      alert("Campo vazio")
      return
    }

    alert(input)
    setInput("")
  }

  return (
    <main className="min-h-screen w-full flex items-center justify-center">
      <form 
        className="max-w-[350px] p-2 w-full flex flex-col gap-y-4 text-white" 
        onSubmit={handleClickForm}
      >
        <div>
          <Label htmlFor="email">Informe seu email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="emailexample@example.com"
            className="h-11 shadow-xl bg-zinc-400/90 placeholder:text-white text-black outline-none"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </div>

        <Button className="h-11 shadow-xl" type="submit">Enviar</Button>
      </form>
    </main>
  );
}
