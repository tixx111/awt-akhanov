import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type CourseCardProps = {
  id: string;
  title: string;
  description: string;
  credits: number;
  likes: number;
};

export default function CourseCard({ id, title, description, credits, likes }: CourseCardProps) {
  return (
    <Link href={`/courses/${id}`}>
      <Card className="h-full transition hover:border-blue-300 hover:shadow-md">
        <CardHeader>
          <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <p className="leading-7 text-slate-600">{description}</p>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-indigo-700">{credits} credits</span>
            <Button variant="ghost" size="sm">❤ {likes}</Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
