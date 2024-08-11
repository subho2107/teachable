import { ImageCardType, ImageModelOptionType, LearningCardType, MenuItems, TrainingCard, TweetCardDetailType } from "./types"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import AddToDriveOutlinedIcon from '@mui/icons-material/AddToDriveOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export const HOW_TO_USE: ImageCardType[] = [
    {
        id: 1,
        imageLink: '/gather.svg',
        heading: 'Gather',
        subHeading: 'Gather and group your examples into classes, or categories, that you want the computer to learn.',
        linkText: 'Video: Gather samples',
        linkHref: 'https://teachablemachine.withgoogle.com/train?action=onboardOpen&id=DFBbSTvtpy4',
        LinkIcon: PlayArrowIcon
    },
    {
        id: 2,
        imageLink: '/train.svg',
        heading: 'Train',
        subHeading: 'Train your model, then instantly test it out to see whether it can correctly classify new examples.',
        linkHref: 'https://teachablemachine.withgoogle.com/train?action=onboardOpen&id=CO67EQ0ZWgA',
        linkText: 'Video: Train your model',
        LinkIcon: PlayArrowIcon
    },
    {
        id: 3,
        imageLink: '/export.svg',
        heading: 'Export',
        subHeading: 'Export your model for your projects: sites, apps, and more. You can download your model or host it online.',
        linkText: 'Video: Export your model',
        linkHref: 'https://teachablemachine.withgoogle.com/train?action=onboardOpen&id=n-zeeRLBgd0',
        LinkIcon: PlayArrowIcon
    }
];

export const WHAT_TO_USE_TO_TEACH: ImageCardType[] = [
    {
        id: 1,
        imageLink: '/teach-images.png',
        heading: 'Images',
        subHeading: 'Teach a model to classify images using files or your webcam.'
    },
    {
        id: 2,
        imageLink: '/teach-sounds.png',
        heading: 'Sounds',
        subHeading: 'Teach a model to classify audio by recording short sound samples.'
    },
    {
        id: 3,
        imageLink: '/teach-poses.png',
        heading: 'Poses',
        subHeading: 'Teach a model to classify body positions using files or striking poses in your webcam.'
    }
];

export const TUTORIALS: {header: string, subHeader: string, linkHref: string}[] = [
    {
        header: 'Images: Bananameter',
        subHeader: 'Learn how to create a model that can tell if a banana is ripe or not.',
        linkHref: 'https://medium.com/@warronbebster/4bfffa765866'
    },
    {
        header: 'Sound: Snap Clap Whistle',
        subHeader: 'Learn how to create a model that detects simple sounds you make.',
        linkHref: 'https://medium.com/@warronbebster/4212fd7f3555'
    },
    {
        header: 'Pose: Head Tilt',
        subHeader: 'Learn how to create a model that recognizes which way you’re tilting your head.',
        linkHref: 'https://medium.com/@warronbebster/f4f6116f491'
    }
];


export const PROJECTS_WITH_TEACHABLE: ImageCardType[] = [
    {
        id: 1,
        imageLink: '/madewith-sorter.jpg',
        heading: 'Tiny Sorter',
        subHeading: 'A DIY experiment connecting Arduino and Teachable Machine.',
        linkText: 'Learn more',
        linkHref: 'https://experiments.withgoogle.com/tiny-sorter/view',
        showLink: true,
        showPostLinkIcon: false
    },
    {
        id: 2,
        imageLink: '/madewith-euphonia.jpg',
        heading: 'Project Euphonia',
        subHeading: 'Steve Saling is using Teachable Machine to communicate in new ways, such as using facial gestures to trigger sounds.',
        linkText: 'Watch video',
        linkHref: 'https://www.youtube.com/watch?v=OAdegPmkK-o',
        showLink: true,
        showPostLinkIcon: false
    },
    {
        id: 3,
        imageLink: '/madewith-snake.jpg',
        heading: 'Teachable Snake',
        subHeading: 'Vince MingPu Shao used Teachable Machine to turn their webcam and a piece of paper into a game controller.',
        linkText: 'Learn more',
        linkHref: 'https://experiments.withgoogle.com/teachable-snake',
        showLink: true,
        showPostLinkIcon: false
    },
    {
        id: 4,
        imageLink: '/madewith-singulator.jpg',
        heading: 'Teachable Sorter',
        subHeading: 'A physical machine that you can teach to rapidly recognize and sort objects using your own custom machine learning models.',
        linkText: 'Learn more',
        linkHref: 'https://coral.ai/projects/teachable-sorter',
        showLink: true,
        showPostLinkIcon: false
    },
    {
        id: 5,
        imageLink: '/madewith-arcade.jpg',
        heading: 'Teachable Arcade',
        subHeading: 'Use Teachable Machine to train a video game controller. (Also see the accompanying lesson plan below.)',
        linkText: 'Learn more',
        linkHref: 'https://teachable-arcade.glitch.me/',
        showLink: true,
        showPostLinkIcon: false
    }

]

