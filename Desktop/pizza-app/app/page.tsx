// import { Header } from './components/layouts/Header';
import { Hero } from './components/layouts/Hero';
import { HomeMenu } from './components/layouts/HomeMenu';
import { SectionHeaders } from './components/layouts/SectionHeaders';

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className='text-centered my-16'>
        <SectionHeaders
          subHeader={'Our story'}
          mainHeader={'About us'}
        />
        <div className='max-w-2xl  mx-auto text-gray-600 mt-4 flex flex-col gap-4'>
          <p>
            Lorem Ipsum dolor sit amet, bla bla asdasdsad asddsad asdasd
            asdasdasd.Imnasdasd asdsadihasd oaijsdoajsdoj as doajisdojasd
            asodjoasdjoasj asasdasda !
          </p>
          <p>
            Lorem Ipsum dolor sit amet, bla bla asdasdsad asddsad asdasd
            asdasdasd.Imnasdasd asdsadihasd oaijsdoajsdoj as doajisdojasd
            asodjoasdjoasj asasdasda !
          </p>
          <p>
            Lorem Ipsum dolor sit amet, bla bla asdasdsad asddsad asdasd
            asdasdasd.Imnasdasd asdsadihasd oaijsdoajsdoj as doajisdojasd
            asodjoasdjoasj asasdasda !
          </p>
        </div>
      </section>

      <section className='text-center my-8'>
        <SectionHeaders
          subHeader={'Don`t hesitate'}
          mainHeader={'Contact us'}
        />
        <div className='mt-8'>
          <a className='text-4xl underline text-white bg-black mt-16'
            href='tel:+89785545412'>
            +897 855 454 12
          </a>
        </div>
      </section>
    </>
  )
}


//flex flex-col gap-4 -интересно за разигравка, ако остава само flex gap-4 ще позиционира текста един до друг,а не един под друг