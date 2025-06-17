
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import SignInBtns from "@/components/SignInBtn/SignInBtns";

export default async function SignIn() {
  const session = await getServerSession(authOptions);
  if (session ) {
    redirect("/");
  }

  return <SignInBtns />;
}
