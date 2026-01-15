import Image from 'next/image'
import AppAsset from '@/core/app-asset'
import { Linkedin, LinkedinIcon, LocationEditIcon, LucideLinkedin, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
    return (
        <footer className='w-full min-h-80 h-auto bg-[#2A2734]'>
            {/* main */}
            <div
                className='w-full h-full xl:container mx-auto flex flex-col items-start justify-start px-5 py-10 gap-5 md:gap-7'>
                {/* 1 */}
                <div className='w-auto flex flex-col items-start justify-start gap-3'>
                    <Image
                        src={AppAsset.Images.WorkoraName}
                        alt='Workora'
                        className='w-40 md:w-60 h-auto object-contain' />
                    <span className='text-white text-sm md:text-base font-light font-opensans'>
                        Your space to grow, create,
                        <br />and connect.
                    </span>
                </div>

                {/* 2 */}
                <div
                    className='w-full flex flex-col md:flex-row items-start justify-between gap-5 px-3 md:px-2'>
                    <div
                        className='w-auto flex flex-col items-start justify-start gap-2'>
                        <span className='text-[#D9D4FF] text-[20px]'>
                            Quick Links
                        </span>
                        <ul className='text-white text-sm md:text-base font-opensans font-light flex flex-col items-start justify-start gap-1'>
                            <li>Home</li>
                            <li>Packages</li>
                            <li>Blog</li>
                            <li>Events</li>
                        </ul>

                    </div>
                    <div
                        className='flex flex-col items-start justify-start gap-2'>
                        <span className='text-[#D9D4FF] text-[20px]'>
                            Explore
                        </span>
                        <ul className='text-white  text-sm md:text-base  font-opensans font-light flex flex-col items-start justify-start gap-1'>
                            <li>Sign In</li>
                            <li>Sing Up</li>
                            <li>Book a space</li>
                            <li>Become a Member</li>
                            <li>Contact Us</li>
                        </ul>

                    </div>
                    <div
                        className='flex flex-col items-start justify-start gap-2'>
                        <span className='text-[#D9D4FF] text-[20px]'>
                            Contact Info
                        </span>
                        <ul className='text-white text-sm md:text-base font-opensans font-light flex flex-col items-start justify-start gap-2'>
                            <li className='flex gap-2'><MapPin className='w-5 h-5 md:w-6 md:h-6' /> Point Hook, Australia</li>
                            <li className='flex gap-2'><Phone className='w-5 h-5 md:w-6 md:h-6' /> +123456789</li>
                            <li className='flex gap-2'><Mail className='w-5 h-5 md:w-6 md:h-6' /> hello@workora.com</li>
                        </ul>

                    </div>
                    <div
                        className='flex flex-col items-start justify-start gap-2'>
                        <span className='text-[#D9D4FF] text-[20px]'>
                            Keep in Touch
                        </span>
                        <ul className='text-white font-opensans font-light flex flex-row items-start justify-start gap-4 md:gap-2'>
                            <Image
                                src={AppAsset.Icons.Linkedin}
                                alt='Linkedin' />
                            <Image
                                src={AppAsset.Icons.Facebook}
                                alt='Facebook' />
                            <Image
                                src={AppAsset.Icons.Youtube}
                                alt='Youtube' />
                            <Image
                                src={AppAsset.Icons.Instagram}
                                alt='Instagram' />
                        </ul>

                    </div>
                </div>

                {/* 3 */}
                <div>
                    <span
                        className='text-white font-opensans font-light text-sm md:text-base'>
                        © 2025 Workora. All rights reserved.
                    </span>
                </div>

            </div>

        </footer>
    )
}
