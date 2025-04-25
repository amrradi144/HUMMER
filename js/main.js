// DOM Elements
const navbar = document.querySelector('.navbar');
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');
const langSwitch = document.querySelector('.lang-switch');
const html = document.documentElement;

// Navigation Functionality
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !mobileMenu.contains(e.target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        mobileMenu.querySelector('i').classList.add('fa-bars');
        mobileMenu.querySelector('i').classList.remove('fa-times');
    }
});

// Language Switch Functionality
const websiteContent = {
    en: {
        // القائمة الرئيسية
        navigation: {
            home: 'Home',
            about: 'About',
            plans: 'Plans',
            contact: 'Contact'
        },
        // قسم الرئيسية
        homeSection: {
            title: 'Transform Your Body, Transform Your Life',
            subtitle: 'Professional personal training tailored to your goals',
            cta: 'Start Your Journey'
        },
        // قسم من نحن
        aboutSection: {
            title: 'About Me',
            name: 'C. Mohamed Demrdash',
            description: 'With over 10 years of experience in personal training, I\'ve helped hundreds of clients achieve their fitness goals. My approach combines scientific training principles with personalized attention to ensure you get the best results possible.',
            certifications: 'Certifications',
            certList: [
                'Certified Personal Trainer (CPT)',
                'Nutrition Specialist',
                'Strength and Conditioning Coach',
                'CrossFit Level 2 Trainer'
            ]
        },
        // قسم الخطط التدريبية
        trainingPlans: {
            title: 'Training Plans',
            basicPlan: {
                title: 'Basic Plan',
                price: '$50',
                period: '/month',
                features: [
                    '2 Sessions per week',
                    'Basic nutrition guide',
                    'Progress tracking'
                ]
            },
            premiumPlan: {
                title: 'Premium Plan',
                price: '$80',
                period: '/month',
                features: [
                    '3 Sessions per week',
                    'Custom meal plans',
                    '24/7 WhatsApp support',
                    'Monthly body analysis'
                ]
            },
            elitePlan: {
                title: 'Elite Plan',
                price: '$120',
                period: '/month',
                features: [
                    '5 Sessions per week',
                    'Premium nutrition coaching',
                    'Priority scheduling',
                    'Weekly consultations'
                ]
            },
            whatsappButton: 'Contact on WhatsApp'
        },
        // قسم اتصل بنا
        contactSection: {
            title: 'Find Me Here',
            gymName: 'Hummer Gym',
            address: 'First Settlement, New Cairo, Cairo, Egypt',
            directions: 'Get Directions'
        },
        // تذييل الصفحة
        footerSection: {
            slogan: 'Transform Your Body, Transform Your Life',
            quickLinks: 'Quick Links',
            followMe: 'Follow Me',
            copyright: '© 2024 Hummer Gym. All rights reserved.'
        }
    },
    ar: {
        // القائمة الرئيسية
        navigation: {
            home: 'الرئيسية',
            about: 'عني',
            plans: 'الخطط',
            contact: 'اتصل بنا'
        },
        // قسم الرئيسية
        homeSection: {
            title: 'حول جسمك، حول حياتك',
            subtitle: 'تدريب شخصي احترافي مصمم لأهدافك',
            cta: 'ابدأ رحلتك'
        },
        // قسم من نحن
        aboutSection: {
            title: 'عني',
            name: 'ك. محمد دمرداش',
            description: 'مع أكثر من 10 سنوات من الخبرة في التدريب الشخصي، ساعدت المئات من العملاء في تحقيق أهدافهم في اللياقة البدنية. نهجي يجمع بين مبادئ التدريب العلمية والاهتمام الشخصي لضمان حصولك على أفضل النتائج الممكنة.',
            certifications: 'الشهادات',
            certList: [
                'مدرب شخصي معتمد (CPT)',
                'أخصائي تغذية',
                'مدرب قوة وتكييف',
                'مدرب كروس فت المستوى 2'
            ]
        },
        // قسم الخطط التدريبية
        trainingPlans: {
            title: 'خطط التدريب',
            basicPlan: {
                title: 'الخطة الأساسية',
                price: '$50',
                period: '/شهر',
                features: [
                    'جلستان أسبوعياً',
                    'دليل تغذية أساسي',
                    'تتبع التقدم'
                ]
            },
            premiumPlan: {
                title: 'الخطة المميزة',
                price: '$80',
                period: '/شهر',
                features: [
                    '3 جلسات أسبوعياً',
                    'خطط غذائية مخصصة',
                    'دعم واتساب 24/7',
                    'تحليل جسم شهري'
                ]
            },
            elitePlan: {
                title: 'خطة النخبة',
                price: '$120',
                period: '/شهر',
                features: [
                    '5 جلسات أسبوعياً',
                    'تدريب تغذية متميز',
                    'جدولة ذات أولوية',
                    'استشارات أسبوعية'
                ]
            },
            whatsappButton: 'تواصل عبر واتساب'
        },
        // قسم اتصل بنا
        contactSection: {
            title: 'اعثر علي هنا',
            gymName: 'صالة هامر جيم',
            address: 'التجمع الأول، القاهرة الجديدة، القاهرة، مصر',
            directions: 'احصل على الاتجاهات'
        },
        // تذييل الصفحة
        footerSection: {
            slogan: 'حول جسمك، حول حياتك',
            quickLinks: 'روابط سريعة',
            followMe: 'تابعني',
            copyright: '© 2024 هامر جيم. جميع الحقوق محفوظة.'
        }
    }
};

