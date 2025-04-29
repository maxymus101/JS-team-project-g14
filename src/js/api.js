export async function fetchReviews() {
  const response = await fetch('https://portfolio-js.b.goit.study/api/reviews');
  if (!response.ok) {
    throw new Error('Failed to fetch reviews');
  }
  return await response.json();
}
