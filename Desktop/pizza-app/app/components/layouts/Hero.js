// import './hero.css';
import { RightArrow } from '../icons/RightArrow';
import Image from 'next/image';

export const Hero = () => {
    return (
        // className=hero сме го задали в глобалния global.css , но трябва да е section.hero(заради taiwind css който използвам)
        <section className="hero">
            <div className='my-10'>
                <div>
                    <div className="absolute top-[100px] text-left -z-10">
                        <Image src={'/sallad1.png'} width={109} height={189} alt="salad" />
                    </div>
                    <h1 className="text-4xl font-semibold leading-relaxed">
                        Here is more
                        <br />
                        <span className='text-primary'>
                            delicious
                        </span>
                    </h1>
                    <p className="my-4 text-gray-700 font-semibold">
                        Try out our pizza and
                        <br />
                        you will come back again
                    </p>
                </div>
                <div className="flex gap-4 py-2">
                    <button className="bg-primary text-white uppercase flex gap-2  px-4 py-2 rounded-full">
                        Order now
                        <RightArrow />
                    </button>
                    <button className='bg-black text-white text-sm items-center flex gap-2 px-4  py-2  rounded-full'>
                        Learn more
                        <RightArrow />
                    </button>
                </div>
            </div>
            <div className="relative">
                {/* <img className="mt-1 size-30" src={'/pizza.png'} alt='pizza' /> */}
                <Image
                    priority={false}
                    src={'/pizza.png'}
                    alt='pizza'
                    fill
                    style={{ objectFit: "contain" }}
                />
            </div>
        </section>
    );
};
//bg-primary = background и primary = от зададения от нас в taiwind.config.ts
//текста сме го обгърнали в един <div а изображението с пицата в друг <div за да може
//да ги местим и манипулираме отделно

//това вече не го използвам
//Добавих в <section> един празен <h3> tag защото съм задал на <section> className="grid grid-cols-4"
//следователно в <section> съм задал 4 неще(div,div,h3,div), главната идея е че исках изображението
//с пицата да ми дойде от дясната страна, затова съм го сложил най-отдолу за да дойде в grid-4 който грид
// се пада най вдясно , при inspect може да го видя в developer tools(F12) в browsera