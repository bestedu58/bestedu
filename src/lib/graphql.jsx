// const CONTENTFUL_SPACE_ID = "agwa05lvimrq";
// const CONTENTFUL_ACCESS_TOKEN = "3dRoCc2s_dyuFjEokTjWVZCysWq_zSB1LSrSQMTBMZY";
// const CONTENTFUL_ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

export async function fetchPosts({query}) {
    const response = await fetch(process.env.CONTENTFUL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    });
  
    return await response.json()
  }
export  async function fetchPost({slug,query}) {
    const response = await fetch(process.env.CONTENTFUL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query, variables: {  slug } }),
    });
  
    const { data } = await response.json();
    console.log(data);
    return data.blogpostCollection.items[0];
  }