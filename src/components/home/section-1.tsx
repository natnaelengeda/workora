import { Button } from "@/components/ui/button";
import Image from "next/image";

// app assets
import AppAsset from "@/core/app-asset";

export default function SectionOne() {
    return (
        <section className="w-full h-auto flex flex-col items-center justify-start">
            <p className="uppercase text-7xl md:text-[10rem] text-secondary font-bold font-sans">workora</p>
            <p className="uppercase text-3xl md:text-5xl  font-bold font-sans text-center pt-3 md:pt-0">work your way at workora</p>

            <span className="flex flex-col items-center pt-4 text-center">
                <p>Flexible workspaces for freelancers, teams, and businesses designed <br className="hidden md:block" />for productivity, comfort, and community</p>
                <p></p>
            </span>

            <div
                className="flex flex-row items-center justify-center pt-5 gap-4">
                <Button>
                    Explore Spaces
                </Button>
                <Button
                    className="border border-primary text-primary"
                    variant={'outline'}>
                    Book a Tour
                </Button>

            </div>

            <div className="w-full mx-auto mt-10 xl:container px-5">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                    {[
                        AppAsset.Images.HomeImages.HomeImage1,
                        AppAsset.Images.HomeImages.HomeImage2,
                        AppAsset.Images.HomeImages.HomeImage3,
                        AppAsset.Images.HomeImages.HomeImage4,
                    ].map((img, index) => (
                        <div
                            key={index}
                            className="relative w-full aspect-4/3"
                        >
                            <Image
                                src={img}
                                alt={`Home Image ${index + 1}`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 50vw, 25vw"
                                priority={index === 0}
                            />
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}
