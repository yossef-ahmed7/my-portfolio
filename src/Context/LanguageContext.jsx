import { createContext, useContext, useState, useEffect } from "react";

const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            experience: "Skills",
            services: "Services",
            portfolio: "Projects",
            contact: "Contact",
        },
        home: {
            greeting: "Hello, My Name is",
            name: "Yousef Ahmed",
            role: "Front-End Developer",
            description1:
                "I build modern, responsive, and user-friendly web interfaces using React and modern web technologies.",
            description2:
                "I'm passionate about creating clean designs, writing maintainable code, and continuously improving my development skills.",
            downloadCV: "Download CV",
            contact: "Let's talk",
            scrollDown: "Scroll down",
        },
        about: {
            subtitle: "Get To Know",
            title: "About Me",
            experience: "Experience",
            experienceDetails: "7+ months working",
            clients: "Clients",
            clientsDetails: "50+ worldwide",
            projects: "Projects",
            projectsDetails: "10+ completed",
            description:
                "Computer Science student at Future Academy with practical front-end development skills built through hands-on, project-based practice in HTML5, CSS3, JavaScript, React.js and TypeScript. Active in technology communities and event organization, with strong teamwork and coordination skills. Seeking internship and entry-level opportunities to apply my skills, learn from experienced teams, and keep growing as a developer.",
            contact: "Let's talk",
        },
        skills: {
            subtitle: "What Skills I Have",
            title: "My Experience",
            html: "Structure",
            css: "User Interface",
            javascript: "Interaction",
            react: "Framework",
            tailwind: "User Interface",
            nodejs: "Web Server",
            figma: "Design tool",
            express: "Node Framework",
        },
        services: {
            subtitle: "What I Offer",
            title: "Services",
            webDesign: "Web Design",
            webDesignDesc:
                "I design modern, eye-catching websites that reflect your brand, with a smooth user experience and a responsive layout that works on every device.",
            performance: "Fast Performance",
            performanceDesc:
                "I optimize load times by compressing assets, improving images, and reducing requests, so your site stays fast and ranks better in search results.",
            cleanCode: "Clean Code",
            cleanCodeDesc:
                "I write well-structured, readable, and maintainable code following best practices, making your project easy to scale and extend over time.",
        },
        projects: {
            subtitle: "My Recent Work",
            title: "Portfolio",
            github: "Github",
            demo: "Live Demo",
        },
        contact: {
            subtitle: "Get In Touch",
            title: "Contact Me",
            email: "Email",
            messenger: "Messenger",
            whatsapp: "WhatsApp",
            sendMessage: "Send Message",
            fullName: "Full Name",
            yourEmail: "Your Email",
            messagePlaceholder: "Enter Your Message",
        },
        footer: {
            copyright: "All rights reserved",
        },
    },

    ar: {
        nav: {
            home: "الرئيسية",
            about: "عني",
            experience: "المهارات",
            services: "الخدمات",
            portfolio: "المشاريع",
            contact: "تواصل معي",
        },
        home: {
            greeting: "مرحبًا، أنا",
            name: "يوسف أحمد",
            role: "مطور واجهات أمامية",
            description1:
                "أبني واجهات ويب عصرية ومتجاوبة وسهلة الاستخدام باستخدام React وتقنيات الويب الحديثة.",
            description2:
                "أهتم بإنشاء تصميمات بسيطة ومنظمة، وكتابة كود سهل الصيانة، وتطوير مهاراتي باستمرار.",
            downloadCV: "تحميل السيرة الذاتية",
            contact: "تواصل معي",
            scrollDown: "انتقل للأسفل",
        },
        about: {
            subtitle: "تعرّف عليّ",
            title: "نبذة عني",
            experience: "الخبرة",
            experienceDetails: "أكثر من 7 أشهر من العمل",
            clients: "العملاء",
            clientsDetails: "أكثر من 50 حول العالم",
            projects: "المشاريع",
            projectsDetails: "أكثر من 10 مشاريع مكتملة",
            description:
                "أنا طالب علوم حاسب في أكاديمية المستقبل، وأمتلك مهارات عملية في تطوير واجهات المواقع، اكتسبتها من خلال التدريب وتنفيذ المشاريع باستخدام HTML5 وCSS3 وJavaScript وReact.js وTypeScript. أشارك في مجتمعات التكنولوجيا وتنظيم الفعاليات، وأمتلك مهارات جيدة في العمل الجماعي والتنسيق. أبحث عن فرص تدريب أو عمل في بداية مسيرتي المهنية لتطبيق مهاراتي والتعلم من الفرق ذات الخبرة والاستمرار في التطور كمطور.",
            contact: "تواصل معي",
        },
        skills: {
            subtitle: "المهارات التي أمتلكها",
            title: "خبراتي",
            html: "بناء هيكل الصفحة",
            css: "واجهات المستخدم",
            javascript: "التفاعل",
            react: "مكتبة واجهات المستخدم",
            tailwind: "تنسيق واجهات المستخدم",
            nodejs: "خادم الويب",
            figma: "أداة تصميم",
            express: "إطار عمل لـ Node.js",
        },
        services: {
            subtitle: "ما الذي أقدمه؟",
            title: "خدماتي",
            webDesign: "تصميم المواقع",
            webDesignDesc:
                "أصمم مواقع عصرية وجذابة تعكس هوية علامتك التجارية، مع تجربة استخدام سلسة وتصميم متجاوب يعمل على جميع الأجهزة.",
            performance: "أداء سريع",
            performanceDesc:
                "أعمل على تحسين سرعة تحميل المواقع من خلال ضغط الملفات وتحسين الصور وتقليل الطلبات، لتقديم تجربة أسرع وأكثر كفاءة.",
            cleanCode: "كود منظم",
            cleanCodeDesc:
                "أكتب كودًا منظمًا وسهل القراءة والصيانة، مع اتباع أفضل الممارسات، مما يجعل مشروعك أسهل في التطوير والتوسع مستقبلًا.",
        },
        projects: {
            subtitle: "أحدث أعمالي",
            title: "معرض أعمالي",
            github: "Github",
            demo: "معاينة المشروع",
        },
        contact: {
            subtitle: "ابقَ على تواصل",
            title: "تواصل معي",
            email: "البريد الإلكتروني",
            messenger: "ماسنجر",
            whatsapp: "واتساب",
            sendMessage: "إرسال رسالة",
            fullName: "الاسم بالكامل",
            yourEmail: "بريدك الإلكتروني",
            messagePlaceholder: "اكتب رسالتك هنا",
        },
        footer: {
            copyright: "جميع الحقوق محفوظة",
        },
    },
};

// Create Language Context
const LanguageContext = createContext();

// Language Provider
export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem("language") || "en";
    });

    useEffect(() => {
        document.documentElement.lang = language;

        document.documentElement.dir =
            language === "ar" ? "rtl" : "ltr";

        localStorage.setItem("language", language);
    }, [language]);

    const t = translations[language];
    const toggleLanguage = () => {
        setLanguage((currentLanguage) =>
            currentLanguage === "en" ? "ar" : "en"
        );
    };

    return (
        <LanguageContext.Provider
            value={{ language, toggleLanguage, t }}        >
            {children}
        </LanguageContext.Provider>
    );
}

// Custom Hook
export function useLanguage() {
    return useContext(LanguageContext);
}
