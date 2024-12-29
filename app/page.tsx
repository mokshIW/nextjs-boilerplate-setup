import Price from "@/components/subscription/Price";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-start space-y-8 min-h-[90vh] px-4 lg:px-0">
      <div className="flex flex-col items-center justify-center space-y-2 lg:space-y-4">
        <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">Links</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button variant="danger">
            <Link href="/auth" className="font-bold active:scale-105">
              Auth Page
            </Link>
          </Button>
          <Button variant="warning">
            <Link href="/dashboard" className="font-bold active:scale-105">
              Dashboard
            </Link>
          </Button>
          <Button variant="gradient">
            <Link href="/profile" className="font-bold active:scale-105">
              Profile
            </Link>
          </Button>
          <Button variant="success">
            <Link href="/subscription" className="font-bold active:scale-105">
              Subscription
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-2 lg:space-y-4">
        <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">Price</h1>
        <Price />
      </div>
    </div>
  );
}
