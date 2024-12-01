import client from "@/lib/contentful";
import Image  from 'next/image'
export const metadata = {
  title: 'Authors',
  description: 'List of authors from Contentful.',
};

  const CONTENTFUL_SPACE_ID = 'agwa05lvimrq';
const CONTENTFUL_ACCESS_TOKEN = '3dRoCc2s_dyuFjEokTjWVZCysWq_zSB1LSrSQMTBMZY';
const CONTENTFUL_ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}`;

const query = `
  query {
    authorCollection {
      items {
        name
        bio
        profilePicture {
          title
          url
        }
      }
    }
  }
`;

async function fetchPosts() {
  const response = await fetch(CONTENTFUL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  });

 

  const { data } = await response.json();
  console.log(data)
  return data.blogpostCollection.items;
}

export default async function AuthorsPage() {

const authors = fetchPosts()
console.log(authors)
  return (
    <div>
      <h1>Authors</h1>
       {/* <ul>
       {authors.map((author) => (
          <li key={author.name}>
            <h2>{author.name}</h2>
             {author.fields.profilePicture && (
              <Image
                src={`https:${author.fields.profilePicture.fields.file.url}`}
                alt={author.fields.name}
                width={200}
                height={200}
              />
           )}
            <p>{author.fields.bio}</p>
          </li>
        ))} 
      </ul> */}
    </div>
  );
}
