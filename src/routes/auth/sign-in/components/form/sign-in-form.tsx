import {
  Button,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Form,
  Input,
  Label,
  PasswordInput,
} from '@/components/ui';
import { IDS } from '@/utils/constants';

import { useSignInForm } from './hooks/useSignInForm';

export const SignInForm = () => {
  const { form, functions, state } = useSignInForm();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    functions.onSubmit();
  };

  return (
    <Form {...form}>
      <form className='space-y-4' onSubmit={handleSubmit}>
        <FormField
          render={({ field }) => (
            <FormItem>
              <Label htmlFor='username'>Username</Label>
              <FormControl>
                <Input
                  disabled={state.loading}
                  id={IDS.INPUT.USERNAME}
                  autoCapitalize='none'
                  autoComplete='username'
                  autoCorrect='off'
                  placeholder='superuser'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          name='username'
          control={form.control}
        />
        <FormField
          render={({ field }) => (
            <FormItem>
              <Label htmlFor='password'>Password</Label>
              <FormControl>
                <PasswordInput
                  disabled={state.loading}
                  id={IDS.INPUT.PASSWORD}
                  autoCapitalize='none'
                  autoComplete='current-password'
                  autoCorrect='off'
                  placeholder='**********'
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
          className='float-end'
          disabled={state.loading}
          id={IDS.BUTTON.SIGN_IN}
          type='submit'
          variant='default'
        >
          Log In
        </Button>
      </form>
    </Form>
  );
};
