import { SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { Badge } from "./_components/ui/badge";
import { Avatar, AvatarImage } from "./_components/ui/avatar";
import { db } from "./_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";




export default async function Home() {

  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: { name: "desc" }
  })

  return (
    <div>
      <Header />
      <div className="p-5">

        <h2 className="text-xl font-bold">Olá Valmir</h2>
        <p>Sábado, 01 de fevereiro</p>

        <div className="flex items-center gap-2 mt-6">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          <Button className="gap-2" variant="secondary">
            <Image src="/cabelo.svg" width={16} height={16} alt="cabelo" />
            Cabelo
          </Button>
          <Button className="gap-2" variant="secondary">
            <Image src="/barba.svg" width={16} height={16} alt="barba" />
            Barba
          </Button>
          <Button className="gap-2" variant="secondary">
            <Image src="/acabamento.svg" width={16} height={16} alt="acabamento" />
            Acabamento
          </Button>
          <Button className="gap-2" variant="secondary">
            <Image src="/cabelo.svg" width={16} height={16} alt="cabelo" />
            Cabelo
          </Button>
          <Button className="gap-2" variant="secondary">
            <Image src="/barba.svg" width={16} height={16} alt="barba" />
            Barba
          </Button>
          <Button className="gap-2" variant="secondary">
            <Image src="/acabamento.svg" width={16} height={16} alt="acabamento" />
            Acabamento
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image src="/banner-01.png" fill className="object-cover rounded-xl" alt="banner" />
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">Agendamentos</h2>

        <Card>
          <CardContent className="flex justify-between p-0">

            <div className="flex flex-col gap-2 py-5 pl-5 ">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-7 w-7">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center px-5 border-l-2 border-solid">
              <p className="text-sm">Fevereiro</p>
              <p className="text-2xl">01</p>
              <p className="text-sm">20:00</p>
            </div>

          </CardContent>
        </Card>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">Recomendados</h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {
            barbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))
          }
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">Populares</h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {
            popularBarbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))
          }
        </div>
      </div>

      <Card>
        <CardContent className="px-5 py-6">
          <p className="text-sm text-gray-400">
            © 2025 Copyright <span className="font-bold">FSW Barber</span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
