import { Prisma } from "@prisma/client";
import prisma from "../db";

export default async function PostsPage() {
  const data = await prisma.user.findMany()

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}