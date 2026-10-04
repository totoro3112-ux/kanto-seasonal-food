import { redirect } from "next/navigation";
import { getCurrentMonth } from "@/lib/season";

export default function HomePage() {
  redirect(`/month/${getCurrentMonth()}`);
}
