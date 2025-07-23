import SectionTitle from './Project/Sectiontitle';
import { ProjectsList } from './Project/ProjectList..jsx';
import './Project/Projects.css';

const ProjectsPage = () => {

    const projects = [
        {
            id: "Systems Analyst & UI UX Designer",
            title: "Suara Jakarta",
            description: "To support and encourage public participation in addressing various urban issues, a mobile-based application called Suara Jakarta was created. The Suara Jakarta application serves as a liaison between the public and the government, providing insights into frequently encountered urban issues. In general, the Suara Jakarta application provides a reporting feature that allows users to report issues they encounter in Jakarta. The application is equipped with a geotagging system that allows users to enter the location of the reported incident",
            technologies: ["Visual Paradigm", "Figma",],
            image: "/images/SUARA.png",
            demo: "https://drive.google.com/file/d/1nLDDO55GJKuGUw8bf_8jqiSRIJ5x2fZV/view",
            github: "https://www.figma.com/proto/2kk0wbzs4REx2s0nPSkD33/Suara-jakarta?page-id=0%3A1&node-id=1-41&t=yHBNrxTvS0AwQ7Ha-1"
        },  
        {
            id: "Frontend Developer",
            title: "Ragunan Zoo", 
            description: "Redesign Ragoonan Zoo website using HTML and CSS",
            technologies: ["Figma", "HTML", "CSS"],
            image: "/images/RAGOONAN.png",
            github: "https://www.figma.com/proto/WEqqYlEKL8Dji4r5FAA8Uq/Redesign-Website-Ragunan-Zoo?page-id=0%3A1&node-id=2-2&p=f&viewport=101%2C365%2C0.11&t=Dk4Uh3uGjvAuzA6N-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A2"
        },
        {
            id: "Systems Analyst & UI UX Designer",
            title: "KrinChill (Nangkring & Chill)", 
            description: "KrinChill is a web-based food stall where customers can order by scanning a QR code on each table. After scanning the QR code, they will be directed to our ordering website, where they can not only order but also pay",
            technologies: ["Figma", "Visual Paradigm", "HTML", "CSS"],
            image: "/images/Krinchill.png",
            demo: "https://drive.google.com/file/d/1H-hwVI295jDf3NvyCj-zploWNuTxflU9/view",
            github: "https://www.figma.com/proto/ydGf2ZXzewHMwbYpNn6pUs/Krinchil-WEBSITE?page-id=0%3A1&node-id=2-534&p=f&viewport=-978%2C480%2C0.41&t=jQqSkGZJRLueHKJU-1&scaling=scale-down&content-scaling=fixed"
        },
        {
            id: "UI UX Designer",
            title: "ToGu Apps", 
            description: "ToGu is a business that provides tour guide services for those wishing to travel to various destinations in Indonesia. Tourguide was founded with several goals, including providing unforgettable travel experiences for our customers, revitalizing the economy in tourist areas, and promoting lesser-known tourist destinations",
            technologies: ["Figma"],
            image: "/images/TOURGUIDE.png",
            github: "https://www.figma.com/proto/Gtg0Fbr5Mo3amP8lDfAFpV/Untitled?page-id=0%3A1&node-id=10-102&starting-point-node-id=41%3A420&t=aaIHuUXdL5Iw7J8J-1",
        },
        {
            id: "Software Engineer",
            title: "Discord", 
            description: "Testing Login Feature on Discord",
            technologies: ["Pyhton"],
            image: "/images/Discord.png",
            demo: "https://drive.google.com/drive/folders/1k1Qq1HQX-RkTvsdGFZY4CkJNBOTRptLQ?usp=sharing"
        },
        {
            id: "",
            title: "Game Animation", 
            description: "Created 2D & 3D animation",
            technologies: ["Unity"],
            image: "/images/Game.png",
            github: "https://youtu.be/KEDaCgez-AU?si=svlj208zb6x5vFLF"
        },
    ];
    return (
        <section className="projects-section" id="projects">
            <div className="projects-container">
                <div className="projects-content">
                    <SectionTitle />
                    <ProjectsList projects={projects} />
                </div>
            </div>
        </section>
    );
};

export { ProjectsPage as Projects };
export default ProjectsPage;