// import { db } from "@/app/_lib/prisma";
// import Image from "next/image";


interface Params {
    id: string;
}

const BarbershopPage = async ({ params }: { params: Params }) => {

    // const barbershop = await db.barbershop.findUnique({
    //     where: {
    //         id: parseInt(params.id)
    //     }
    // });
    return (
        <div>
            <div className="relative h-[250px] w-full">
                {/* <Image src={barbershop?.imageUrl} fill className="object-cover" alt={barbershop?.name} /> */}
            </div>
        </div>

    );
}

export default BarbershopPage;