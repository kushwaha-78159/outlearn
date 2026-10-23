import { InfoPage } from "@/components/content-page";
export const metadata = { title: "Terms of use" };
export default function Page() {
  return <InfoPage title="Terms of use" description="These starter terms describe general expectations for using educational resources."><div className="card p-6 text-sm leading-7 text-gray-300">Content is provided for general education and may contain errors. Do not rely on educational material as individual medical, legal or financial advice. Final terms should be reviewed for your jurisdiction.</div></InfoPage>;
}
