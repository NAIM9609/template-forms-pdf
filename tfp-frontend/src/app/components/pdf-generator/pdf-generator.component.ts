import { Component, OnInit } from '@angular/core';
import puppeteer from 'puppeteer';

@Component({
  selector: 'app-pdf-generator',
  standalone: true,
  imports: [],
  templateUrl: './pdf-generator.component.html',
  styleUrl: './pdf-generator.component.scss'
})
export class PdfGeneratorComponent implements OnInit {

  ngOnInit(): void {

    const htmlContent = '<h1>Hello World</h1><p>This is custom HTML content.</p>';
    this.generatePDFfromHTML(htmlContent, 'custom.pdf')
      .then(() => console.log('PDF generated successfully'))
      .catch(err => console.error('Error generating PDF:', err));
  }

  async generatePDFfromHTML(htmlContent: string, outputPath: string) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(htmlContent);
  await page.pdf({ path: outputPath, format: 'A4' });
  await browser.close();
}
  
}
