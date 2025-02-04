import ServiceItem from "@/app/_components/service-item";
import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";


interface Params {
    id: string;
}

const BarbershopPage = async ({ params: { id } }: { params: Params }) => {

    const barbershop = await db.barbershop.findUnique({
        where: {
            id: parseInt(id)
        },
        include: {
            services: true
        }
    });

    if (!barbershop) {
        return {
            notFound
        }
    }

    return (
        <div>
            <div className="relative h-[250px] w-full">
                <Image src={barbershop?.imageUrl} fill className="object-cover" alt={barbershop?.name} />
                <Button size="icon" variant="secondary" className="absolute top-4 left-4" asChild>
                    <Link href="/">
                        <ChevronLeftIcon />
                    </Link>
                </Button>
                <Button size="icon" variant="secondary" className="absolute top-4 right-4">
                    <MenuIcon />
                </Button>
            </div>

            <div className="p-5 border-b border-solid">
                <h1 className="mb-3 text-xl font-bold">{barbershop?.name}</h1>
                <div className="flex item-center gap-1">
                    <MapPinIcon className="text-primary" size={18} />
                    <p className="text-sm text-gray-400">{barbershop?.address}</p>
                </div>
                <div className="flex item-center gap-1">
                    <StarIcon className="fill-primary text-primary" size={18} />
                    <p className="text-sm text-gray-400">5.0 (889 avaliações)</p>
                </div>
            </div>

            <div className="p-5 border-b border-solid space-y-2">
                <h2 className="font-bold uppercase text-gray-400 text-xs">sobre nós</h2>
                <p className="text-sm text-justify">{barbershop?.description}</p>
            </div>

            <div className="space-y-3 p-5">
                <h2 className="font-bold uppercase text-gray-400 text-xs mb-3">serviços</h2>
                <div className="space-y-3">
                    {
                        barbershop.services.map(service =>
                            <ServiceItem key={service.id} service={service} />
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default BarbershopPage;