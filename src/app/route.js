import { NextResponse } from "next/server";
import jsonData from '@/data/example.json';

export async function GET(request) {
  return NextResponse.json(jsonData);
}