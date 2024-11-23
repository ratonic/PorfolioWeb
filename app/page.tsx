import Image from "next/image";
import CoverParticles from "@/components/cover_particles";
import TransitionPage from "@/components/transition_page";
import Introduction from "@/components/introduction";
export default function Home() {
  return (
    <main>
       <TransitionPage />
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles />
        <Introduction/>
      </div>
    </main>
    
    
  );
}
