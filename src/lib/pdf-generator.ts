/**
 * 📄 WORLD-CLASS PDF REPORT GENERATOR
 * Creates professional, client-ready PDF reports with visual elements
 */

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export interface ReportData {
  websiteUrl: string;
  overallScore: number;
  technicalScore: number;
  performanceScore: number;
  seoScore: number;
  uxScore: number;
  insights: string[];
  recommendations: string[];
  competitorAnalysis: string[];
  revenueProjections: {
    current: number;
    projected: number;
    multiplier: number;
  };
  generatedDate: Date;
}

export class WorldClassPDFGenerator {
  private pdf: jsPDF;
  private currentY: number = 20;
  private pageHeight: number = 297; // A4 height in mm
  private margin: number = 20;

  constructor() {
    this.pdf = new jsPDF();
  }

  /**
   * 💎 GENERATE EXECUTIVE SUMMARY PDF
   */
  async generateExecutiveSummary(data: ReportData): Promise<Blob> {
    this.currentY = 20;

    // Cover Page
    this.addCoverPage(data);
    this.pdf.addPage();
    this.currentY = 20;

    // Executive Summary
    this.addExecutiveSummary(data);
    this.pdf.addPage();
    this.currentY = 20;

    // Detailed Analysis
    this.addDetailedAnalysis(data);
    this.pdf.addPage();
    this.currentY = 20;

    // Recommendations
    this.addRecommendations(data);
    this.pdf.addPage();
    this.currentY = 20;

    // Revenue Projections
    this.addRevenueProjections(data);

    return new Blob([this.pdf.output('blob')], { type: 'application/pdf' });
  }

  /**
   * 🎨 COVER PAGE
   */
  private addCoverPage(data: ReportData): void {
    // Background gradient (simulated with rectangles)
    this.pdf.setFillColor(30, 41, 59); // slate-800
    this.pdf.rect(0, 0, 210, 297, 'F');

    // Header section with gradient
    this.pdf.setFillColor(79, 70, 229); // indigo-600
    this.pdf.rect(0, 0, 210, 80, 'F');

    // Company Logo Area (placeholder)
    this.pdf.setFillColor(255, 255, 255, 0.1);
    this.pdf.rect(20, 20, 40, 20, 'F');

    // Main Title
    this.pdf.setTextColor(255, 255, 255);
    this.pdf.setFontSize(28);
    this.pdf.setFont('helvetica', 'bold');
    this.pdf.text('QUANTUM WEBSITE ANALYSIS', 105, 120, { align: 'center' });

    this.pdf.setFontSize(18);
    this.pdf.setFont('helvetica', 'normal');
    this.pdf.text('Executive Summary Report', 105, 135, { align: 'center' });

    // Website URL
    this.pdf.setFontSize(14);
    this.pdf.setTextColor(96, 165, 250); // blue-400
    this.pdf.text(`Website: ${data.websiteUrl}`, 105, 155, { align: 'center' });

    // Score Badge
    this.pdf.setFillColor(34, 197, 94); // green-500
    this.pdf.roundedRect(85, 170, 40, 25, 5, 5, 'F');
    this.pdf.setTextColor(255, 255, 255);
    this.pdf.setFontSize(20);
    this.pdf.setFont('helvetica', 'bold');
    this.pdf.text(`${data.overallScore}/100`, 105, 185, { align: 'center' });
    this.pdf.setFontSize(10);
    this.pdf.text('Overall Score', 105, 192, { align: 'center' });

    // Revenue Potential
    this.pdf.setTextColor(255, 255, 255);
    this.pdf.setFontSize(16);
    this.pdf.setFont('helvetica', 'bold');
    this.pdf.text('Revenue Multiplication Potential', 105, 215, { align: 'center' });
    
    this.pdf.setFontSize(24);
    this.pdf.setTextColor(251, 191, 36); // amber-400
    this.pdf.text(`${data.revenueProjections.multiplier.toFixed(1)}x`, 105, 230, { align: 'center' });

    // Date and Company Footer
    this.pdf.setTextColor(156, 163, 175); // gray-400
    this.pdf.setFontSize(10);
    this.pdf.setFont('helvetica', 'normal');
    this.pdf.text(`Generated: ${data.generatedDate.toLocaleDateString()}`, 20, 270);
    this.pdf.text('NeuraNest Enterprise - Fixer Digital Agent', 20, 280);
    this.pdf.text('🤖 Powered by Quantum AI Analysis', 20, 290);
  }

