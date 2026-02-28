import useSWR from 'swr'
import './App.css'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

function App() {
  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts?_limit=5', fetcher)

  return (
    <div className="app-shell">
      <header className="shell-header">
        <h1>Vite App Shell Demo</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
        </nav>
      </header>

      <main className="shell-content">
        <h2>Latest Posts</h2>
        <p className="description">
          This shell loaded instantly from the CDN. The data below is fetched client-side.
        </p>

        {error && <div className="error">Failed to load data</div>}
        {isLoading && <div className="loading-skeleton">Loading content...</div>}
        
        {data && (
          <div className="posts-grid">
            {data.map((post: any) => (
              <article key={post.id} className="post-card">
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </article>
            ))}
          </div>
        )}
      </main>
      
      <footer className="shell-footer">
        <p>CDN Shelling Architecture Demo</p>
      </footer>
    </div>
  )
}

export default App