// Function to update content based on language
function updateContent(lang) {
    // Update HTML dir attribute
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    
    // Get the translation object for the selected language
    const content = websiteContent[lang];
    
    // Update navigation links
    document.querySelectorAll('.nav-links a').forEach((link) => {
        const key = link.getAttribute('href').replace('#', '');
        link.textContent = content.navigation[key];
    });
    
    // Update hero section
    document.querySelector('.hero h1').textContent = content.homeSection.title;
    document.querySelector('.hero p').textContent = content.homeSection.subtitle;
    document.querySelector('.hero .cta-button').textContent = content.homeSection.cta;
    
    // Update about section
    document.querySelector('.about h2').textContent = content.aboutSection.title;
    document.querySelector('.about-text h3').textContent = content.aboutSection.name;
    document.querySelector('.about-text p').textContent = content.aboutSection.description;
    document.querySelector('.certifications h4').textContent = content.aboutSection.certifications;
    
    const certifications = document.querySelectorAll('.certifications li');
    content.aboutSection.certList.forEach((cert, index) => {
        certifications[index].textContent = cert;
    });
    
    // Update plans section
    document.querySelector('.plans h2').textContent = content.trainingPlans.title;
    
    const planCards = document.querySelectorAll('.plan-card');
    const plans = [
        content.trainingPlans.basicPlan,
        content.trainingPlans.premiumPlan,
        content.trainingPlans.elitePlan
    ];
    
    planCards.forEach((card, index) => {
        const plan = plans[index];
        card.querySelector('h3').textContent = plan.title;
        card.querySelector('.price').innerHTML = `${plan.price}<span>${plan.period}</span>`;
        const features = card.querySelectorAll('li');
        plan.features.forEach((feature, i) => {
            features[i].innerHTML = `<i class="fas fa-check"></i> ${feature}`;
        });
        card.querySelector('.whatsapp-button').innerHTML = 
            `<i class="fab fa-whatsapp"></i> ${content.trainingPlans.whatsappButton}`;
    });
    
    // Update contact section
    document.querySelector('.contact h2').textContent = content.contactSection.title;
    document.querySelector('.map-overlay h3').textContent = content.contactSection.gymName;
    document.querySelector('.map-overlay p').textContent = content.contactSection.address;
    document.querySelector('.map-button').textContent = content.contactSection.directions;
    
    // Update footer
    document.querySelector('.footer-logo p').textContent = content.footerSection.slogan;
    document.querySelector('.footer-links h3').textContent = content.footerSection.quickLinks;
    document.querySelector('.footer-social h3').textContent = content.footerSection.followMe;
    document.querySelector('.footer-bottom p').textContent = content.footerSection.copyright;
}

// Language Switch Event Listener
langSwitch.addEventListener('click', () => {
    const currentLang = html.getAttribute('lang');
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    
    // Update HTML attributes
    html.setAttribute('lang', newLang);
    html.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');
    
    // Toggle active class - active means we're in Arabic mode
    langSwitch.classList.toggle('active', newLang === 'ar');
    
    // Update content
    updateContent(newLang);
    
    // Save preference
    localStorage.setItem('language', newLang);
});

// Initialize language based on saved preference or default to English
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'en';
    html.setAttribute('lang', savedLang);
    html.setAttribute('dir', savedLang === 'ar' ? 'rtl' : 'ltr');
    
    // Set active class if we're in Arabic mode
    langSwitch.classList.toggle('active', savedLang === 'ar');
    
    updateContent(savedLang);
}); 