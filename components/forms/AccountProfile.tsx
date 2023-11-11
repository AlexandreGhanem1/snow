"use client"

import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { useForm } from 'react-hook-form';
import { zodResolver} from '@hookform/resolvers/zod';
import { UserValidation } from '@/lib/validations/user';
import * as z from 'zod';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { useUploadThing } from '@/lib/validations/uploadthing';

interface Props {
  user: {
    id: string,
    objectId: string,
    username: string,
    name: string,
    email: string,
    bio: string,
  };
  btnTitle: string;
}

const AccountProfile = ({  user, btnTitle }: Props) => {

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
  console.log(values)
}

  
return (
  <Form {...form}>
    <form
        className='flex flex-col justify-start gap-10'
        onSubmit={form.handleSubmit(onSubmit)}
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