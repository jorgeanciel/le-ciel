export const useLoader = async ({ request }) => {
  const url = new URL(request.url);
  const search = url;

  return { search };
};
