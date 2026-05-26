import BentoCard from "../components/BentoCard";
import ProgressBar from "../components/ProgressBar";
import CourseIcon from "../components/CourseIcon";
import Sidebar from "../components/Sidebar";
import DatabaseToast from "../components/DatabaseToast";
import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", {
      ascending: true,
    });

  if (error) {
    return (
      <main className="min-h-screen overflow-hidden bg-black p-4 pb-28 text-white md:p-6 lg:pb-6">
        <section className="rounded-3xl border border-red-500/40 bg-red-500/10 p-8">
          <h1 className="text-2xl font-bold">
            Database Error
          </h1>

          <p className="mt-2 text-red-300">
            Could not load course data.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-black p-4 text-white md:p-6">
      <DatabaseToast />

      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.14),transparent_35%)]" />

      <section className="relative z-10 grid grid-cols-1 gap-6 lg:grid-cols-4">
        <Sidebar />

        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-3">
          <BentoCard className="md:col-span-2">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-purple-300">
              Student Dashboard
            </p>

            <h1 className="text-4xl font-bold md:text-6xl">
              Welcome back, Sarvesh 👋
            </h1>

            <p className="mt-4 max-w-2xl text-zinc-400">
              Track your courses, progress,
              streaks, and learning analytics.
            </p>

            <div className="mt-6 inline-flex rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-orange-300">
              🔥 12 Day Learning Streak
            </div>
          </BentoCard>

          {courses?.map((course) => (
            <BentoCard key={course.id}>
              <CourseIcon
                name={course.icon_name}
              />

              <p className="text-sm text-zinc-500">
                Active Course
              </p>

              <h2 className="mt-2 text-2xl font-semibold">
                {course.title}
              </h2>

              <div className="mt-5 flex items-center justify-between text-sm text-zinc-400">
                <span>Progress</span>

                <span>
                  {course.progress}%
                </span>
              </div>

              <ProgressBar
                value={course.progress}
              />
            </BentoCard>
          ))}

          <BentoCard className="md:col-span-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-purple-300">
                  Analytics
                </p>

                <h2 className="mt-2 text-2xl font-semibold">
                  Weekly Activity
                </h2>
              </div>

              <span className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
                +18% this week
              </span>
            </div>

            <div className="mt-8 flex h-44 items-end gap-3">
              {[80, 120, 60, 150, 90, 115, 70].map(
                (height, index) => (
                  <div
                    key={index}
                    style={{ height }}
                    className="w-full rounded-t-2xl bg-gradient-to-t from-purple-600 to-cyan-400 shadow-lg shadow-purple-500/20"
                  />
                )
              )}
            </div>
          </BentoCard>
        </section>
      </section>
    </main>
  );
}
