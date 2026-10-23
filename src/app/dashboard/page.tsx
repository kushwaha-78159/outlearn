import Link from "next/link";
import { InfoPage } from "@/components/content-page";
export default function Page() {
 return <InfoPage title="Your learning dashboard" description="A starting point for your personal learning space.">
  <div className="grid gap-4 sm:grid-cols-2"><Link href="/courses" className="card p-6"><h2 className="font-semibold">Explore courses</h2><p className="mt-2 text-sm text-gray-400">Choose a learning path.</p></Link><Link href="/bookmarks" className="card p-6"><h2 className="font-semibold">Saved resources</h2><p className="mt-2 text-sm text-gray-400">Open your bookmarks page.</p></Link></div><p className="mt-5 text-xs text-amber-200">Progress and saved resources are not persisted until authentication and the database are connected.</p>
 </InfoPage>;
}
