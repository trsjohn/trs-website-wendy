import { NextRequest, NextResponse } from "next/server";
import { jsPDF } from "jspdf";
import fs from "fs";
import path from "path";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Create a new PDF document
    const doc = new jsPDF();
    
    // Set black background for the entire page
    doc.setFillColor(0, 0, 0); // Black background
    doc.rect(0, 0, 210, 297, 'F'); // Fill entire A4 page (210x297mm)
    
    // Set default text color to white
    doc.setTextColor(255, 255, 255);
    
    // Try to add TRS logo
    try {
      const logoPath = path.join(process.cwd(), 'public', 'logo.png');
      if (fs.existsSync(logoPath)) {
        const logoBuffer = fs.readFileSync(logoPath);
        const logoBase64 = `data:image/png;base64,${logoBuffer.toString('base64')}`;
        doc.addImage(logoBase64, 'PNG', 20, 10, 30, 15);
        
        // Add company name next to logo
        doc.setFontSize(16);
        doc.setFont('helvetica', 'bold');
        doc.text('Talent Recruitment Solutions', 55, 20);
      } else {
        // Fallback to text logo
        doc.setFontSize(20);
        doc.setFont('helvetica', 'bold');
        doc.text('TRS', 20, 20);
        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        doc.text('Talent Recruitment Solutions', 20, 28);
      }
    } catch (logoError) {
      console.warn('Could not add logo to PDF:', logoError);
      // Fallback to text logo
      doc.setFontSize(20);
      doc.setFont('helvetica', 'bold');
      doc.text('TRS', 20, 20);
      doc.setFontSize(12);
      doc.setFont('helvetica', 'normal');
      doc.text('Talent Recruitment Solutions', 20, 28);
    }
    
    // Add a line separator
    doc.setDrawColor(255, 255, 255); // White line
    doc.line(20, 35, 190, 35);
    
    let yPosition = 50;
    
    // Extract job information from the JSON
    const jobTitle = body?.title || body?.job_title || body?.position || 'Job Description';
    const company = body?.company || body?.client || '';
    const location = body?.location || '';
    const salary = body?.salary || body?.compensation || body?.comp || '';
    const jobType = body?.job_type || body?.contract_type || body?.type || '';
    
    // Add job title
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text(jobTitle, 20, yPosition);
    yPosition += 15;
    
    // Add company info if available
    if (company) {
      doc.setFontSize(14);
      doc.setFont('helvetica', 'normal');
      doc.text(`Company: ${company}`, 20, yPosition);
      yPosition += 10;
    }
    
    // Add location if available
    if (location) {
      doc.setFontSize(12);
      doc.text(`Location: ${location}`, 20, yPosition);
      yPosition += 8;
    }
    
    // Add salary if available
    if (salary) {
      doc.setFontSize(12);
      doc.text(`Compensation: ${salary}`, 20, yPosition);
      yPosition += 8;
    }
    
    // Add job type if available
    if (jobType) {
      doc.setFontSize(12);
      doc.text(`Type: ${jobType}`, 20, yPosition);
      yPosition += 8;
    }
    
    yPosition += 10;
    
    // Add job description sections
    const sections = [
      { key: 'description', title: 'Job Description' },
      { key: 'responsibilities', title: 'Key Responsibilities' },
      { key: 'requirements', title: 'Requirements' },
      { key: 'qualifications', title: 'Qualifications' },
      { key: 'skills', title: 'Required Skills' },
      { key: 'benefits', title: 'Benefits' },
      { key: 'about_company', title: 'About the Company' },
      { key: 'about', title: 'About the Role' }
    ];
    
    for (const section of sections) {
      const content = body?.[section.key];
      if (content) {
        // Add section title
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text(section.title, 20, yPosition);
        yPosition += 10;
        
        // Add content
        doc.setFontSize(11);
        doc.setFont('helvetica', 'normal');
        
        let text = '';
        if (typeof content === 'string') {
          text = content;
        } else if (Array.isArray(content)) {
          text = content.join('\n• ');
          if (text) text = '• ' + text;
        } else if (typeof content === 'object') {
          text = JSON.stringify(content, null, 2);
        }
        
        if (text) {
          // Split text into lines that fit the page width
          const lines = doc.splitTextToSize(text, 170);
          
          for (const line of lines) {
            // Check if we need a new page
            if (yPosition > 270) {
              doc.addPage();
              // Set black background for new page
              doc.setFillColor(0, 0, 0);
              doc.rect(0, 0, 210, 297, 'F');
              // Reset text color to white
              doc.setTextColor(255, 255, 255);
              yPosition = 20;
            }
            
            doc.text(line, 20, yPosition);
            yPosition += 6;
          }
          
          yPosition += 5; // Extra space after each section
        }
      }
    }
    
    // If no structured content was found, show the raw JSON in a more readable format
    if (yPosition <= 80) {
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text('Job Details', 20, yPosition);
      yPosition += 10;
      
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      
      // Format the JSON nicely
      const jsonString = JSON.stringify(body, null, 2);
      const lines = doc.splitTextToSize(jsonString, 170);
      
      for (const line of lines) {
        if (yPosition > 270) {
          doc.addPage();
          // Set black background for new page
          doc.setFillColor(0, 0, 0);
          doc.rect(0, 0, 210, 297, 'F');
          // Reset text color to white
          doc.setTextColor(255, 255, 255);
          yPosition = 20;
        }
        
        doc.text(line, 20, yPosition);
        yPosition += 5;
      }
    }
    
    // Generate PDF buffer
    const pdfBuffer = doc.output('arraybuffer');
    
    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `inline; filename="${jobTitle.replace(/[^a-zA-Z0-9]/g, '-')}.pdf"`,
      },
    });
  } catch (error) {
    console.error('PDF generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate PDF' },
      { status: 500 }
    );
  }
}
