import TabBar from "@/components/tab-bar";

export default function tabLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <TabBar />
    </div>
  );
}
