import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const { username, email, password } = await request.json()

    // 验证必填字段
    if (!username || !email || !password) {
      return NextResponse.json(
        { error: "缺少必要字段" },
        { status: 400 }
      )
    }

    const existingUser = await prisma.user.findFirst({
      where: { OR: [{ username }, { email }] }
    })

    if (existingUser) {
      return NextResponse.json(
        { error: "用户已存在" },
        { status: 400 }
      )
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    
    await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword
      }
    })

    return NextResponse.json(
      { message: '注册成功' },
      { status: 201 }
    )
  } catch (error) {
    console.error('注册错误:', error)
    return NextResponse.json(
      { error: "服务器错误" },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}