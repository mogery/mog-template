import { PrismaClient } from "@prisma/client";

export default async function Home() {
  const prisma = new PrismaClient();
  return (
    <main className="p-4">
      <h1 className="text-center text-2xl font-bold">mog-template</h1>
      <p>
        {await prisma.post.count()} posts, {await prisma.user.count()} users
      </p>
    </main>
  );
}
