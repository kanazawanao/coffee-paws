import Axios from 'axios';

export default class ApiError extends Error {
  code?: number;
  constructor(message?: string, code?: number) {
    super(message);
    this.code = code;
  }
}

export function generateApiError(e: unknown) {
  let errorMessage = 'エラーが発生しました。';
  let code = undefined;
  if (Axios.isAxiosError(e) && e.response) {
    code = e.response.status;
    if (code === 500) {
      errorMessage = '問題が発生しました。';
    }
  }

  return new ApiError(errorMessage, code);
}
