import nodemailer from 'nodemailer';
import { emailConfig } from './email-config';
import { createUserEmailTemplate, createAdminEmailTemplate } from './email-templates';

interface EmailData {
  name: string;
  phone: string;
  email: string;
  location: string;
  propertyType: string;
}

export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: emailConfig.host,
      port: emailConfig.port,
      secure: emailConfig.secure,
      auth: {
        user: emailConfig.auth.user,
        pass: emailConfig.auth.pass,
      },
    });
  }

  async sendLeadEmail(data: EmailData) {
    try {
      // Send email to user
      const userMailOptions = {
        from: emailConfig.from,
        to: data.email,
        subject: `ধন্যবাদ ${data.name}, আপনার কন্সালটেশন রিকুয়েস্ট সফলভাবে রিসিভ করা হয়েছে`,
        html: createUserEmailTemplate(data),
        text: `ধন্যবাদ ${data.name}!\n\nআপনার কন্সালটেশন রিকুয়েস্ট সফলভাবে রিসিভ করা হয়েছে।\n\nবিস্তারিত:\nনাম: ${data.name}\nফোন: ${data.phone}\nইমেইল: ${data.email}\nলোকেশন: ${data.location}\nপ্রপার্টি ধরন: ${data.propertyType}\n\nআমাদের টিম শীঘ্রই আপনার সাথে যোগাযোগ করবে।`,
      };

      // Send email to admin
      const adminEmail = process.env.ADMIN_EMAIL || emailConfig.auth.user;
      const adminMailOptions = {
        from: emailConfig.from,
        to: adminEmail,
        subject: `🔥 নতুন লিড: ${data.name} - ${data.propertyType} (${data.location})`,
        html: createAdminEmailTemplate(data),
        text: `নতুন লিড!\n\nবিস্তারিত:\nনাম: ${data.name}\nফোন: ${data.phone}\nইমেইল: ${data.email}\nলোকেশন: ${data.location}\nপ্রপার্টি ধরন: ${data.propertyType}\n\nতাড়াতাড়ি যোগাযোগ করুন!`,
      };

      // Send both emails
      const [userResult, adminResult] = await Promise.all([
        this.transporter.sendMail(userMailOptions),
        this.transporter.sendMail(adminMailOptions),
      ]);

   

      return {
        success: true,
        userMessageId: userResult.messageId,
        adminMessageId: adminResult.messageId,
      };
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Failed to send email');
    }
  }

  // Test email configuration
  async verifyConnection() {
    try {
      await this.transporter.verify();

      return true;
    } catch (error) {
      console.error('Email server connection failed:', error);
      return false;
    }
  }
}

export const emailService = new EmailService();