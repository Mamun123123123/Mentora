export const fetchCourses = async (searchTerm = "") => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/courses?search=${searchTerm}`
  );

  const data = await res.json();

  return data || [];
};

export const fetchFeaturedCourses = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/featured`
  );

  const data = await res.json();

  return data || [];
};

export const fetchCourseById = async (id) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/courses/${id}`
  );

  if (!res.ok) {
    return null;
  }

  const data = await res.json();

  return data;
};