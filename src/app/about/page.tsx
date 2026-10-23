import { InfoPage } from "@/components/content-page";
export const metadata = { title: "About Outlearn" };
export default function Page() {
  return <InfoPage title="About Outlearn" description="Outlearn is a learning-focused platform designed to make ideas across technology, science, finance and more approachable."><div className="card p-6 text-sm leading-7 text-gray-300">Our goal is to encourage curiosity through clear explanations, structured learning resources and practice. Content is educational and should not replace qualified professional advice.</div></InfoPage>;
}