  /**
   * 📊 EXECUTIVE SUMMARY
   */
  private addExecutiveSummary(data: ReportData): void {
    // Page Header
    this.addPageHeader('Executive Summary');

    // Key Metrics Grid
    this.addSectionTitle('Key Performance Metrics');
    this.currentY += 10;

    const metrics = [
      { label: 'Technical Score', value: data.technicalScore, color: [99, 102, 241] },
      { label: 'Performance Score', value: data.performanceScore, color: [34, 197, 94] },
      { label: 'SEO Score', value: data.seoScore, color: [251, 191, 36] },
      { label: 'UX Score', value: data.uxScore, color: [236, 72, 153] }
    ];

    let xPos = 30;
    metrics.forEach((metric, index) => {
      // Score Box
      this.pdf.setFillColor(metric.color[0], metric.color[1], metric.color[2], 0.2);
      this.pdf.rect(xPos, this.currentY, 35, 25, 'F');
      
      // Score Number
      this.pdf.setTextColor(metric.color[0], metric.color[1], metric.color[2]);
      this.pdf.setFontSize(18);
      this.pdf.setFont('helvetica', 'bold');
      this.pdf.text(`${metric.value}`, xPos + 17.5, this.currentY + 12, { align: 'center' });
      
      // Label
      this.pdf.setTextColor(0, 0, 0);
      this.pdf.setFontSize(8);
      this.pdf.setFont('helvetica', 'normal');
      this.pdf.text(metric.label, xPos + 17.5, this.currentY + 20, { align: 'center' });
      
      xPos += 40;
    });

    this.currentY += 35;

    // Revenue Impact
    this.addSectionTitle('Revenue Impact Analysis');
    this.currentY += 5;

    this.pdf.setTextColor(0, 0, 0);
    this.pdf.setFontSize(12);
    this.pdf.setFont('helvetica', 'normal');
    
    const revenueText = [
      `Current Monthly Revenue: $${data.revenueProjections.current.toLocaleString()}`,
      `Projected Monthly Revenue: $${data.revenueProjections.projected.toLocaleString()}`,
      `Revenue Multiplication: ${data.revenueProjections.multiplier.toFixed(1)}x increase`,
      `Annual Impact: $${((data.revenueProjections.projected - data.revenueProjections.current) * 12).toLocaleString()}`
    ];

    revenueText.forEach(text => {
      this.pdf.text(text, 30, this.currentY);
      this.currentY += 8;
    });

    this.currentY += 10;

    // Top Insights
    this.addSectionTitle('Critical Insights');
    this.currentY += 5;

    data.insights.slice(0, 5).forEach((insight, index) => {
      this.pdf.setFontSize(10);
      this.pdf.setFont('helvetica', 'bold');
      this.pdf.text(`${index + 1}.`, 30, this.currentY);
      
      this.pdf.setFont('helvetica', 'normal');
      const wrappedText = this.wrapText(insight, 160);
      wrappedText.forEach((line, lineIndex) => {
        this.pdf.text(line, 35, this.currentY + (lineIndex * 5));
      });
      this.currentY += wrappedText.length * 5 + 3;
    });
  }

