import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
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
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
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

          {/* Support & Resources */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Support & Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/faq"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/help-center"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Help Center
                </Link>
              </li>
            </ul>
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
