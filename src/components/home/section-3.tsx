import AppAsset from "@/core/app-asset";
import { Button } from "../ui/button";
import Image from "next/image";

export default function SectionThree() {
    const spaces = [
        {
            name: "Shared Desk",
            tags: [
                "10 pages Printing",
                "1 Coffee",
                "1 Bottle of Water",
                "Shared Space",
                "Shared Desk",
                "Free Wifi"
            ],
            price: 500,
            image: AppAsset.Images.Spaces.SpaceImage1
        },
        {
            name: "Private Office",
            tags: [
                "Unlimited Printing",
                "1 Coffee",
                "Open Desk Access",
                "Fully Furnished Office",
                "Free Wifi",
            ],
            price: 1000,
            image: AppAsset.Images.Spaces.SpaceImage2
        },
        {
            name: "Dedicated Desk",
            tags: [
                "10 pages Printing",
                "1 Coffee",
                "1 Bottle of Water",
                "Dedicated Desk Access",
                "Free Wifi",
            ],
            price: 1000,
            image: AppAsset.Images.Spaces.SpaceImage3
        }
    ];
    return (
        <section className="w-full h-auto bg-[#F8F7F4] py-10 px-5">
            <div className="w-full h-auto mx-auto xl:container flex flex-col items-center justify-start gap-10">
                <div className="w-full flex flex-row items-start justify-between">
                    <div className="flex flex-col items-start justify-start gap-1">
                        <p className="text-5xl uppercase  font-bold text-secondary font-sora">spaces that work for you</p>
                        <p>Whether you're flying solo or bringing your team, we have the space to match your energy.</p>
                    </div>
                    <Button
                        size={'lg'}
                        className="border-primary rounded-sm text-primary font-bold font-sora"
                        variant={'outline'}>
                        View All Spaces
                    </Button>
                </div>

                <div
                    className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {
                        spaces.map((space, index) => (
                            <div
                                key={index}
                                className="w-full h-auto flex flex-col items-start justify-start gap-3 p-5 bg-white shadow-xs border border-gray-50 rounded-lg">
                                <img
                                    src={space.image.src}
                                    alt={space.name}
                                    className="w-full h-auto rounded-md"
                                />
                                <span
                                    className="w-full flex flex-row items-center justify-between ">
                                    <p className="text-2xl font-bold text-secondary font-sora">{space.name}</p>
                                    <Image
                                        src={AppAsset.Icons.Heart}
                                        alt={"Heart"} />
                                </span>
                                <div className="flex flex-wrap items-start justify-start gap-3">
                                    {
                                        space.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="bg-[#EBE8FF] rounded">
                                                <p
                                                    className="text-sm text-gray-600 px-2 py-1">
                                                    {tag}
                                                </p>
                                            </span>
                                        ))
                                    }
                                </div>
                                <div className="w-full flex flex-row items-center justify-between pt-10">
                                    <span className="flex flex-row items-center justify-start gap-2">
                                        <Image
                                            src={AppAsset.Icons.Money}
                                            alt={"Money"} />
                                        <p
                                            className="text-xl font-bold text-secondary font-sora">
                                            ETB {space.price}
                                        </p>
                                    </span>
                                    <Button
                                        className="bg-primary rounded-sm text-white font-bold font-sora h-11">
                                        Book Now
                                        <Image
                                            src={AppAsset.Icons.ArrowRightUp}
                                            alt={"Arrow Right"} />
                                    </Button>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </section>
    )
}
