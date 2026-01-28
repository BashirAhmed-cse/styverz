import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { emailService } from '@/lib/email-service';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
 
    
    const data = await request.json();

    
    // Validate required fields
    if (!data.name || !data.phone || !data.email) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Name, phone, and email are required' 
        },
        { status: 400 }
      );
    }
    
    // Add timestamp
    const entry = {
      ...data,
      timestamp: new Date().toISOString(),
      id: Date.now().toString(),
    };
    
    // Step 1: Save to file
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    const filePath = path.join(dataDir, 'submissions.json');
    
    let existingData = [];
    try {
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        existingData = JSON.parse(fileContent);
      }
    } catch (error) {
      
    }
    
    existingData.push(entry);
    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
    

    
    // Step 2: Send emails (try-catch to not fail form submission if email fails)
    let emailResult = null;
    try {
      emailResult = await emailService.sendLeadEmail(data);

    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't throw error - still return success for form submission
      // Just log the email error
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Data saved and email sent successfully',
      data: entry,
      emailSent: !!emailResult,
      emailResult,
    }, { status: 200 });
    
  } catch (error) {
    console.error('Error in save-data API:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to process request',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Optional: Add GET method
export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'submissions.json');
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ 
        success: true, 
        data: [],
        message: 'No data yet'
      });
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(fileContent);
    
    return NextResponse.json({ 
      success: true, 
      data: data,
      count: data.length
    });
    
  } catch (error) {
    console.error('Error reading data:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to read data' 
      },
      { status: 500 }
    );
  }
}