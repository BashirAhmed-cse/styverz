import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Add timestamp
    const entry = {
      ...data,
      timestamp: new Date().toISOString(),
    };
    
    // Define file path
    const filePath = path.join(process.cwd(), 'public', 'data.json');
    
    // Read existing data
    let existingData = [];
    try {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      existingData = JSON.parse(fileContent);
    } catch (error) {
      // File doesn't exist, start with empty array
    }
    
    // Add new entry
    existingData.push(entry);
    
    // Write to file
    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
    
    return NextResponse.json({ 
      success: true, 
      message: 'Data saved successfully' 
    });
  } catch (error) {
    console.error('Error saving data:', error);
    return NextResponse.json(
      { error: 'Failed to save data' },
      { status: 500 }
    );
  }
}