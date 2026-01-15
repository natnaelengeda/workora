
// Icons
import ArrowRightUpIcon from "@/assets/icons/arrow-right-up.svg";
import ChairIcon from "@/assets/icons/chair.svg";
import CheckMarkIcon from "@/assets/icons/check-mark.svg";
import CircleArrowLeftIcon from "@/assets/icons/circle-arrow-left.svg";
import CircleArrowRightIcon from "@/assets/icons/circle-arrow-right.svg";
import ClockIcon from "@/assets/icons/clock.svg";
import CoffeeIcon from "@/assets/icons/coffee.svg";
import EmailIcon from "@/assets/icons/email.svg";
import EventsIcon from "@/assets/icons/events.svg";
import HamburgMenuIcon from "@/assets/icons/hamburg-menu.svg";
import HeartIcon from "@/assets/icons/heart.svg";
import LocationIcon from "@/assets/icons/location.svg";
import LockIcon from '@/assets/icons/lock.svg';
import MoneyIcon from "@/assets/icons/money.svg";
import PeopleIcon from "@/assets/icons/people.svg";
import PhoneIcon from '@/assets/icons/phone.svg';
import PrinterIcon from '@/assets/icons/printer.svg';
import WifiIcon from "@/assets/icons/wifi.svg";
import QuotationmarkIcon from "@/assets/icons/quotation-mark.svg";

// Social Media Icons
import LinkedinIcon from "@/assets/icons/linkedin-icon.svg";
import FacebookIcon from "@/assets/icons/facebook-icon.svg";
import YoutubeIcon from "@/assets/icons/youtube-icon.svg";
import InstagramIcon from "@/assets/icons/instagram-icon.svg";

// Images
import WorkoraName from "@/assets/imgs/workora-name.svg";
import HomeImage1 from "@/assets/imgs/home-image-1.svg";
import HomeImage2 from "@/assets/imgs/home-image-2.svg";
import HomeImage3 from "@/assets/imgs/home-image-3.svg";
import HomeImage4 from "@/assets/imgs/home-image-4.svg";
import HomeImageHeroSection2 from "@/assets/imgs/home-image-hero-section-2.svg";

import SpaceImage1 from "@/assets/imgs/space-1.svg";
import SpaceImage2 from "@/assets/imgs/space-2.svg";
import SpaceImage3 from "@/assets/imgs/space-3.svg";

class AppAsset {
    constructor(public name: string, public path: string) { }

    static Icons = {
        ArrowRightUp: ArrowRightUpIcon,
        Chair: ChairIcon,
        CheckMark: CheckMarkIcon,
        CircleArrowLeft: CircleArrowLeftIcon,
        CircleArrowRight: CircleArrowRightIcon,
        Clock: ClockIcon,
        Coffee: CoffeeIcon,
        Email: EmailIcon,
        Events: EventsIcon,
        HamburgMenu: HamburgMenuIcon,
        Heart: HeartIcon,
        Location: LocationIcon,
        Lock: LockIcon,
        Money: MoneyIcon,
        People: PeopleIcon,
        Phone: PhoneIcon,
        Printer: PrinterIcon,
        Quotationmark: QuotationmarkIcon,
        Wifi: WifiIcon,

        // Social Media Icons
        Linkedin: LinkedinIcon,
        Facebook: FacebookIcon,
        Youtube: YoutubeIcon,
        Instagram: InstagramIcon,
    };

    static Images = {
        WorkoraName: WorkoraName,
        HomeImages: {
            HomeImage1: HomeImage1,
            HomeImage2: HomeImage2,
            HomeImage3: HomeImage3,
            HomeImage4: HomeImage4,
        },
        HomeImageHeroSection2: HomeImageHeroSection2,
        Spaces: {
            SpaceImage1: SpaceImage1,
            SpaceImage2: SpaceImage2,
            SpaceImage3: SpaceImage3,
        }
    };
}

export default AppAsset;