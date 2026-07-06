import { ClerkProvider } from "@clerk/nextjs";

export default function AppLayour({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <ClerkProvider>{children} </ClerkProvider>{" "}
    </main>
  );
}
