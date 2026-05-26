export default function Loading() {
  return (
    <main className="min-h-screen bg-black p-6 text-white">
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        <div className="hidden min-h-[600px] animate-pulse rounded-2xl bg-zinc-900 lg:block" />

        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-3">
          <div className="h-32 animate-pulse rounded-2xl bg-zinc-900 md:col-span-2" />
          <div className="h-48 animate-pulse rounded-2xl bg-zinc-900" />
          <div className="h-48 animate-pulse rounded-2xl bg-zinc-900" />
          <div className="h-48 animate-pulse rounded-2xl bg-zinc-900" />
          <div className="h-48 animate-pulse rounded-2xl bg-zinc-900" />
          <div className="h-56 animate-pulse rounded-2xl bg-zinc-900 md:col-span-2" />
        </section>
      </section>
    </main>
  );
}