export const FOR_LEARNING : LearningCardType[] = [
    {
        id: 1,
        heading: 'AI + Ethics',
        lessonBy: 'Blakeley H.Payne',
        headerLink: 'https://docs.google.com/document/d/1e9wx9oBg7CR0s5O7YnYHVmX7H7pnITfoDxNdrSGkp60/view',
        lessonByLink: 'https://twitter.com/blakeleyhpayne',
        lessonByDetails: ', Personal Robots Group, MIT Media Lab',
        about: 'A lesson for students to start understanding bias in algorithmic systems.',
        moreDetails: 'Common Core, K-8, tech'
    },
    {
        id: 2,
        heading: 'Dancing with AI',
        lessonBy: 'MIT Media Lab',
        headerLink: 'https://dancingwithai.media.mit.edu/',
        lessonByLink: 'https://www.media.mit.edu/',
        about: 'Use Teachable Machine and PoseBlocks to create interactive systems.',
        moreDetails: 'K-8, tech'
    },
    {
        id: 3,
        heading: 'Ready AI Lesson',
        lessonBy: 'Ready AI',
        headerLink: 'https://edu.readyai.org/courses/teachable-machine/',
        lessonByLink: 'https://edu.readyai.org/',
        about: 'Explore Teachable Machine and learn the concepts of machine learning, classification, and societal impact.',
        moreDetails: 'K-12'
    }
]


export const TWEETS: TweetCardDetailType[] = [
    {
        id: 1,
        username: 'pushmatrix',
        content: 
        `Google's Teachable Machine is a magical ML tool. ✨
        
In 2 minutes I trained my computer to recognize what part of my shoe it was looking at.
        
You have to try it: https://teachablemachine.withgoogle.com'
        `
    },
    {
        id: 2,
        username: 'thecodingtrain',
        content: `we've been in zoom land for how long now? 😭 we just released a new video showing you how to augment your video calls using @p5xjs @ml5js Teachable Machine + OBS. ty for the idea @cameronhunter 🌟

🎥 https://youtu.be/9z9mbiOZqSs
💻 https://thecodingtrain.com/CodingChallenges/157-zoom-annotations.html
        `
    },
    {
        id: 3,
        username: 'blakeleyhpayne',
        content: 
        `“Kids are given images of both and use Google’s Teachable Machines to train the data.”
        
It was a joy to collaborate with @WarronBebster, @ire_alva, @alexanderchen, and @hapticdata and have them in our classroom. You can check out the tool here: teachablemachine.withgoogle.com
        `
    },
    {
        id: 4,
        username: 'yining_shi',
        content: `Teachable Machine is so helpful to people who have creative ideas and beginners to machine learning or programming! Here are some very cool projects students made with Teachable Machine + @p5xjs in Machine Learning for the Web class at @ITP_NYU: https://github.com/yining1023/teachable-machine-p5
        `
    },
    {
        id: 5,
        username: 'jetscott',
        content: `Teachable Machine: a project training sound recognition to win a tractor race! By Steve Saling, who created it to explore how to train for non standard speech interactions for ALS, stroke and others who need assistance #io19
        `
    },
    {
        id: 6,
        username: 'anildash',
        content: `Really extraordinary set of tools from Google Creative Lab, including this @Glitch app that’s a starter for Teachable Machine — letting you train your own machine learning projects right in a web browser. This is what helped me finally understand this stuff!
        `
    }
]

