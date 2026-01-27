'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, Mail, Lock, User, Phone, AlertCircle, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

const page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [passwordStrength, setPasswordStrength] = useState({
    hasMinLength: false,
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumber: false,
    hasSpecialChar: false,
  });

  const handlePasswordChange = (password: string) => {
    setFormData({ ...formData, password });
    setPasswordStrength({
      hasMinLength: password.length >= 8,
      hasUpperCase: /[A-Z]/.test(password),
      hasLowerCase: /[a-z]/.test(password),
      hasNumber: /[0-9]/.test(password),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    });
  };

  const calculateStrength = () => {
    const checks = Object.values(passwordStrength);
    const passed = checks.filter(Boolean).length;
    return (passed / checks.length) * 100;
  };

  const getStrengthColor = () => {
    const strength = calculateStrength();
    if (strength < 40) return 'bg-red-500';
    if (strength < 80) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    // Validate terms accepted
    if (!acceptedTerms) {
      alert('Please accept the terms and conditions');
      return;
    }
    
    // Handle signup logic here
    console.log('Signup attempt:', formData);
  };
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#fdfaf7]">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>
            <p className="text-gray-600 mt-2">
              Join Stayverz and start earning today
            </p>
          </div>
        </div>

        {/* Signup Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                  First Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="John"
                    className="pl-10 h-12"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  className="h-12"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="pl-10 h-12"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+880 1234 567890"
                  className="pl-10 h-12"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="pl-10 pr-10 h-12"
                  value={formData.password}
                  onChange={(e) => handlePasswordChange(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>

              {/* Password Strength Meter */}
              {formData.password && (
                <div className="space-y-2 pt-2">
                  <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${getStrengthColor()} transition-all duration-300`}
                      style={{ width: `${calculateStrength()}%` }}
                    ></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center gap-1">
                      <div className={`w-3 h-3 rounded-full flex items-center justify-center ${passwordStrength.hasMinLength ? 'bg-green-500' : 'bg-gray-300'}`}>
                        {passwordStrength.hasMinLength && <Check className="w-2 h-2 text-white" />}
                      </div>
                      <span className={passwordStrength.hasMinLength ? 'text-green-600' : 'text-gray-500'}>
                        8+ characters
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className={`w-3 h-3 rounded-full flex items-center justify-center ${passwordStrength.hasUpperCase ? 'bg-green-500' : 'bg-gray-300'}`}>
                        {passwordStrength.hasUpperCase && <Check className="w-2 h-2 text-white" />}
                      </div>
                      <span className={passwordStrength.hasUpperCase ? 'text-green-600' : 'text-gray-500'}>
                        Uppercase letter
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className={`w-3 h-3 rounded-full flex items-center justify-center ${passwordStrength.hasLowerCase ? 'bg-green-500' : 'bg-gray-300'}`}>
                        {passwordStrength.hasLowerCase && <Check className="w-2 h-2 text-white" />}
                      </div>
                      <span className={passwordStrength.hasLowerCase ? 'text-green-600' : 'text-gray-500'}>
                        Lowercase letter
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className={`w-3 h-3 rounded-full flex items-center justify-center ${passwordStrength.hasNumber ? 'bg-green-500' : 'bg-gray-300'}`}>
                        {passwordStrength.hasNumber && <Check className="w-2 h-2 text-white" />}
                      </div>
                      <span className={passwordStrength.hasNumber ? 'text-green-600' : 'text-gray-500'}>
                        Number
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="pl-10 pr-10 h-12"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                <p className="text-sm text-red-600">Passwords do not match</p>
              )}
            </div>

            {/* Terms and Conditions */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="terms"
                  checked={acceptedTerms}
                  onCheckedChange={(checked) => setAcceptedTerms(checked as boolean)}
                  className="mt-1"
                />
                <label htmlFor="terms" className="text-sm text-gray-700 cursor-pointer">
                  I agree to the{' '}
                  <Link href="/terms" className="text-[#f15a26] hover:underline font-medium">
                    Terms and Conditions
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy" className="text-[#f15a26] hover:underline font-medium">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              {/* Signup Benefits */}
              <div className="p-4 bg-blue-50 rounded-lg space-y-2">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-blue-700 mb-2">Why sign up?</p>
                    <ul className="space-y-1 text-blue-600">
                      <li className="flex items-center gap-1">
                        <Check className="h-3 w-3" />
                        <span>Free property listing</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <Check className="h-3 w-3" />
                        <span>Automated booking management</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <Check className="h-3 w-3" />
                        <span>24/7 customer support</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-12 bg-[#f15a26] hover:bg-[#d14a1e] text-white text-base font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              Create Account
            </Button>
          </form>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Or sign up with</span>
            </div>
          </div>

          {/* Social Signup */}
          <div className="space-y-3">
            <Button
              type="button"
              variant="outline"
              className="w-full h-12 border-gray-300 hover:bg-gray-50 justify-start"
            >
              <div className="flex items-center w-full">
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="flex-1 text-left">Continue with Google</span>
              </div>
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full h-12 border-gray-300 hover:bg-gray-50 justify-start"
            >
              <div className="flex items-center w-full">
                <svg className="w-5 h-5 mr-3" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="flex-1 text-left">Continue with Facebook</span>
              </div>
            </Button>
          </div>
        </div>

        {/* Login Link */}
        <div className="text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link
              href="/login"
              className="font-medium text-[#f15a26] hover:text-[#d14a1e] transition-colors"
            >
              Sign in here
            </Link>
          </p>
        </div>

        {/* Footer Links */}
        <div className="text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Stayverz. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default page