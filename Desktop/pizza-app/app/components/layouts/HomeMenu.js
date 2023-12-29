// import salad from '../../../public/salad.png';
import Image from "next/image"
import { MenuItem } from '../menu/MenuItem';
import { SectionHeaders } from '../layouts/SectionHeaders';

export const HomeMenu = () => {
    return (
        <section className="">
            <div>
               
                <div className="h-20 relative">
                    <Image src={'/salad.png'} alt='salad'
                        fill style={{ objectFit: "contain" }} />
                </div>
            </div>
            <div className="text-center">
                <SectionHeaders
                    subHeader={'check out'}
                    mainHeader={'Menu'}
                />
            </div>
            <div className="grid grid-cols-3 gap-4">
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </div>
        </section>
    )
}
