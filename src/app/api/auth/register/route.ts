import { PrismaClient, User } from '@prisma/client';
import { hash } from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    const { name, email, password }: User = await request.json();
    const passwordHashed = await hash(password, 12);
    const user = await prisma.user.create({
        data: { name, email, password: passwordHashed },
    });
    return NextResponse.json(user, { status: 201 });
}
