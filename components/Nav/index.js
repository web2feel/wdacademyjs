import Section from "../Blocks/Section";
import Link from "next/link";
import HeaderMenu from "./HeaderMenu";
import Logo from "../../assets/wdlogo.svg";
import Image from "next/image";
import { GsapContext } from "../Layout";
import { useEffect, useState, useRef, useContext } from "react";
import animation from "../../utils/animation";

function Nav() {
  const [active, setActive] = useState(false);
  const { tl } = useContext(GsapContext);
  let myNav = useRef(null);
  const { header } = animation;

  useEffect(() => {
    tl.from(myNav, header);
  }, []);

  return (
    <div
      data-scroll
      data-scroll-sticky
      data-scroll-target='#wrapper'
      ref={(el) => (myNav = el)}
      id='nav'
      className='bg-white fixed w-full z-40 backdrop-filter backdrop-blur-sm bg-opacity-60'>
      <Section>
        <div className='flex items-center justify-between h-20 sm:h-28'>
          <div className='w-40'>
            <Link href='/'>
              <a>
                <Image
                  src={Logo}
                  width={202}
                  height={75}
                  alt='Webdiary Academy'
                />
              </a>
            </Link>
          </div>
          <HeaderMenu active={active} setActive={setActive} />
          <div
            onClick={() => setActive((active) => !active)}
            className='menuTrigger lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 cursor-pointer'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Nav;
