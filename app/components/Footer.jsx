import Link from "next/link";
import Image from "next/image";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
} from "@tabler/icons-react";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Logo and Company Info */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <div className="relative h-10 w-10 overflow-hidden rounded-md bg-white">
                <Image
                  src="/images/logo.png"
                  alt="Company Logo"
                  fill
                  className="object-contain p-1 scale-300"
                />
              </div>
              <span className="ml-3 text-xl font-bold">
                {" "}
                BRAINSHORING - FZCO
              </span>
            </div>
            <p className="text-gray-400">
              We provide exceptional services to help your business grow and
              succeed in today's competitive market.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <IconBrandFacebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <IconBrandX size={20} />
                <span className="sr-only">X (Twitter)</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <IconBrandInstagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  App Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Social Media Manegements
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Ai Modeling
                </Link>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Location</h3>
            <div className="space-y-2">
              <p className="text-gray-400">United Arab Emirates (UAE)</p>
              <p className="text-gray-400">Dubai Silicon Oasis</p>
              <p className="text-gray-400">THUB</p>
              <div className="pt-2">
                <Link
                  href="https://www.google.com/maps/place/D-Flex-+G077D-THUB/@25.1248835,55.3775308,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f643955942fc1:0x8f7edba6446f9bab!8m2!3d25.1248787!4d55.3749559!16s%2Fg%2F11c72r2rmg?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Get Directions
                </Link>
              </div>
              <div className="pt-1">
                <p className="text-sm text-gray-500">
                  Sun - Fri: 9:00 AM - 7:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} BRAINSHORING - FZCO. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
