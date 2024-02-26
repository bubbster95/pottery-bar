export const LOGO = {
    alt: 'La Taza Logo',
    src: "./assets/la_taza_icon.png",
}
// export const RSC_GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY

export const oldGyms = ""

export const staticText = {
    home: {
        intro: {
            title: "What Is This?",
            dsc: "A pottery studio? A Cafe? A Bar!? Actually it's all three."
        },
        "night-classes": {
            title: "Tipsy Throwers",
            dsc: "Have a drinks with friends while you try your hand at this pottery throwing thing."
        },
        "day-classes": {
            title: "Morning Makers",
            dsc: "Have a sip of joe while you give pottery throwing a go."
        }
    }
}
export const staticPhoto = {
    home: {
        intro: {
            src: "/assets/hero-images/pottery-cafe.jpeg",
            alt: "An empty cafe with many nugs stored in cubbies built into the wall. The room is vibrant an welcoming with a barista waiting to take your order."
        },
        "night-classes": {
            src: "/assets/hero-images/Tipsy-Throwers.jpeg",
            alt: "Three artis sit behind pottery wheels with smiles on their face. They each have little pots on the wheel and seem very proud of them."
        },
        "day-classes": {
            src: "/assets/hero-images/Pottery_Throwing_Class.jpeg",
            alt: "A class full of students learn to throw pottery on many throwing wheels. A teacher looks into the camera, clearly proud of her students."
        }
    }
}

export const NAV_BUTTONS = {
    home: {
        path: '/',
        title: 'Home',
        options: {
            
        }
    },
    rates: {
        path: "/rates",
        title: 'Rates',
    },
    contact: {
        path: "/contact",
        title: 'Contact'
    },
    programs: {
        path: "/programs",
        title: 'Programs',
        options: {
            classes: {
                path: "/classes",
                title: 'Classes'
            },
            perks: {
                path: '/member-perks',
                title: 'Member Perks'
            },
            calendar: {
                path: '/calendar',
                title: 'Calendar'
            }
        }
    },
}

export const editorForms = [
    // Banners
    {
        component: "banners",
        label: "Announcment Banners",
        fields: [
            {
                type: 'datetime-local',
                required: true,
                label: "Start Date",
                key: "start_date"
            },
            {
                type: 'datetime-local',
                required: true,
                label: "End Date",
                key: "end_date"
            },
            {
                type: 'text',
                required: true,
                label: "Message",
                key: "message"
            },
            {
                type: 'text',
                required: false,
                label: "Link",
                key: "link"
            }
        ]
    },
    // Pages
    {
        component: "pages",
        label: "Website Pages",
        fields: [
            {
                type: 'text',
                required: true,
                label: "Page URL",
                key: "page"
            },
            {
                type: 'text',
                required: false,
                label: "Hero Header",
                key: "hero_header"
            },
            {
                type: 'text',
                required: false,
                label: "Hero Subheader",
                key: "hero_sub"
            },
            {
                type: 'text',
                required: false,
                label: "Hero Link",
                key: "hero_link"
            },
            {
                type: 'file',
                required: false,
                label: "Hero Image",
                key: "hero_image"
            },
            {
                type: 'text-editor',
                required: true,
                label: "Inner Html Editor",
                key: "html"
            }
        ]
    },
    // Landing Pages
    {
        component: "landing",
        label: "Landing Pages",
        fields: [
            {
                type: 'text',
                required: true,
                label: "Page URL",
                key: "page"
            },
            {
                type: 'datetime-local',
                required: true,
                label: "Start Date",
                key: "start_date"
            },
            {
                type: 'datetime-local',
                required: true,
                label: "End Date",
                key: "end_date"
            },
            {
                type: 'text-editor',
                required: true,
                label: "Inner Html Editor",
                key: "html"
            }
        ]
    },
    // Ads
    {
        component: "ads",
        label: "Timed Ads",
        fields: [
            {
                type: 'datetime-local',
                required: true,
                label: "Start Date",
                key: "start_date"
            },
            {
                type: 'datetime-local',
                required: true,
                label: "End Date",
                key: "end_date"
            },
            {
                type: 'text-editor',
                required: true,
                label: "Inner Html Editor",
                key: "html"
            },
            {
                type: 'text',
                required: true,
                label: "Call to action Link",
                key: "link"
            }
        ]
    }
]

// Add Blogs to back end
/*
    // Blogs
    {
        component: "blogs",
        label: "Blog Posts",
        fields: [
            {
                type: 'text',
                required: true,
                label: "Page URL",
                key: "page"
            },
            {
                type: 'text',
                required: false,
                label: "Hero Header",
                key: "hero_header"
            },
            {
                type: 'text',
                required: false,
                label: "Hero Subheader",
                key: "hero_sub"
            },
            {
                type: 'text',
                required: false,
                label: "Hero Link",
                key: "hero_link"
            },
            {
                type: 'file',
                required: false,
                label: "Hero Image",
                key: "hero_image"
            },
            {
                type: 'text-editor',
                required: true,
                label: "Html Editor",
                key: "html"
            }
        ]
    },
    // News Letter
    {
        component: "news",
        label: "News Letter Post",
        fields: [
            {
                type: 'text',
                required: true,
                label: "Page URL",
                key: "page"
            },
            {
                type: 'text',
                required: true,
                label: "Hero Header",
                key: "hero_header"
            },
            {
                type: 'text',
                required: true,
                label: "Hero Subheader",
                key: "hero_sub"
            },
            {
                type: 'text',
                required: false,
                label: "Hero Link",
                key: "hero_link"
            },
            {
                type: 'file',
                required: false,
                label: "Hero Image",
                key: "hero_image"
            },
            {
                type: 'text-editor',
                required: true,
                label: "Html Editor",
                key: "html"
            }
        ]
    },
    // Problem of the set
    {
        component: "problem_ots",
        label: "Problem Of The Set",
        fields: [
            {
                type: 'text',
                required: true,
                label: "Header",
                key: "header"
            },
            {
                type: 'text',
                required: false,
                label: "Sub Header",
                key: "sub_header"
            },
            {
                type: 'text',
                required: false,
                label: "Hero Link",
                key: "hero_link"
            }
        ]
    }
    */