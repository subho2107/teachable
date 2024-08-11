import { SvgIconComponent } from "@mui/icons-material";

export type ImageCardType = {
    id: number,
    imageLink: string;
    heading: string;
    subHeading: string;
    linkText?: string;
    linkHref?: string;
    LinkIcon?: SvgIconComponent;
    showLink?: boolean;
    customStyles?: string;
    showPostLinkIcon?: boolean;
    indexOfCard?: number;
}

export type LearningCardType = {
    id: number,
    heading: string,
    headerLink: string,
    lessonByLink: string,
    lessonBy: string,
    lessonByDetails?: string,
    about: string,
    moreDetails: string
}

export type TweetCardDetailType = {
    id: number,
    username: string,
    content: string
}

export type GenericCardType = TweetCardDetailType | ImageCardType;

export type TrainingCard  = {
    id: number;
    images: string[];
    type: 'Image' | 'Audio' | 'Pose';
    subHeading: string;
    rerouteLink: string;
}

export type ImageModelOptionType = {
    model: 'Standard' | 'Embedded';
    bestFor: string;
    details: string[];
    suggested: boolean;
    rerouteLink: string;
}

export type InputNodeDataType = {
    heading: string;
    typeOfModel: string;
    isEmbedded?: boolean;
    id?: number;
    onCardDeleteClicked?: CallableFunction;
}

export type NodesType = {
    id: string;
    type: 'training' | 'inputSamples' | 'preview';
    position: {
        x: number;
        y: number;
    };
    data: Partial<InputNodeDataType>;
}

export type MenuItems = {
    name: string;
    icon?: SvgIconComponent;
    rerouteLink: string;
    isRerouteExternal: boolean;
    disabled?: boolean;
    action?: string;
}