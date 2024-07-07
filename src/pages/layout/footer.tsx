import styled from "styled-components"

export interface FooterProps extends React.ComponentProps<any> {
  className?: string
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const currentDate = new Date()
  const year = currentDate.getFullYear()
  return (
    <div className={className}>
      <div
        className="w-full .footer-background {
    @apply w-full bg-gradient-to-r from-gray-600 via-gray-800 to-gray-900  text-white text-lg py-5 mt-0 overflow-x-hidden text-center"
      >
        <p className="">© {year} Made by Prajwal Singh All rights reserved.</p>
      </div>
    </div>
  )
}

export default styled(Footer)``
