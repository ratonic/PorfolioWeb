
import CircleImage from "@/components/circle_image";
import SliderServices from "@/components/slider_services";
import TransitionPage from "@/components/transition_page";

const ServicesPage = () => {
    return (
        <>

            <TransitionPage />
            <CircleImage />
           
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px] mt-20 md:mt-0">

                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">My <span className="font-bold text-secondary"> services.</span></h1>
                    <p className="mb-3 text-xl text-gray-300">I offer backend and frontend services such as database creation, API development, CRUD, and pages with next.js and tailwind css.</p>
                    
                </div>

                {/* SLIDER */}
                <div>
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default ServicesPage;