interface FormData {
  name: string;
  phone: string;
  email: string;
  location: string;
  propertyType: string;
}

export const createUserEmailTemplate = (data: FormData) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(to right, #f15a26, #ff7b42); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #ddd; }
        .details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .detail-item { margin-bottom: 10px; }
        .label { font-weight: bold; color: #f15a26; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
        .button { display: inline-block; background: #f15a26; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin-top: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>ধন্যবাদ ${data.name}!</h1>
          <p>আপনার কন্সালটেশন রিকুয়েস্ট সফলভাবে রিসিভ করা হয়েছে</p>
        </div>
        
        <div class="content">
          <h2>আপনার তথ্য:</h2>
          <div class="details">
            <div class="detail-item"><span class="label">নাম:</span> ${data.name}</div>
            <div class="detail-item"><span class="label">ফোন:</span> ${data.phone}</div>
            <div class="detail-item"><span class="label">ইমেইল:</span> ${data.email}</div>
            <div class="detail-item"><span class="label">লোকেশন:</span> ${data.location}</div>
            <div class="detail-item"><span class="label">প্রপার্টি ধরন:</span> ${data.propertyType}</div>
            <div class="detail-item"><span class="label">জমা দেওয়ার তারিখ:</span> ${new Date().toLocaleDateString('bn-BD')}</div>
          </div>
          
          <p>আমাদের টিম শীঘ্রই আপনার সাথে যোগাযোগ করবে। সাধারণত আমরা ২৪ ঘন্টার মধ্যে ফোন করে থাকি।</p>
          
          <p style="margin-top: 30px;">
            জরুরী যোগাযোগের জন্য: <strong>+৮৮০১৭XXXXXXXX</strong>
          </p>
          
          <div class="footer">
            <p>ধন্যবাদান্তে,<br>আপনার প্রপার্টি কন্সালটেন্ট টিম</p>
            <p>© ${new Date().getFullYear()} Property Consultant. All rights reserved.</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

export const createAdminEmailTemplate = (data: FormData) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #2c3e50; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #ddd; }
        .alert { background: #e74c3c; color: white; padding: 15px; border-radius: 5px; margin-bottom: 20px; text-align: center; }
        .details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .detail-item { margin-bottom: 10px; padding: 8px; background: #f8f9fa; border-left: 4px solid #3498db; }
        .label { font-weight: bold; color: #2c3e50; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
        .action-button { display: inline-block; background: #3498db; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin: 10px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🔥 নতুন লিড রিসিভ করা হয়েছে!</h1>
          <p>তাড়াতাড়ি একশন নিন</p>
        </div>
        
        <div class="content">
          <div class="alert">
            <strong>🚨 গুরুত্বপূর্ণ:</strong> এই লিডের সাথে শীঘ্রই যোগাযোগ করুন
          </div>
          
          <h2>লিডের তথ্য:</h2>
          <div class="details">
            <div class="detail-item">
              <span class="label">নাম:</span> ${data.name}
            </div>
            <div class="detail-item">
              <span class="label">ফোন:</span> 
              <a href="tel:${data.phone}" style="color: #27ae60; text-decoration: none;">
                ${data.phone}
              </a>
            </div>
            <div class="detail-item">
              <span class="label">ইমেইল:</span> 
              <a href="mailto:${data.email}" style="color: #27ae60; text-decoration: none;">
                ${data.email}
              </a>
            </div>
            <div class="detail-item">
              <span class="label">লোকেশন:</span> ${data.location}
            </div>
            <div class="detail-item">
              <span class="label">প্রপার্টি ধরন:</span> <strong>${data.propertyType}</strong>
            </div>
            <div class="detail-item">
              <span class="label">সাবমিশনের সময়:</span> ${new Date().toLocaleString('bn-BD')}
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 30px;">
            <a href="tel:${data.phone}" class="action-button">📞 এখনই কল করুন</a>
            <a href="mailto:${data.email}" class="action-button">✉️ ইমেইল করুন</a>
          </div>
          
          <div class="footer">
            <p>এই লিডটি স্বয়ংক্রিয়ভাবে তৈরি হয়েছে। লিড ম্যানেজমেন্ট সিস্টেম থেকে প্রেরিত।</p>
            <p>© ${new Date().getFullYear()} Lead Management System</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};