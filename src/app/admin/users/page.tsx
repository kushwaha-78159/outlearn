import { InfoPage } from "@/components/content-page";
export default function Page() {
 return <InfoPage title="Users" description="User management requires authentication and database.">
  <div className="card p-6"><p className="text-sm leading-7 text-gray-300">This section is a placeholder. It requires a database-backed implementation and appropriate server-side permissions before it can manage real records.</p><a href="/admin" className="mt-4 inline-block text-sm text-violet-200">← Admin home</a></div>
 </InfoPage>;
}