export const TRAINING_MODELS: TrainingCard[] = [
    {
        id: 1,
        images: ['/trainImage1.jpg', '/trainImage2.jpg', '/trainImage3.jpg'],
        type: 'Image',
        subHeading: 'Teach based on images, from files or your webcam',
        rerouteLink: '/train'
    },
    {
        id: 2,
        images: ['/trainAudio1.jpg', '/trainAudio2.jpg', '/trainAudio3.jpg'],
        type: 'Audio',
        subHeading: 'Teach based on one-second-long sounds, from files or your microphone.',
        rerouteLink: '/train/audio'
    },
    {
        id: 3,
        images: ['/trainPose1.jpg', '/trainPose2.jpg', '/trainPose3.jpg'],
        type: 'Pose',
        subHeading: 'Teach based on images, from files or your webcam',
        rerouteLink: '/train/pose'
    }
]

export const IMAGE_MODEL_TYPES: ImageModelOptionType[] = [
    {
        model: 'Standard',
        bestFor: 'most uses',
        details: ["224x224px color images", "Export to TensorFlow, TFLite, and TF.js", "Model size: around 5mb"],
        suggested: true,
        rerouteLink: '/train/image'
    },
    {
        model: 'Embedded',
        bestFor: 'microcontrollers',
        details: ["96x96px greyscale images","Export to TFLite for Microcontrollers, TFLite, and TF.js","Model size: around 500kb"],
        suggested: false,
        rerouteLink: '/train/tiny-image'
    }
]

export const MAIN_MENU_ITEMS: MenuItems[][] = [
    [
        {
            name: 'New Project',
            icon: AddOutlinedIcon,
            rerouteLink: '/train',
            isRerouteExternal: false
        }

    ],
    [
        {
            name: 'Open project from Drive',
            icon: AddToDriveOutlinedIcon,
            rerouteLink: '/train',
            isRerouteExternal: false
        },
        {
            name: 'Save project to Drive',
            icon: SaveOutlinedIcon,
            rerouteLink: '',
            isRerouteExternal: true
        },
        {
            name: 'View project in Drive',
            icon: FolderOpenOutlinedIcon,
            rerouteLink: '',
            isRerouteExternal: true
        },
        {
            name: 'Make a copy in Drive',
            icon: ContentCopyOutlinedIcon,
            rerouteLink: '',
            isRerouteExternal: true
        },
        {
            name: 'Sign out of Drive',
            icon: AccountCircleOutlinedIcon,
            rerouteLink: '',
            isRerouteExternal: true
        }
    ],
    [
        {
            name: 'Open project from file',
            icon: FolderOpenOutlinedIcon,
            rerouteLink: '',
            isRerouteExternal: true
        },
        {
            name: 'Download project as file',
            icon: FileDownloadOutlinedIcon,
            rerouteLink: '',
            isRerouteExternal: true
        }
    ],
    [
        {
            name: 'About Teachable Machine',
            icon: HomeOutlinedIcon,
            rerouteLink: '/',
            isRerouteExternal: false
        },
        {
            name: 'FAQ',
            icon: HelpOutlineOutlinedIcon,
            rerouteLink: '',
            isRerouteExternal: true
        }
    ],
    [
        {
            name: '1.Gather samples',
            icon: PlayCircleOutlineOutlinedIcon,
            rerouteLink: '',
            isRerouteExternal: true
        },
        {
            name: '2.Train your model',
            icon: PlayCircleOutlineOutlinedIcon,
            rerouteLink: '',
            isRerouteExternal: true
        },
        {
            name: '3.Export your model',
            icon: PlayCircleOutlineOutlinedIcon,
            rerouteLink: '',
            isRerouteExternal: true
        }
    ],
    [
        {
            name: 'Send feedback',
            icon: AnnouncementOutlinedIcon,
            rerouteLink: '',
            isRerouteExternal: true
        }
    ]
]

export const CARD_MENU_ITEMS: MenuItems[][] = [
    [
        {
            name: 'Delete class',
            rerouteLink: '',
            isRerouteExternal: false,
            action: 'delete'
        },
        {
            name: 'Disable class',
            rerouteLink: '',
            isRerouteExternal: false,
            action: 'disable'
        },
        {
            name: 'Remove all samples',
            rerouteLink: '',
            isRerouteExternal: false,
            action: 'removeSample',
            disabled: true
        },
        {
            name: 'Download samples',
            rerouteLink: '',
            isRerouteExternal: false,
            action: 'downloadSample',
            disabled: true
        },
        {
            name: 'Save samples to Drive',
            rerouteLink: '',
            action: 'saveToDrive',
            isRerouteExternal: false,
            disabled: true
        },

    ]
]