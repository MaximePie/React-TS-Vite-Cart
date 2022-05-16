import { errors } from './data';

type ErrorProps = {
  code: keyof typeof errors,
}

export default ErrorProps;
