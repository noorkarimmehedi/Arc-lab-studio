import React, { FormEvent, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Button } from "@/components/ui/button";

const pathArr = [
  // O - Bold version
  'M50 15C29.5 15 15 29.5 15 50C15 70.5 29.5 85 50 85C70.5 85 85 70.5 85 50C85 29.5 70.5 15 50 15ZM50 30C61.0457 30 70 38.9543 70 50C70 61.0457 61.0457 70 50 70C38.9543 70 30 61.0457 30 50C30 38.9543 38.9543 30 50 30Z',
  // F - Bold version
  'M95 15H155V35H115V40H145V60H115V85H95V15Z',
  // F - Bold version
  'M165 15H225V35H185V40H215V60H185V85H165V15Z',
  // - - Bold version
  'M235 40H295V60H235V40Z',
  // D - Bold version
  'M305 15H350C371.5 15 385 29.5 385 50C385 70.5 371.5 85 350 85H305V15ZM325 35V65H350C360 65 365 58 365 50C365 42 360 35 350 35H325Z',
  // E - Bold version
  'M395 15H455V35H415V40H445V60H415V65H455V85H395V15Z',
  // S - Bold version
  'M465 15H525V35H485V40H515C523.284 40 530 46.7157 530 55V65C530 75.5228 521.523 85 510 85H465V65H510V60H480C471.716 60 465 53.2843 465 45V25C465 19.4772 469.477 15 475 15H465Z',
  // I - Bold version
  'M540 15H560V85H540V15Z',
  // G - Bold version
  'M600 15C579.5 15 565 29.5 565 50C565 70.5 579.5 85 600 85C620.5 85 635 70.5 635 50V35H600V55H615C613.409 61.2254 607.248 65 600 65C588.954 65 580 58.0457 580 50C580 41.9543 588.954 35 600 35C605.19 35 609.909 37.2066 613.272 40.7279L625 30C619.654 20.9462 610.184 15 600 15Z',
  // N - Bold version
  'M645 15H665V60L705 15H725V85H705V40L665 85H645V15Z',
];

export function Footer() {
  const container = useRef<HTMLDivElement>(null);
  const [openPopup, setOpenPopUp] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  const variants = {
    visible: (i: number) => ({
      translateY: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 12,
        duration: 0.4,
        delay: i * 0.03,
      },
    }),

    hidden: { translateY: 200 },
  };

  const handleNewsLetterData = (e: FormEvent) => {
    e.preventDefault();
    console.log(e);
    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);

    const clientEmail = formData.get('newsletter_email')!;
    
    // Form submission logic would go here
    
    setOpenPopUp(true);
    target.reset();
    if (setOpenPopUp) {
      setTimeout(() => {
        setOpenPopUp(false);
      }, 2000);
    }
  };

  return (
    <footer className="relative h-full sm:pt-14 pt-8 text-black border-t-8 border-black">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
        }}
      />
      <div className="sm:container px-4 mx-auto max-w-7xl relative z-10">
        <div className="md:flex justify-between w-full">
          <div>
            <h1 className="md:text-4xl text-2xl font-black uppercase">
              Let&lsquo;s do great work together
            </h1>
            <div className="pt-2 pb-6 md:w-99">
              <p className="md:text-2xl text-xl py-4 font-bold">
                Sign up for our newsletter*
              </p>
              <div className="hover-button relative bg-black flex justify-between items-center border-2 overflow-hidden border-black rounded-full text-white hover:text-black md:text-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all">
                <form
                  onSubmit={(e) => handleNewsLetterData(e)}
                  className="relative z-2 grid grid-cols-6 w-full h-full"
                >
                  <input
                    type="email"
                    name="newsletter_email"
                    className="border-none bg-transparent py-3 px-6 col-span-5 font-bold"
                    placeholder="Your Email * "
                  />
                  <Button
                    type="submit"
                    className="cursor-pointer w-full hover:bg-yellow-300 bg-white text-black h-full cols-span-1 transform hover:rotate-0 transition-all"
                    variant="brutal"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      className="w-full h-[80%]"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                        fill="#000"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Button>
                </form>
              </div>
            </div>
          </div>
          <div className="flex gap-10">
            <ul>
              <li className="text-2xl pb-2 text-black font-black uppercase">
                SITEMAP
              </li>
              <li className="text-xl font-bold">
                <a href="/" className="hover:bg-black hover:text-white px-2 py-1 transition-all uppercase">Home</a>
              </li>
              <li className="text-xl font-bold">
                <a href="/services" className="hover:bg-black hover:text-white px-2 py-1 transition-all uppercase">Our Services</a>
              </li>
              <li className="text-xl font-bold">
                <a href="/projects" className="hover:bg-black hover:text-white px-2 py-1 transition-all uppercase">Projects</a>
              </li>
              <li className="text-xl font-bold">
                <a href="/contact-us" className="hover:bg-black hover:text-white px-2 py-1 transition-all uppercase">Contact</a>
              </li>
            </ul>
            <ul>
              <li className="text-2xl pb-2 text-black font-black uppercase">
                SOCIAL
              </li>
              <li className="text-xl font-bold">
                <a
                  href="https://www.linkedin.com/company/next-codez/"
                  target="_blank"
                  className="underline hover:bg-black hover:text-white px-2 py-1 transition-all uppercase"
                >
                  LinkedIn
                </a>
              </li>
              <li className="text-xl font-bold">
                <a
                  href="https://twitter.com/NextCodez"
                  target="_blank"
                  className="underline hover:bg-black hover:text-white px-2 py-1 transition-all uppercase"
                >
                  Twitter
                </a>
              </li>
              <li className="text-xl font-bold">
                <a
                  href="https://www.instagram.com/nextcodez/"
                  target="_blank"
                  className="underline hover:bg-black hover:text-white px-2 py-1 transition-all uppercase"
                >
                  Instagram
                </a>
              </li>
              <li className="text-xl font-bold">
                <a
                  href="https://www.facebook.com/nextcodezz"
                  target="_blank"
                  className="underline hover:bg-black hover:text-white px-2 py-1 transition-all uppercase"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-y-2 md:py-4 border-black">
          <motion.svg
            width="730"
            ref={ref}
            height="100"
            viewBox="0 0 730 100"
            fill="none"
            className="sm:h-fit h-20 md:px-8 px-2 footer-logo w-full"
            xmlns="http://www.w3.org/2000/svg"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {pathArr.map((path, index) => (
              <motion.path
                key={index}
                custom={index}
                variants={variants}
                d={path}
                fill="#0101dd"
              />
            ))}
          </motion.svg>
        </div>
        <div className="flex md:flex-row flex-col-reverse gap-3 justify-between py-2 md:pb-4">
          <span className="font-black text-sm uppercase md:mt-2">
            &copy; 2024 OFF-DESIGN. All Rights Reserved.
          </span>
          <a href="#" className="font-black text-sm uppercase hover:bg-black hover:text-white px-2 py-1 transition-all">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
