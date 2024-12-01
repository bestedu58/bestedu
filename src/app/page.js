// import client from "@/lib/contentful";
// import Image from "next/image";
// const a = "a";
// export async function fet() {
//   const res = await client.getEntries({ content_type: "author" });
//   console.log("res", res.items[0].fields);
//   return res.items.map((item) => ({
//     id: item.sys.id,
//     name: item.fields.name,
//     bio: item.fields.bio,
//     image: item.fields.profilePicture.fields.title,
//     imageurl: item.fields.profilePicture.fields.file.url,
//     imagealt: item.fields.profilePicture.fields.file.fileName,
//     imageweight: item.fields.profilePicture.fields.file.details.image.width,
//     imageheight: item.fields.profilePicture.fields.file.details.image.height,
//   }));
// }
// export default async function Home() {
//   const data = await fet();
//   console.log("data:", data);
//   return (
//     <>
//       <div className="prose dark:prose-invert">
//         {data.map((data) => (
//           <div key={data.id}>
//             <h1>{data.name}</h1>
//             <h4>{data.bio}</h4>
//             <Image
//               priority
//               src={`https://${data.imageurl}`}
//               alt={data.imagealt}
//               width={data.imageweight}
//               height={data.imageheight}
//             />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }
import React from 'react'

const page = () => {
  return (
    <div>
      page</div>
  )
}

export default page