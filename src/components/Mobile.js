import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2, } from "react-icons/rx";
import Link from "next/link";

const Mobile = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="md:hidden block ">
                <button
                    className="w-9 h-9 flex items-center text-white justify-center rounded-lg bg-orange"
                    onClick={() => setOpen(!open)}
                >
                    <IoMenu className="w-5 h-5 " />
                </button>

                {open && (
                    <div className="bg-black bg-opacity-75 inset-0 fixed"
                        onClick={() => setOpen(!open)}
                    >
                    </div>
                )}

                <div
                    className={`fixed top-0 right-0 bg-[#EBEBEB] z-10 h-full w-[300px] flex flex-col justify-center items-center transform transition-transform duration-500 ease-in-out ${open ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <div
                        className="w-9 h-9 flex items-center justify-center rounded-lg bg-orange text-white absolute top-4 right-4"
                        onClick={() => setOpen(!open)}
                    >
                        <RxCross2 className="w-4 h-4" />
                    </div>

                    <ul className='flex flex-col gap-y-8'>
                        <li>
                            <Link href="#" className='text-black font-normal xl:text-xl text-base capitalize transition-all duration-500 hover:text-orange font-serif'>about</Link>
                        </li>
                        <li>
                            <Link href="#skills" className='text-black font-normal xl:text-xl text-base capitalize transition-all duration-500 hover:text-orange font-serif'>skills</Link>
                        </li>
                        <li>
                            <Link href="#projects" className='text-black font-normal xl:text-xl text-base capitalize transition-all duration-500 hover:text-orange font-serif'>project</Link>
                        </li>
                        <li>
                            <Link href="#" className='text-black font-normal xl:text-xl text-base capitalize transition-all duration-500 hover:text-orange font-serif'>contact</Link>
                        </li>

                    </ul>
                    <Link href="/resume.pdf" target='blank' download="Abdul_Aziz_Resume.pdf" className="bg-orange py-[0.5rem]  px-[0.9rem] text-black font-normal lg:text-xl text-base font-serif rounded-full capitalize tracking-custom font-lufga transition-all duration-500 ease-in-out transform hover:bg-white hover:text-orange md:mt-0 mt-8">resume</Link>
                </div>
            </div>
        </>
    )
}

export default Mobile