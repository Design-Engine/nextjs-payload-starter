import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function SkipToButton({
  url = "#main",
  text = "content",
}: {
  url?: string;
  text?: string;
}) {
  return (
    <Button
      asChild
      className="fixed top-0 left-3 z-[1000] -translate-y-full transition-transform duration-300 ease-in-out focus:translate-y-0"
    >
      <Link href={url}>Skip to {text}</Link>
    </Button>
  );
}
