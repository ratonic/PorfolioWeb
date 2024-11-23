import Image from "next/image";
import MotionTransition from "./transition_component";

const AvatarServices = () => {
    return (
        <MotionTransition position='right' className="bottom-0.5 left-0 hidden md:inline-block md:absolute ">
            <Image src="/services.png" width="400" height="400" className="w-[350px] h-full" alt="Servicios" />
        </MotionTransition>
    );
}

export default AvatarServices;
