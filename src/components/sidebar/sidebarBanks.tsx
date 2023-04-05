import {
  MdOutlineHistory,
  MdOutlineVideoLibrary,
  MdOutlineWatchLater,
  MdOndemandVideo,
  MdOutlineSubscriptions,
  MdOutlineSettings,
  MdHelpOutline,
  MdOutlineFeedback,
  MdOutlinedFlag,
} from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { TiVideo } from "react-icons/ti";
import { BsFillPlayBtnFill, BsPlayCircleFill } from "react-icons/bs";

export interface Subscriptions {
  src: string;
  title: string;
  link: string;
}

export const SubscriptionsData: Subscriptions[] = [
  {
    src: "../../assets.test.png",
    title: "TAAOOMA Apaoka..",
    link: "",
  },
  {
    src: "../../assets.test.png",
    title: "Traversy Media",
    link: "",
  },
  {
    src: "../../assets.test.png",
    title: "Laisisi Elenu",
    link: "",
  },
  {
    src: "../../assets.test.png",
    title: "Traversy Media",
    link: "",
  },
  {
    src: "../../assets.test.png",
    title: "Traversy Media",
    link: "",
  },
];

// More from Youtube data
export interface SideBarType {
  icon: JSX.Element;
  title: string;
  link: string;
}

export const Library: SideBarType[] = [
  {
    icon: <MdOutlineVideoLibrary />,
    title: "Library",
    link: "",
  },
  {
    icon: <MdOutlineHistory />,
    title: "History",
    link: "",
  },
  {
    icon: <MdOndemandVideo />,
    title: "Your Videos",
    link: "",
  },
  {
    icon: <MdOutlineWatchLater />,
    title: "Watch later",
    link: "",
  },
  {
    icon: <AiOutlineLike />,
    title: "Liked Videos",
    link: "",
  },
];

export const MoreFromYoutube: SideBarType[] = [
  {
    icon: <BsFillPlayBtnFill />,
    title: "YouTube Premium",
    link: "",
  },
  {
    icon: <MdOutlineSubscriptions />,
    title: "YouTube Studio",
    link: "",
  },
  {
    icon: <BsPlayCircleFill />,
    title: "YouTube Music",
    link: "",
  },
  {
    icon: <TiVideo />,
    title: "YouTube Kid",
    link: "",
  },
];

export const Settings: SideBarType[] = [
  {
    icon: <MdOutlineSettings />,
    title: "Settings",
    link: "",
  },
  {
    icon: <MdOutlinedFlag />,
    title: "Repost History",
    link: "",
  },
  {
    icon: <MdHelpOutline />,
    title: "Help",
    link: "",
  },
  {
    icon: <MdOutlineFeedback />,
    title: "Send feedback",
    link: "",
  },
];
