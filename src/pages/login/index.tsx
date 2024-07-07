import { FormEvent, useState } from "react"
import { useRouter } from "next/router"
// import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid"
import { Button, Container, Form } from "react-bootstrap"
import Image from "next/image"
import styled from "styled-components"
export interface CustomLoginProps extends React.ComponentProps<any> {
  className?: string
}
const LoginPage: React.FC<CustomLoginProps> = ({ className }) => {
  const router = useRouter()
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  const handleOnChange = (e: any) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  const [visibility, setVisibility] = useState(false)
  const icon = !visibility ? (
    <Image src={"/eye.svg"} width={20} height={20} alt={"eye"} />
  ) : (
    <Image
      src={"/eye-password-hide.svg"}
      width={20}
      height={20}
      alt={"hide "}
    />
  )
  const handleLogin=()=>{

  }
  return (
    <Container>
      <Form className="flex flex-col items-center align-middle min-h-screen justify-center">
        <div className=" bg-slate-400  flex flex-col items-center align-middle rounded-lg justify-center w-96">
          <Form.Label className="font-bold text-start text-l my-2">
            Email
          </Form.Label>
          <Form.Group className=" relative min-h-[3.5em]">
            <Form.Control
              className="p-1 border border-gray-500 rounded-lg font-serif"
              name="email"
              type="text"
              placeholder="Enter Your Email"
              value={credentials.email}
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Label className="font-bold text-start text-l ">
            Password
          </Form.Label>
          <Form.Group className="relative min-h-[3.5em]">
            <span className="inline-block">
              <Form.Control
                name="password"
                className=" p-1 border border-gray-500 rounded-lg"
                type={visibility ? "text" : !visibility ? "password" : "text"}
                placeholder="********"
                value={credentials.password}
                onChange={handleOnChange}
              />
              <span
                className="mx-2 absolute top-2"
                onClick={() => {
                  if (setVisibility) {
                    setVisibility(!visibility)
                  }
                }}
              >
                {icon}
              </span>
            </span>
          </Form.Group>
          <Button
            type="submit"
            onClick={handleOnChange}
            className="bg-white p-1 px-4 font-bold my-9 rounded-lg"
          >
            Login
          </Button>
        </div>
      </Form>
    </Container>
  )
}

export default styled(LoginPage)`
  .password-toggle-icon {
    position: absolute;
    width: 10px;
    scale: 1.5;
    cursor: pointer;
  }
  #form-group {
    position: relative !important;
    min-height: 3.5em !important;
  }
  select:-webkit-autofill {
    caret-color: #fff;
    color: #fff;
    background: white;
    -webkit-background-clip: text;
    box-shadow: 0 0 0 50px #fff inset;
  }
`
