import Image from "next/image";

// app assets
import AppAsset from "@/core/app-asset";

// styles
import "@/styles/card-borders.css";

export default function SectionTwo() {

    const items = [
        { icon: AppAsset.Icons.Chair, name: 'Flexible Workspaces', description: 'Choose what suits your rhythm from hot desks to private offices and meeting rooms. Pay for what you need, when you need it.' },
        { icon: AppAsset.Icons.Wifi, name: 'Amenities That Keep You Going', description: 'Enjoy high-speed Wi-Fi, premium coffee, lockers, printers, lounges, and everything else to stay productive and relaxed.' },
        { icon: AppAsset.Icons.People, name: 'Creative Community', description: 'Surround yourself with freelancers, startups, and teams who are building, sharing, and growing just like you.' },
        { icon: AppAsset.Icons.Events, name: 'Events, Workshops & More', description: 'Stay inspired with regular community events, expert-led talks, networking nights, and productivity sessions.' },
    ];

    return (
        <section className="w-full h-auto bg-secondary">
            <div className="w-full h-auto mx-auto xl:container flex flex-col items-start justify-start gap-5 px-5 py-20">
                {/* top */}
                <div className="flex flex-col md:flex-row items-start justify-start text-white font-sora">

                    <div
                        className="w-full flex flex-col items-start justify-start">
                        <div className="flex flex-col items-start justify-start gap-3">
                            <p
                                className="uppercase text-4xl">
                                more than just a <br className="hidden md:block" />desk
                            </p>
                            <p className="text-xl">
                                It's How You Work Best
                            </p>
                        </div>

                    </div>
                    <div className="w-full">
                        <p>
                            Workora gives you the freedom, comfort, and tools to work your way whether you’re flying solo, leading a team, or building the next big thing.
                        </p>
                    </div>
                </div>

                {/* bottom */}
                <div className="w-full flex flex-col md:flex-row items-start justify-start gap-10">
                    <div className="w-full ">
                        <Image
                            src={AppAsset.Images.HomeImageHeroSection2}
                            alt="Hero Section Image"
                            className="w-full h-100 md:h-145 object-cover"
                        />
                    </div>

                    <div
                        className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 text-white font-sora">
                        {
                            items.map((item, index) => (
                                <div
                                    key={index}
                                    className="w-full h-50 md:h-70 flex flex-col items-center justify-center gap-3 bg-black/10 p-2 border border-gray-100 rounded-lg cursor-pointer box-transition">
                                    <div className="w-10 h-10 relative">
                                        <Image
                                            src={item.icon}
                                            alt={item.name}
                                            fill
                                            className="object-contain text-white"
                                        />
                                    </div>
                                    <p className="font-bold text-lg text-center">{item.name}</p>
                                    <p className="text-sm text-center font-light">{item.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
