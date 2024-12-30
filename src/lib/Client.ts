const url = process.env.CONTENTFUL_GRAPHQL_URL;
export async function Client(query: any, variables = {}) {
  const token = process.env.CONTENTFUL_ACCESS_TOKEN;

  if (!url || !token) {
    throw new Error(
      "Environment variables for URL or Access Token are not set.",
    );
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(
        `Network error: ${response.status} - ${response.statusText}\n${errorBody}`,
      );
    }

    const data = await response.json();

    if (data.errors) {
      const errorMessage = data.errors
        .map((error: { message: any }) => error.message)
        .join(", ");
      throw new Error(`GraphQL error: ${errorMessage}`);
    }

    return data.data;
  } catch (error) {
    console.error("Error during fetchGraphQL:", error);
    throw error;
  }
}
