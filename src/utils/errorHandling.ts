type Error = {
  message: string;
  response: {
    status: number;
  };
  request: {
    response: string | string[];
  };
};

type ErrorHandlingData = {
  type: 'ErrorConnect' | 'GenericError';
  message: string | string[];
};

export default function errorHandling({ message, response, request }: Error): ErrorHandlingData {
  const httpStatusServerErrors = [500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511];

  if (message === 'Network Error' || httpStatusServerErrors.includes(response?.status)) {
    return {
      type: 'ErrorConnect',
      message: '',
    };
  }

  return {
    type: 'GenericError',
    message: request?.response,
  };
}
