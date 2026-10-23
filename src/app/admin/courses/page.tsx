import Link from "next/link";
import { courses } from "@/lib/content";

export default function AdminCoursesPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-5 py-12">
      <Link href="/admin" className="text-sm text-violet-300">
        ← Back to Admin
      </Link>
      <h1 className="mt-6 text-3xl font-bold">Manage Courses</h1>
      <p className="mt-2 text-gray-400">
        Current starter content. Database editing will be connected in the next implementation.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {courses.map((item) => (
          <article key={item.slug} className="card p-5">
            <p className="text-xs text-violet-200">
              {item.category} · {item.slug}
            </p>
            <h2 className="mt-2 font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm text-gray-400">
              {item.description}
            </p>
            <Link href="/courses" className="mt-4 inline-block text-sm text-violet-200">
              View public section →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
