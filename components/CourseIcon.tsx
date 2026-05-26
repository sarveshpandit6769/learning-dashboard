import {
  Code2,
  Rocket,
  Sparkles,
  FileCode,
  BookOpen,
} from "lucide-react";

const icons: any = {
  Code2,
  Rocket,
  Sparkles,
  FileCode,
  BookOpen,
};

export default function CourseIcon({ name }: { name: string }) {
  const Icon = icons[name] || BookOpen;

  return (
    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
      <Icon size={24} />
    </div>
  );
}