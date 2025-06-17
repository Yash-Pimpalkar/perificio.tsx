import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";
interface Params {
  params: { id: string };
}

// DELETE user by ID
export async function DELETE(req: Request, { params }: Params) {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }
  try {
    const user = await prisma.user.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: "User deleted", user });
  } catch (error) {
    return NextResponse.json({ error: "User deletion failed" }, { status: 500 });
  }
}
export async function PATCH(req: Request, { params }: Params) {
    const session = await getServerSession(authOptions);
  
    if (!session || session.user?.role !== "ADMIN") {
      return NextResponse.json({ error: "Not authorized" }, { status: 401 });
    }
  
    try {
      const { role } = await req.json(); // expected: { role: "ADMIN" | "USER" }
  
      if (!["ADMIN", "USER"].includes(role)) {
        return NextResponse.json({ error: "Invalid role value" }, { status: 400 });
      }
  
      const updated = await prisma.user.update({
        where: { id: params.id }, // ✅ MongoDB ID
        data: { role },
      });
  
      return NextResponse.json({ message: "User role updated", updated });
    } catch (error) {
      return NextResponse.json({ error: "Update failed" }, { status: 500 });
    }
  }