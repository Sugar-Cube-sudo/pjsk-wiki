import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()
const JWT_SECRET = process.env.JWT_SECRET || 'your_secure_secret_here'

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json()

    // 验证必填字段
    if (!username || !password) {
      return NextResponse.json(
        { error: "缺少必要字段" },
        { status: 400 }
      )
    }

    const user = await prisma.user.findUnique({
      where: { username }
    })

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return NextResponse.json(
        { error: "用户名或密码错误" },
        { status: 401 }
      )
    }

    const token = jwt.sign(
      { userId: user.id, username: user.username },
      JWT_SECRET,
      { expiresIn: '1h' }
    )

    // 创建响应对象并设置Cookie
    const response = NextResponse.json(
      { message: '登录成功' },
      { status: 200 }
    )
    
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 3600,
      path: '/',
    })

    return response
  } catch (error) {
    console.error('登录错误:', error)
    return NextResponse.json(
      { error: "服务器错误" },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}