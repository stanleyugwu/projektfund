"use client";

import React from "react";
import { register } from "@/server/auth/register";
import { Button } from "@/components/ui/button";
import { Input, InputError } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormLoader, Loader } from "@/components/ui/loader";
import Link from "next/link";
import { HomeIcon } from "lucide-react";

// @ts-expect-error
import { experimental_useFormState as useFormState } from "react-dom";

export default function Register() {
  const [state, action] = useFormState(register, {
    status: false,
    message: "",
    errors: {},
  });

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
          <div className="space-y-0">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to create your account
            </p>
          </div>

          <div className="grid grid-cols-2 space-x-5">
            <div>
              <Label>First Name</Label>
              <Input name="firstname" placeholder="First Name" />
              <InputError message={state.errors?.firstname} />
            </div>

            <div>
              <Label>Last Name</Label>
              <Input name="lastname" placeholder="Last Name" />
              <InputError message={state.errors?.lastname} />
            </div>
          </div>

          <div>
            <Label>Email Address</Label>
            <Input name="email" type="email" placeholder="Email Address" />
            <InputError message={state.errors?.email} />
          </div>

          <div>
            <Label>Password</Label>
            <Input name="password" placeholder="Password" type="password" />
            <InputError message={state.errors?.password} />
          </div>

          <div>
            <Button type="submit" className="w-full">
              <FormLoader>
                <Loader />
              </FormLoader>
              Create Account
            </Button>
          </div>

          <div>
            <p className="text-sm font-semibold text-muted-foreground">
              Already have an account?{" "}
              <Link className="text-primary" href={"/login"}>
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
