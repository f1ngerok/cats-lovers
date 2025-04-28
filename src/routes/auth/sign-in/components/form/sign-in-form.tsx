import { Form } from 'react-hook-form';

import {
  Button,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  Label,
  PasswordInput,
} from '@/components/ui';
import { IDS } from '@/utils/constants';

import { useSignInForm } from './hooks/useSignInForm';

export const SignInForm = () => {
  const { form, functions, state } = useSignInForm();

  return (
    <Form {...form}>
      <form className='space-y-4' onSubmit={functions.onSubmit}>
        <FormField
          render={({ field }) => (
            <FormItem id={IDS.INPUT.EMAIL}>
              <Label htmlFor='email'>Email</Label>
              <FormControl>
                <Input
                  disabled={state.loading}
                  autoCapitalize='none'
                  autoComplete='email'
                  autoCorrect='off'
                  placeholder='johndoe@example.com'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          name='email'
          control={form.control}
        />
        <FormField
          render={({ field }) => (
            <FormItem id={IDS.INPUT.PASSWORD}>
              <Label htmlFor='password'>Password</Label>
              <FormControl>
                <PasswordInput
                  disabled={state.loading}
                  autoCapitalize='none'
                  autoComplete='current-password'
                  autoCorrect='off'
                  placeholder='********'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          name='password'
          control={form.control}
        />

        <Button
          className='w-full'
          disabled={state.loading}
          id={IDS.BUTTON.SIGN_IN}
          type='submit'
        >
          Login
        </Button>
      </form>
    </Form>
  );
};
