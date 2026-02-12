'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Preloader from '@/components/Preloader';
import Footer from '@/components/Footer';

// Image data for the scroller
const scrollerImages = [
  { src: '/src/project/for IRO IRO/hero images/1.png', alt: 'IRO IRO Pyaar collection 1' },
  { src: '/src/project/for IRO IRO/hero images/2.png', alt: 'IRO IRO Pyaar collection 2' },
  { src: '/src/project/for IRO IRO/hero images/3.png', alt: 'IRO IRO Pyaar collection 3' },
  { src: '/src/project/for IRO IRO/hero images/4.png', alt: 'IRO IRO Pyaar collection 4' },
  { src: '/src/project/for IRO IRO/hero images/5.png', alt: 'IRO IRO Pyaar collection 5' },
];

// Lookbook pages
const lookbookPages = [
  { src: '/src/project/imges/1.png', alt: 'Lookbook page 1' },
  { src: '/src/project/imges/2.png', alt: 'Lookbook page 2' },
  { src: '/src/project/imges/3.png', alt: 'Lookbook page 3' },
  { src: '/src/project/imges/4.png', alt: 'Lookbook page 4' },
  { src: '/src/project/imges/5.png', alt: 'Lookbook page 5' },
  { src: '/src/project/imges/6.png', alt: 'Lookbook page 6' },
  { src: '/src/project/imges/7.png', alt: 'Lookbook page 7' },
  { src: '/src/project/imges/8.png', alt: 'Lookbook page 8' },
  { src: '/src/project/imges/9.png', alt: 'Lookbook page 9' },
  { src: '/src/project/imges/10.png', alt: 'Lookbook page 10' },
];

export default function IroIroLookbookPage() {
  const [isLoading, setIsLoading] = useState(true);
  const scrollerInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading && scrollerInnerRef.current) {
      // Clone images for infinite scroll effect
      const scrollerInner = scrollerInnerRef.current;
      const children = Array.from(scrollerInner.children);
      
      children.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        (duplicatedItem as HTMLElement).setAttribute('aria-hidden', 'true');
        scrollerInner.appendChild(duplicatedItem);
      });
    }
  }, [isLoading]);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <>
      <header className="h-[50px] w-full flex items-center fixed z-10 bg-white">
        <div className="container max-w-screen-xl mx-auto w-[95%] h-[80%] flex items-center justify-between">
          <h1 className="font-sunroll text-lg">ShIlpa KIRtanIya</h1>
          <ul className="text-md flex gap-10 font-noto">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/projects">Project</Link>
            </li>
            <li>
              <Link href="/projects#sectionToScroll" className="cursor-pointer">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </header>

      <div className="container max-w-screen-xl w-[95%] mx-auto z-0 pt-[50px]">
        <div className="block">
          {/* Scroller Section */}
          <section className="scroller overflow-hidden xxs:h-[244px] sm:h-[307px] md:h-[333.33px] 4xl:h-[443px] w-full">
            <div
              ref={scrollerInnerRef}
              className="scrollerInner w-full h-full flex justify-between gap-[19px] items-center mt-[19px] animate-scroll"
              style={{
                ['--scroll-offset' as string]: 'var(--scroll-offset, -1295px)'
              }}
            >
              {scrollerImages.map((image, index) => (
                <div
                  key={`scroller-${index}`}
                  className="relative xxs:w-[340px] sm:w-[460px] md:w-[500px] 2xl:w-[665px] h-full"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={665}
                    height={443}
                    className="object-cover w-full h-full"
                    priority={index < 2}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Main Heading Section */}
          <section className="h-[40vh] w-full gap-5 text-center flex flex-col justify-center items-center">
            <h3 className="xxs:text-xs sm:text-sm md:text-md lg:text-lg font-display italic opacity-65">
              lookbook
            </h3>
            <h1 className="xxs:text-lg xs:text-xl sm:text-2xl lg:text-3xl font-noto font-semibold opacity-70">
              IRO IRO&apos;s annual collection- Pyaar
            </h1>
            <h3 className="text-sm font-sans opacity-65 xxs:w-[340px] sm:w-[460px] lg:w-[576px] xl:w-[720px] 2xl:w-[900px]">
              The lookbook and accompanying collateral showcase IRO IRO&apos;s annual
              collection, &quot;Pyaar&quot;, Inspired by the relationships that fuels
              creativity. the collection encapsulates a sense of familiarity and
              nostalgia, resonating deeply with the audience.
            </h3>
          </section>

          {/* Lookbook Pages Section */}
          <section className="bg-grey pb-[200px] w-full pt-[80px]">
            <div className="xxs:w-[340px] sm:w-[460px] lg:w-[576px] xl:w-[720px] 2xl:w-[900px] mx-auto">
              <h3 className="text-sm font-sans italic opacity-65 mb-5">
                Several pages from the lookbook.
              </h3>
            </div>

            {lookbookPages.map((page, index) => (
              <div
                key={`lookbook-page-${index}`}
                className="xxs:w-[340px] sm:w-[460px] lg:w-[576px] xl:w-[720px] 2xl:w-[900px] mx-auto mb-10"
              >
                <Image
                  src={page.src}
                  alt={page.alt}
                  width={900}
                  height={600}
                  className="w-full h-auto"
                  priority={index < 2}
                />
              </div>
            ))}

            <div className="xxs:w-[340px] sm:w-[460px] lg:w-[576px] xl:w-[720px] 2xl:w-[900px] mx-auto mt-20">
              <h3 className="text-sm text-center font-sans italic opacity-65">
                Softwares used: Adobe InDesign, Adobe Photoshop
              </h3>
            </div>
          </section>

          {/* Back Button Section */}
          <footer className="h-[400px] w-full flex items-center justify-center">
            <div className="container h-[70%] w-full flex flex-col justify-between">
              <div className="h-1/3 w-full flex items-center justify-center">
                <Link href="/projects">
                  <div className="h-[40px] w-[180px] rounded-lg flex justify-center items-center backButton text-md hover:text-lg transition duration-150 ease-in-out hover:shadow-[0_0_1px_1px_#494F55]">
                    <h1 className="font-calibri">Back To Projects</h1>
                  </div>
                </Link>
              </div>
              
              <Footer />
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}