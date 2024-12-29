import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 h-screen">
      <Button variant="destructive">
        <Link href="/auth" className="font-bold active:scale-105">
          Auth Page
        </Link>
      </Button>
      <Button variant="secondary">
        <Link href="/dashboard" className="font-bold active:scale-105">
          Dashboard
        </Link>
      </Button>
      <Button variant="outline">
        <Link href="/profile" className="font-bold active:scale-105">
          Profile
        </Link>
      </Button>
    </div>
  );
}
