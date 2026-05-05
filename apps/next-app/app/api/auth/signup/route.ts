import { NextRequest, NextResponse } from "next/server";
import { userSchema } from "@repo/common";
import { prismaClient } from "@repo/db/client";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
  try {
    const { email, password, name } = await req.json();

    const parsedData = userSchema.safeParse({ email, password, name });

    if (!parsedData.success) {
      return NextResponse.json(
        { error: "Invalid input data", details: parsedData.error },
        { status: 400 },
      );
    }

    const existingUser = await prismaClient.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 400 },
      );
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await prismaClient.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });
    return NextResponse.json({ user: newUser }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred while creating the user" },
      { status: 500 },
    );
  }
}
