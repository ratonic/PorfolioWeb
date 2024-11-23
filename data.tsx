import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Github, Rss, Mail, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/omar-acosta-b9a288280/",  // Reemplaza con la URL de tu LinkedIn
    },
    {
        id: 2,
        logo: <Mail size={30} strokeWidth={1} />,  // Asegúrate de tener el ícono de Gmail importado correctamente
        src: "#!",  // Reemplaza con la URL de tu Gmail
    },
    {
        id: 3,
        logo: <Github size={30} strokeWidth={1} />,  // Asegúrate de tener el ícono de GitHub importado correctamente
        src: "https://github.com/ratonic",  // Reemplaza con la URL de tu GitHub
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Software Engineering",
        subtitle: "I start my studies",
        description: "I started my career in software engineering at the Universidad Cooperativa de Colombia, Pasto campus.",
        date: "Ago 2022 ",
    },
    {
        id: 2,
        title: "Software Development",
        subtitle: "Linkedin Course",
        description: "Professional Fundamentals of Software Development, by Microsoft and LinkedIn.",
        date: "Jun 2023",
    },
    {
        id: 3,
        title: "TalentoTech",
        subtitle: "Data Analysis ",
        description: "Course sponsored by the Government of Colombia, on data analysis, management and construction of databases and data interpretation",
        date: "Nov 2023",
    },
    
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 2,
        text: "Years of experience",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 0,
        text: "Satisfied customers",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 10,
        text: "Completed projects",
        lineRight: true,
        lineRightMobile: true,
    },
    
];

export const serviceData = [
    
    {
        icon: <Pencil />,
        title: "Web design",
        description: "Creative and professional design of intuitive and attractive web interfaces, focused on the user experience",
    },
    {
        icon: <Computer />,
        title: "Web development",
        description: "Design and development of custom websites, adapted to your needs",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creation of persuasive and attractive content that captures the attention of your audience",
    },
   
];

export const dataPortfolio = [
    {
        id: 1,
        title: "SocialRed",
        image: "/SocialRed.png",
        urlGithub: "https://github.com/ratonic/Colaboranet",
        urlDemo: "#!",
    },
   
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];