  /**
   * 🔍 DETAILED ANALYSIS
   */
  private addDetailedAnalysis(data: ReportData): void {
    this.addPageHeader('Detailed Analysis');

    // Technical Analysis
    this.addSectionTitle('Technical Performance');
    this.currentY += 5;

    const technicalInsights = data.insights.filter(insight => 
      insight.toLowerCase().includes('technical') || 
      insight.toLowerCase().includes('performance') ||
      insight.toLowerCase().includes('speed')
    ).slice(0, 3);

    technicalInsights.forEach((insight, index) => {
      this.addInsightBox(insight, [99, 102, 241]);
    });

    // SEO Analysis
    this.addSectionTitle('SEO & Content Analysis');
    this.currentY += 5;

    const seoInsights = data.insights.filter(insight => 
      insight.toLowerCase().includes('seo') || 
      insight.toLowerCase().includes('content') ||
      insight.toLowerCase().includes('keyword')
    ).slice(0, 3);

    seoInsights.forEach((insight, index) => {
      this.addInsightBox(insight, [251, 191, 36]);
    });

    // UX Analysis
    this.addSectionTitle('User Experience Analysis');
    this.currentY += 5;

    const uxInsights = data.insights.filter(insight => 
      insight.toLowerCase().includes('ux') || 
      insight.toLowerCase().includes('user') ||
      insight.toLowerCase().includes('conversion')
    ).slice(0, 3);

    uxInsights.forEach((insight, index) => {
      this.addInsightBox(insight, [236, 72, 153]);
    });
  }

  /**
   * 🎯 RECOMMENDATIONS
   */
  private addRecommendations(data: ReportData): void {
    this.addPageHeader('Strategic Recommendations');

    this.addSectionTitle('Priority Action Items');
    this.currentY += 5;

    data.recommendations.slice(0, 8).forEach((recommendation, index) => {
      // Priority indicator
      const priority = index < 3 ? 'HIGH' : index < 6 ? 'MEDIUM' : 'LOW';
      const priorityColor = index < 3 ? [239, 68, 68] : index < 6 ? [251, 191, 36] : [34, 197, 94];

      // Priority badge
      this.pdf.setFillColor(priorityColor[0], priorityColor[1], priorityColor[2]);
      this.pdf.rect(30, this.currentY - 3, 20, 8, 'F');
      this.pdf.setTextColor(255, 255, 255);
      this.pdf.setFontSize(8);
      this.pdf.setFont('helvetica', 'bold');
      this.pdf.text(priority, 40, this.currentY + 1, { align: 'center' });

      // Recommendation text
      this.pdf.setTextColor(0, 0, 0);
      this.pdf.setFontSize(10);
      this.pdf.setFont('helvetica', 'normal');
      const wrappedText = this.wrapText(recommendation, 140);
      wrappedText.forEach((line, lineIndex) => {
        this.pdf.text(line, 55, this.currentY + (lineIndex * 5));
      });
      
      this.currentY += wrappedText.length * 5 + 8;

      // Check if we need a new page
      if (this.currentY > this.pageHeight - 30) {
        this.pdf.addPage();
        this.currentY = 20;
      }
    });
  }

