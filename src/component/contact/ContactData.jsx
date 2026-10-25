import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

export const ContactData = [
    {
        id: 1,
        icon: <MdOutlineEmail />,
        title: "Email",
        info: "yousefahmed@gmail.com",
        link: "mailto:yousefahmed@gmail.com",
    },
    {
        id: 2,
        icon: <FaFacebookMessenger />,
        title: "Messenger",
        info: "Yousef Ahmed",
        link: "https://m.me/houdareda.07",
    },
    {
        id: 3,
        icon: <FaWhatsapp />,
        title: "WhatsApp",
        info: "01154472776",
        link: "https://api.whatsapp.com/send?phone=201154224727",
    },
]