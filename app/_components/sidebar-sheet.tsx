
import { CalendarIcon, HomeIcon, LogOutIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { quickSearchOptions } from "../_constants/search";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";

const SidebarSheet = () => {
    return (

        <SheetContent className="overflow-y-auto">
            <SheetHeader>
                <SheetTitle className="text-left">
                    Menu
                </SheetTitle>
            </SheetHeader>

            <div className="flex items-center border-b border-solid py-5 gap-3">
                <Avatar>
                    <AvatarImage src="/logo.png" alt="avatar" />
                </Avatar>
                <div>
                    <p className="font-bold">Valmir Vasconcelos</p>
                    <p className="text-xs">valmir.bsi@gmail.com</p>
                </div>
            </div>

            <div className="flex flex-col gap-2 border-b border-solid py-5">
                <SheetClose asChild>
                    <Button className="gap-2 justify-start" variant="ghost" asChild>
                        <Link href="/">
                            <HomeIcon size={18} />Início
                        </Link>
                    </Button>
                </SheetClose>
                <Button className="gap-2 justify-start" variant="ghost">
                    <CalendarIcon size={18} />Agendamento
                </Button>
            </div>
            <div className="flex flex-col gap-2 border-b border-solid py-5">
                {
                    quickSearchOptions.map((option) => (
                        <Button className="gap-2 justify-start" variant="ghost" key={option.title}>
                            <Image src={option.imageUrl} height={18} width={18} alt={option.title} />{option.title}
                        </Button>
                    ))
                }
            </div>
            <div className="flex flex-col gap-2 py-5">
                <Button className="gap-2 justify-start" variant="ghost">
                    <LogOutIcon size={18} /> Sair da conta
                </Button>
            </div>
        </SheetContent>

    );
}

export default SidebarSheet;