import { ReactNode, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Tooltip from "@/components/custom-tooltip"
interface NavigationLinkProps {
  href: string
  icon: () => JSX.Element
  children: ReactNode
}

const NavigationLink: React.FC<NavigationLinkProps> = ({
  href,
  icon: Icon,
  children,
}) => (
  <a
    href={href}
    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
  >
    <Icon />
    <span className="ml-3 text-base font-medium text-gray-900">{children}</span>
  </a>
)

const NavBar = () => {
  return (
    <>
      <div className="relative bg-gradient-to-r from-gray-900 via-gray-600 to-gray-300  text-white text-lg">
        <div className="max-w-8xl mx-auto px-4 sm:px-1">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-3 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-10 text-white"
                >
                  <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                  <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                </svg>
              </a>
            </div>

            <nav className="hidden md:flex space-x-10">
              <Tooltip tooltip="Login">
                <Link href={"/login"}>
                  <Image
                    src={"/login.svg"}
                    width={50}
                    height={50}
                    alt="login"
                  />
                </Link>
              </Tooltip>
              <Tooltip tooltip="Logout">
                <Link href={"/logout"}>
                  <Image
                    src={"/signout.svg"}
                    width={50}
                    height={80}
                    className="scale-100"
                    alt="logout"
                  />
                </Link>
              </Tooltip>
              <Tooltip tooltip="About Us">
                <Link
                  href={"/aboutus"}
                  className="flex flex-row justify-center items-center"
                >
                  <Image
                    src={"/address-card.svg"}
                    width={50}
                    height={50}
                    className="scale-100"
                    alt="logout"
                  />
                </Link>
              </Tooltip>
              <Tooltip tooltip="Help">
                <Link
                  href={"/help"}
                  className="flex flex-row justify-center items-center"
                >
                  <Image
                    src={"/support.svg"}
                    width={50}
                    height={50}
                    className="scale-100"
                    alt="logout"
                  />
                </Link>
              </Tooltip>
              {/* <span className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
              </span> */}
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar
