export default async function PostsPage() {
  // const data = await fetch('http:localhost:3000/api/users')

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {/* {data.json().map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))} */}
      </ul>
    </div>
  )
}
