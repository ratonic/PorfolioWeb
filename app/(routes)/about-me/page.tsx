"use client"

import Avatar  from "@/components/avatar";
import ContainerPage from "@/components/container";
import CounterServices from "@/components/counter_services";
import TimeLine from "@/components/time_line";
import TransitionPage from "@/components/transition_page";

const AboutMePage = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <Avatar />
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    My entire{' '}
                    <span className="font-bold text-secondary">
                        professional career
                    </span>
                </h1>

                <CounterServices />

                <TimeLine />

            </ContainerPage>
        </>
    );
}

export default AboutMePage;