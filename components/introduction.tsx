"use client"
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image 
                    src="/introduction.png" 
                    priority 
                    width="500" 
                    height="500" 
                    alt="Avatar" 
                    className="ml-10 md:ml-10"
                />
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">If you can dream it, <br />
                        <TypeAnimation
                            sequence={[
                                'you can design it',
                                1000,
                                'you can develop it',
                                1000,
                                'you can share it',
                                1000,
                                
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </h1>

                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                    I specialize in developing robust and efficient applications, with a focus on code quality and user experience.
                    </p>

                    
                </div>
            </div>
        </div>
    );
}

export default Introduction;
