import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Button>
        <a href="/auth" className="font-bold active:scale-105">
          Auth Page
        </a>
      </Button>
    </div>
  );
}
