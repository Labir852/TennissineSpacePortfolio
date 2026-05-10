import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function GET() {
  try {
    await dbConnect();

    // 1. Check if admin already exists
    const existingAdmin = await User.findOne({ role: "admin" });

    if (existingAdmin) {
      return NextResponse.json(
        { message: "Seed skipped: Admin user already exists." },
        { status: 200 }
      );
    }

    // 2. Create Initial Admin
    const hashedPassword = await bcrypt.hash("admin123", 12);
    
    const admin = await User.create({
      name: "Super Admin",
      email: "admin@tennissine.space",
      password: hashedPassword,
      role: "admin",
    });

    // 3. Create Sample Editor
    const editorPassword = await bcrypt.hash("editor123", 12);
    await User.create({
      name: "Content Editor",
      email: "editor@tennissine.space",
      password: editorPassword,
      role: "editor",
    });

    return NextResponse.json(
      { 
        message: "Database seeded successfully!",
        data: {
          admin: admin.email,
          role: admin.role
        }
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Seed Error:", error);
    return NextResponse.json(
      { error: "Failed to seed database", details: error.message },
      { status: 500 }
    );
  }
}
