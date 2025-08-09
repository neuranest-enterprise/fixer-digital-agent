import { NextRequest, NextResponse } from 'next/server';
import { multiAI } from '@/lib/ai-integrations';

export async function POST(request: NextRequest) {
  try {
    const { websiteUrl } = await request.json();

    if (!websiteUrl) {
      return NextResponse.json({ error: 'Website URL is required' }, { status: 400 });
    }

    console.log(`🔬 Starting quantum analysis for: ${websiteUrl}`);

    // Simulate fetching website content
    const websiteContent = `Website analysis for ${websiteUrl}`;

    // Perform AI analysis on the server side where environment variables are available
    const analysisResult = await multiAI.performQuantumAnalysis(websiteUrl, websiteContent);

    return NextResponse.json({
      success: true,
      url: websiteUrl,
      analysis: analysisResult,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Scan API error:', error);
    
    return NextResponse.json({
      error: 'Analysis failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Quantum Deep Scan API is ready',
    endpoints: {
      scan: 'POST /api/scan',
      features: ['Multi-AI Analysis', 'Quantum Deep Scan', 'Revenue Projections']
    }
  });
}