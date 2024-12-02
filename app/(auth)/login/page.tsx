"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input, InputError } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { login } from "@/server/auth/login";
import { FormLoader, Loader } from "@/components/ui/loader";
import { HomeIcon } from "lucide-react";

// @ts-expect-error
import { experimental_useFormState as useFormState } from "react-dom";
import { EmailVerificationError } from "./(partials)/email-verification";

export default function Login() {
  const [state, action] = useFormState(login, {
    status: false,
    message: "",
    errors: {},
    error: "",
  });

  // const {refresh} = useAuth()

  // // useEffect(() => {
  // // 	if(state.status){
  // // 		if(state.user) {
  // // 			refresh(state.user)
  // // 		}
  // // 	}
  // // }, [state])

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="bg-primary flex flex-col items-center h-16 md:h-auto md:w-1/2 text-white md:p-10">
        <Link href={'/'} className="flex-[0.2] w-full p-4 md:p-0">
          <HomeIcon />
        </Link>
        <div className="md:block hidden align-baseline space-y-2 flex-[0.8]">
          <h1 className="text-6xl font-bold mb-12 italic font-serif">HausProjekt</h1>
          <h2 className="text-4xl font-semibold">
            Kick start your property investment journey today!
          </h2>
          <p className="font-light">
            Jumpstart your property investment journey today and unlock a world
            of opportunities! Whether you're a first-time investor or looking to
            expand your portfolio, our comprehensive resources and expert
            guidance will set you on the path to success. Start making smart,
            profitable investments now!
          </p>
        </div>
      </div>

      <div className="md:w-1/2 flex items-center justify-center md:h-screen flex-1 p-5 md:p-10">
        <form action={action} className="md:w-3/5 w-full space-y-5">
          {state.error ? <EmailVerificationError message={state.error} /> : ""}
          <div className="space-y-0">
            <h1 className="text-2xl font-semibold tracking-tight">
              Log into your account
            </h1>
            <p className="text-sm text-muted-foreground">
              Please provide your details below to proceed to your account
            </p>
          </div>

          <div>
            <Label>Email Address</Label>
            <Input name="email" type="email" placeholder="Email Address" />
            <InputError message={state.email} />
          </div>

          <div>
            <Label>Password</Label>
            <Input name="password" placeholder="Password" type="password" />
            <InputError message={state.password} />
          </div>

          <div>
            <Button className="w-full">
              <FormLoader>
                <Loader />
              </FormLoader>{" "}
              Login
            </Button>
          </div>

          <div>
            <p className="text-sm font-semibold text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link className="text-primary" href={"/register"}>
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
