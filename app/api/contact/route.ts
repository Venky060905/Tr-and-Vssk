import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
export async function POST(req: Request) {
  try {
    const data = await req.json()
    const { name, email, phone, message } = data
    const row = `"${name}","${email}","${phone}","${message}"\n`
    const filePath = path.join(process.cwd(), 'messages.csv')
    fs.appendFileSync(filePath, row, 'utf8')
    return NextResponse.json({ message: 'Message saved to CSV!' })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ message: 'Error saving message', error: err }, { status: 500 })
  }
}