export async function api(url: string, options: RequestInit = {}) {
  console.log(options);
  const res = await fetch(url, {
    credentials: "omit",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });
  return res;
}
