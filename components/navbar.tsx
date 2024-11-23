"use client"; 

import { itemsNavbar } from "@/data";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MotionTransition from "./transition_component";

const Navbar = () => {
    const pathname = usePathname();  // Corrected here to invoke the hook

    return (
        <MotionTransition position="right" className="fixed z-40 flex-col items-center justify-center bottom-10 left-1/2 transform -translate-x-1/2">
            <nav>
                <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 backdrop-blur-sm">
                    {itemsNavbar.map((item) => (
                        <div
                            key={item.id}
                            className="px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary"
                        >
                            <Link href={item.link}>{item.icon}</Link>
                        </div>
                    ))}
                </div>
            </nav>
        </MotionTransition>
    );
};

export default Navbar;


