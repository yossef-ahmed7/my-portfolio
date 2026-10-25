import { MdDesignServices } from "react-icons/md";
import { FaRocket } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";

export const Servicesdata = [
    {
        id: 1,
        logo: <MdDesignServices />,
        title: "Web Design",
        desc: "I design modern, eye-catching websites that reflect your brand, with a smooth user experience and a responsive layout that works on every device."
    },
    {
        id: 2,
        logo: <FaRocket />,
        title: "Fast Performance",
        desc: "I optimize load times by compressing assets, improving images, and reducing requests, so your site stays fast and ranks better in search results."
    },
    {
        id: 3,
        logo: <FaCode />,
        title: "Clean Code",
        desc: "I write well-structured, readable, and maintainable code following best practices, making your project easy to scale and extend over time."
    }
]