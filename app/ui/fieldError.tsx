import { FormState } from "../lib/formValidation";

type FieldErrorProps = {
  formState: FormState;
  name: string;
};

const FieldError = ({ formState, name }: FieldErrorProps) => {

  return (
    <span className="text-xs text-red-400">
      {name && formState.fieldErrors[name]?.[0]}
    </span>
  );
};

export { FieldError };