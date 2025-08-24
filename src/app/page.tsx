import { db } from '~/server/db';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const images = await db.query.images.findMany();
  console.log(images);

  return (
    <main className="">
      <div className="flex flex-wrap">
        {[...images, ...images, ...images].map((image) => (
          <div key={image.id} className="w-48">
              <img src={image.url} alt={`Image ${image.id}`} className="w-full h-auto" />
              <div>{image.name}</div>
          </div>))}
          </div>
      Hello (gallery in progress)
    </main>
  );
}
