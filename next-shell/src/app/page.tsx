'use client';

import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts?_limit=5', fetcher);

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Latest Posts (Client Fetched)</h2>
      <p className="mb-6 text-gray-400">
        This content is fetched entirely on the client side after the initial static shell loads.
        Build output is static HTML.
      </p>

      {error && <div className="text-red-400 p-4 bg-red-900/20 rounded">Failed to load data</div>}

      {isLoading && (
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-32 bg-gray-800 rounded border border-gray-700"></div>
          ))}
        </div>
      )}

      {data && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data.map((post: any) => (
            <article key={post.id} className="bg-gray-800 p-6 rounded border border-gray-700 hover:border-blue-500 transition-colors">
              <h3 className="text-lg font-semibold mb-2 line-clamp-2">{post.title}</h3>
              <p className="text-gray-400 text-sm line-clamp-3">{post.body}</p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
