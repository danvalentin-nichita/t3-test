import Link from "next/link";


const mockUrls = [
  "https://xvwfyga4x0.ufs.sh/f/fSXVckr1wnt47dtZ7vV2FlBOt8QVqI4iP9gRoDJsW1ypGnfm",
  "https://xvwfyga4x0.ufs.sh/f/fSXVckr1wnt4nvd2KSwithZGay5ew9DqU7Xk4lfbBOJFPTzd",
  "https://xvwfyga4x0.ufs.sh/f/fSXVckr1wnt4LVaa6l4cHywVUMd4bD6vkuRZgKmelTzs1Xp3",
  "https://xvwfyga4x0.ufs.sh/f/fSXVckr1wnt4YF9JzvQBkpNDvuLyhO95WEPXgGro4JisCnw8",
]

const mockImages = mockUrls.map((url, index) => ({
  id: index+1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
              <img src={image.url} alt={`Image ${image.id}`} className="w-full h-auto" />
          </div>))}
          </div>
      Hello (gallery in progress)
    </main>
  );
}
