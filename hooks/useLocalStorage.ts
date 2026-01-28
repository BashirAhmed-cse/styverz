'use client';

import { useState } from 'react';
import Swal from 'sweetalert2';

interface FormData {
  name: string;
  phone: string;
  email: string;
  location: string;
  propertyType: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
  emailSent?: boolean;
}

export const useLocalStorage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [emailStatus, setEmailStatus] = useState<string | null>(null);

  const submitToLocalStorage = async (
    formData: FormData
  ): Promise<ApiResponse> => {
    setIsLoading(true);
    setEmailStatus(null);

    // 🔄 Loading alert
    Swal.fire({
      title: 'অপেক্ষা করুন...',
      text: 'আপনার তথ্য সংরক্ষণ করা হচ্ছে',
      icon: 'info',
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const response = await fetch('/api/save-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result: ApiResponse = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to save data');
      }

      Swal.close();

      // ✅ Email sent
      if (result.emailSent) {
        setEmailStatus('Email sent successfully');

        await Swal.fire({
          title: '🎉 সফলভাবে জমা দেওয়া হয়েছে!',
          icon: 'success',
          confirmButtonText: 'ঠিক আছে',
          confirmButtonColor: '#f15a26',
          background: '#fff',
          html: `
            <div style="text-align:left;padding:10px">
              <p>আপনার তথ্য সফলভাবে সংরক্ষিত হয়েছে।</p>
              <div style="margin-top:10px;background:#f0f9ff;padding:15px;border-radius:8px;border-left:4px solid #3b82f6">
                <strong>📧 কনফার্মেশন ইমেইল:</strong> পাঠানো হয়েছে
                <p style="margin-top:6px;font-size:14px;color:#666">
                  আপনার ইমেইল চেক করুন
                </p>
              </div>
              <p style="margin-top:15px">
                আমাদের টিম শীঘ্রই আপনার সাথে যোগাযোগ করবে।
              </p>
            </div>
          `,
          customClass: {
            popup: 'rounded-2xl shadow-2xl',
            confirmButton: 'px-6 py-3 rounded-lg font-medium',
          },
        });
      } else {
        // ⚠ Email failed but data saved
        setEmailStatus('Data saved but email failed');

        await Swal.fire({
          title: '⚠ তথ্য সংরক্ষিত হয়েছে',
          icon: 'warning',
          confirmButtonText: 'বুঝেছি',
          confirmButtonColor: '#f59e0b',
          background: '#fff',
          html: `
            <div style="text-align:left;padding:10px">
              <p>আপনার তথ্য সফলভাবে সংরক্ষিত হয়েছে।</p>
              <div style="margin-top:10px;background:#fef3c7;padding:15px;border-radius:8px;border-left:4px solid #f59e0b">
                <strong>📧 ইমেইল পাঠানো যায়নি</strong>
                <p style="margin-top:6px;font-size:14px;color:#666">
                  তবে আপনার তথ্য আমাদের কাছে সংরক্ষিত আছে
                </p>
              </div>
            </div>
          `,
          customClass: {
            popup: 'rounded-2xl shadow-2xl',
            confirmButton: 'px-6 py-3 rounded-lg font-medium',
          },
        });
      }

      return result;
    } catch (error) {
      Swal.close();

      const message =
        error instanceof Error
          ? error.message
          : 'অনুগ্রহ করে আবার চেষ্টা করুন।';

      setEmailStatus('Failed to send email');

      await Swal.fire({
        title: '❌ জমা দেওয়া ব্যর্থ হয়েছে!',
        icon: 'error',
        confirmButtonText: 'পুনরায় চেষ্টা করুন',
        confirmButtonColor: '#ef4444',
        showCancelButton: true,
        cancelButtonText: 'বাতিল করুন',
        cancelButtonColor: '#6b7280',
        background: '#fff',
        html: `
          <div style="text-align:left;padding:10px">
            <p>দুঃখিত, আপনার তথ্য জমা দেওয়া যায়নি।</p>
            <div style="margin-top:10px;background:#fee2e2;padding:15px;border-radius:8px;border-left:4px solid #ef4444">
              <strong>সমস্যা:</strong> ${message}
            </div>
          </div>
        `,
        customClass: {
          popup: 'rounded-2xl shadow-2xl',
          confirmButton: 'px-6 py-3 rounded-lg font-medium mr-2',
          cancelButton: 'px-6 py-3 rounded-lg font-medium',
        },
      });

      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    submitToLocalStorage,
    isLoading,
    emailStatus,
  };
};
