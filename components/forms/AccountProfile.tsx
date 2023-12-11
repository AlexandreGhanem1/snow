"use client"

import * as z from "zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { UserValidation } from "@/lib/validations/user";
import { updateUser } from "@/lib/actions/user.actions"


interface Props {
  user: {
    id: string,
    username: string,
    name: string,
    email: string,
    bio: string,
    onboarded: boolean,
  };
  btnTitle: string;
}

const AccountProfile = ({  user, btnTitle }: Props) => {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);


    const form = useForm  ({
      resolver: zodResolver(UserValidation),
      defaultValues: {
        name: user?.name || '',
        username: user?.username || '',
        email: user?.email || '',
        bio: user?.bio || ''
      }
    })
  


const onSubmit = async (values: z.infer<typeof UserValidation>) => {

  await updateUser({
    userId: user.id,
    username: values.username,
    name: values.name,
    path: pathname || '', // Provide a default value
    email: values.email,
    bio: values.bio,
    onboarded: true,
  });

    if (pathname === "/profile/edit") {
      router.back();
    } else {
      router.push("/");}

};


  
return (
  <Form {...form}>
    <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col justify-start gap-10'
    >
      <FormField
        control={form.control}
        name='name'
        render={({ field }) => (
          <FormItem className='flex w-full flex-col gap-3'>
            <FormLabel className='text-base-semibold text-light-2'>
              Name
            </FormLabel>
            <FormControl>
              <Input
                type='text'
                className='account-form_input no-focus'
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
          )}
      />

      <FormField
        control={form.control}
        name='username'
         render={({ field }) => (
           <FormItem className='flex w-full flex-col gap-3'>
             <FormLabel className='text-base-semibold text-light-2'>
                Username
              </FormLabel>
              <FormControl>
                <Input
                  type='text'
                  className='account-form_input no-focus'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem className='flex w-full flex-col gap-3'>
              <FormLabel className='text-base-semibold text-light-2'>
                Email
              </FormLabel>
              <FormControl>
                <Input
                  type='email'
                  className='account-form_input no-focus'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />

        <FormField
          control={form.control}
          name='bio'
          render={({ field }) => (
            <FormItem className='flex w-full flex-col gap-3'>
              <FormLabel className='text-base-semibold text-light-2'>
                Bio
              </FormLabel>
              <FormControl>
                <Textarea
                  rows={10}
                  className='account-form_input no-focus'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='submit' className='bg-primary-500'>
          {btnTitle}
        </Button>
      </form>
    </Form>
  )

}

export default AccountProfile 