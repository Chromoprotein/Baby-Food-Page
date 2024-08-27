'use client';

import { authenticate } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import { useFormStatus } from 'react-dom';
import WideButton from '../wideButton';
import Input from '../input';

function Submit() {
  const { pending } = useFormStatus();
  return <WideButton name={pending ? "Logging in..." : "Log in"} type="submit" isDisabled={pending} />
}

export default function LoginForm() {

  const [errorMessage, formAction] = useFormState(
      authenticate,
      undefined,
  );

  return (
    <div className="w-full mx-auto my-10 px-10 flex flex-col justify-center items-center mt-20">
      <form action={formAction} className="w-full shadow mx-auto my-20 px-10 flex flex-col justify-center items-center border-t-2 border-lime-600 p-10">
        <h2 className="text-3xl text-lime-600 text-center pb-10">Log in</h2>
        <Input name="email" placeholder="Input email"/>
        <Input name="password" placeholder="Input password" inputType="password"/>
        <Submit />

        <div>
          {errorMessage && (
            <p className="text-sm text-red-500">{errorMessage}</p>
          )}
        </div>

      </form>
    </div>
  );
}