
"use client"

import Image from "next/image";

import  MotionTransition  from "./transition_component";

export function Avatar() {
    return (
        <MotionTransition position="bottom" className="fixed bottom-0 right-0 z-50 hidden md:inline-block">
            <Image src="/Avatar_1.png" width="150" height="150" className="w-full h-full " alt="Particles " />
        </MotionTransition>
    )
}
export default Avatar;