  /**
   * 💰 REVENUE PROJECTIONS
   */
  private addRevenueProjections(data: ReportData): void {
    this.addPageHeader('Revenue Projections & ROI Analysis');

    // Implementation Timeline
    this.addSectionTitle('90-Day Implementation Timeline');
    this.currentY += 10;

    const phases = [
      { name: 'Phase 1: Technical Optimization', days: '1-30', revenue: '$45K' },
      { name: 'Phase 2: Content & SEO', days: '31-60', revenue: '$125K' },
      { name: 'Phase 3: Conversion Optimization', days: '61-90', revenue: '$150K' }
    ];

    phases.forEach((phase, index) => {
      // Phase box
      this.pdf.setFillColor(79, 70, 229, 0.1);
      this.pdf.rect(30, this.currentY, 150, 20, 'F');
      
      this.pdf.setTextColor(79, 70, 229);
      this.pdf.setFontSize(12);
      this.pdf.setFont('helvetica', 'bold');
      this.pdf.text(phase.name, 35, this.currentY + 8);
      
      this.pdf.setFontSize(10);
      this.pdf.setFont('helvetica', 'normal');
      this.pdf.text(`Days ${phase.days}`, 35, this.currentY + 15);
      
      this.pdf.setTextColor(34, 197, 94);
      this.pdf.setFont('helvetica', 'bold');
      this.pdf.text(`+${phase.revenue}/month`, 150, this.currentY + 12);
      
      this.currentY += 25;
    });

    this.currentY += 10;

    // ROI Summary
    this.addSectionTitle('ROI Summary');
    this.currentY += 5;

    const totalInvestment = 150000;
    const annualReturn = (data.revenueProjections.projected - data.revenueProjections.current) * 12;
    const roi = (annualReturn / totalInvestment) * 100;

    const roiMetrics = [
      `Total Implementation Investment: $${totalInvestment.toLocaleString()}`,
      `Annual Revenue Increase: $${annualReturn.toLocaleString()}`,
      `Return on Investment: ${roi.toFixed(0)}%`,
      `Payback Period: ${((totalInvestment / (data.revenueProjections.projected - data.revenueProjections.current)) / 12 * 365).toFixed(0)} days`
    ];

    roiMetrics.forEach(metric => {
      this.pdf.setTextColor(0, 0, 0);
      this.pdf.setFontSize(12);
      this.pdf.setFont('helvetica', 'normal');
      this.pdf.text(metric, 30, this.currentY);
      this.currentY += 8;
    });

    // Footer
    this.currentY = this.pageHeight - 30;
    this.pdf.setTextColor(156, 163, 175);
    this.pdf.setFontSize(10);
    this.pdf.text('This report was generated by NeuraNest Fixer Digital Agent', 30, this.currentY);
    this.pdf.text('🚀 Ready to transform your business? Contact us to get started.', 30, this.currentY + 8);
  }

  /**
   * 🎨 HELPER METHODS
   */
  private addPageHeader(title: string): void {
    // Header background
    this.pdf.setFillColor(79, 70, 229);
    this.pdf.rect(0, 0, 210, 25, 'F');
    
    // Header text
    this.pdf.setTextColor(255, 255, 255);
    this.pdf.setFontSize(16);
    this.pdf.setFont('helvetica', 'bold');
    this.pdf.text(title, 20, 15);
    
    this.currentY = 35;
  }

  private addSectionTitle(title: string): void {
    this.pdf.setTextColor(79, 70, 229);
    this.pdf.setFontSize(14);
    this.pdf.setFont('helvetica', 'bold');
    this.pdf.text(title, 20, this.currentY);
    this.currentY += 10;
  }

  private addInsightBox(insight: string, color: number[]): void {
    // Box background
    this.pdf.setFillColor(color[0], color[1], color[2], 0.1);
    this.pdf.rect(20, this.currentY - 5, 170, 15, 'F');
    
    // Insight text
    this.pdf.setTextColor(color[0], color[1], color[2]);
    this.pdf.setFontSize(10);
    this.pdf.setFont('helvetica', 'normal');
    const wrappedText = this.wrapText(insight, 160);
    wrappedText.forEach((line, index) => {
      this.pdf.text(line, 25, this.currentY + (index * 5));
    });
    
    this.currentY += wrappedText.length * 5 + 8;
  }

  private wrapText(text: string, maxWidth: number): string[] {
    const words = text.split(' ');
    const lines: string[] = [];
    let currentLine = '';

    words.forEach(word => {
      const testLine = currentLine + (currentLine ? ' ' : '') + word;
      const textWidth = this.pdf.getTextWidth(testLine);
      
      if (textWidth > maxWidth && currentLine) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    });

    if (currentLine) {
      lines.push(currentLine);
    }

    return lines;
  }
}

export const pdfGenerator = new WorldClassPDFGenerator();