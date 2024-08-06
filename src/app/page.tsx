import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center">
      <form className="max-w-[350px] p-2 w-full flex flex-col gap-y-4 text-white">
        <div>
          <Label htmlFor="email">Informe seu email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="emailexample@example.com"
            className="h-11 shadow-xl bg-zinc-400/60 placeholder:text-white"
          />
        </div>

        <Button className="h-11 shadow-xl">Enviar</Button>
      </form>
    </main>
  );
}
