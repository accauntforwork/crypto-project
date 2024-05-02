export async function fetchData(url) {
  const isLoading = true;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return { data, isLoading: false };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { error, isLoading: false };
  }
}
