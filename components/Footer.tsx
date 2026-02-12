'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer
      id="sectionToScroll"
      className="h-[450px] w-full flex justify-center items-center relative overflow-hidden mt-20"
    >
      <div className="h-full w-full absolute z-10 flex items-end max-w-screen-xl">
        <div className="content h-[70%] w-full container mx-auto flex flex-col items-center justify-between">
          <h1 className="font-noto italic font-light sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl opacity-80 text-center">
            Get in touch
          </h1>
          <div className="w-full flex flex-col items-center gap-2">
            <h1 className="calibri sm:text-xs md:text-sm lg:text-md xl:text-[18px] opacity-70 w-[370px] text-center leading-[7px]">
              If you&apos;re keen on connecting or collaborating, feel free to reach out to me via:
            </h1>
            <div className="w-[400px] sm:text-xs md:text-xs lg:text-sm xl:text-md font-normal opacity-70 text-center">
              <h1 className="font-[600] hover:cursor-pointer">
                Phone: <span>+91 7987387507</span>
              </h1>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-3">
            <div className="iconsContainer h-[40px] w-[200px] justify-center flex gap-3">
              <a
                href="https://www.linkedin.com/in/shilpa-kirtaniya-504375231/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="h-full w-[40px] border border-shadedblack rounded-full flex justify-center items-center">
                  <Image
                    className="h-[50%] hover:h-[40%] transition duration-150 ease-in-out"
                    src="/src/icons/linkein.svg"
                    alt="LinkedIn"
                    width={20}
                    height={20}
                  />
                </div>
              </a>
              <a href="mailto:shilpakirtaniyaa@gmail.com" target="_blank">
                <div className="h-full w-[40px] border border-shadedblack rounded-full flex justify-center items-center">
                  <Image
                    className="h-[60%] hover:h-[40%] transition duration-150 ease-in-out"
                    src="/src/icons/email.svg"
                    alt="Email"
                    width={24}
                    height={24}
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <p className="font-sans font-light">
              Copyright &copy;2024 All Rights Reserved
            </p>
            <p className="font-sans font-light">
              Website Developed by{' '}
              <a
                href="https://vishalkirtaniya.netlify.app/"
                target="_blank"
                className="text-blue hover:underline"
              >
                <b>Vishal Aditya</b>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}