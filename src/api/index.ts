type TRequest = {
  url: string;
  init?: RequestInit;
};

export class Fetcher {
  public static async request<T>({url, init}: TRequest) {
    try {
      const response = await fetch(`${process.env.REACT_URL_API}${url}`, init);
      if (response.ok) {
        return response.json() as Promise<T>;
      }
      throw new Error('Network response error.');
    } catch (e) {
      const message = e instanceof Error ? e.message : '500 server error';
      throw new Error(`${message}`);
    }
  }
}
