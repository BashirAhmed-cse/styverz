'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, Mail, Lock, User, Phone, AlertCircle, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

const page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
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

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: 0.2
      }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.98 }
  };

  const socialButtonVariants = {
    hover: { 
      y: -2,
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
    },
    tap: { scale: 0.98 }
  };

  const checkmarkVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 500 } }
  };

  const strengthBarVariants = {
    hidden: { width: 0 },
    visible: { 
      width: `${calculateStrength()}%`,
      transition: { duration: 0.5, ease: "easeInOut" }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center p-4 bg-[#fdfaf7]"
    >
      <motion.div 
        className="max-w-md w-full space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div 
          className="text-center space-y-4"
          variants={itemVariants}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.3 }}
            className="flex justify-center"
          >
            
          </motion.div>
          <motion.div variants={itemVariants}>
            <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>
            <p className="text-gray-600 mt-2">
              Join Stayverz and start earning today
            </p>
          </motion.div>
        </motion.div>

        {/* Signup Card */}
        <motion.div 
          className="bg-white rounded-2xl shadow-lg p-8 space-y-6"
          variants={cardVariants}
          whileHover={{ 
            y: -5,
            transition: { type: "spring", stiffness: 300 }
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { id: 'firstName', placeholder: 'John', icon: User },
                { id: 'lastName', placeholder: 'Doe', icon: null }
              ].map((field, index) => (
                <motion.div 
                  key={field.id}
                  className="space-y-2"
                  variants={itemVariants}
                  custom={index}
                >
                  <label htmlFor={field.id} className="text-sm font-medium text-gray-700">
                    {field.id === 'firstName' ? 'First Name' : 'Last Name'}
                  </label>
                  <motion.div 
                    className="relative"
                    whileFocus={{ scale: 1.01 }}
                  >
                    {field.icon && (
                      <field.icon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    )}
                    <Input
                      id={field.id}
                      type="text"
                      placeholder={field.placeholder}
                      className={`${field.icon ? 'pl-10' : ''} h-12 transition-all duration-200`}
                      value={formData[field.id as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                      required
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Email */}
            <motion.div 
              className="space-y-2"
              variants={itemVariants}
            >
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <motion.div 
                className="relative"
                whileFocus={{ scale: 1.01 }}
              >
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="pl-10 h-12 transition-all duration-200"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </motion.div>
            </motion.div>

            {/* Phone */}
            <motion.div 
              className="space-y-2"
              variants={itemVariants}
            >
              <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <motion.div 
                className="relative"
                whileFocus={{ scale: 1.01 }}
              >
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+880 1234 567890"
                  className="pl-10 h-12 transition-all duration-200"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </motion.div>
            </motion.div>

            {/* Password */}
            <motion.div 
              className="space-y-2"
              variants={itemVariants}
            >
              <label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </label>
              <motion.div 
                className="relative"
                whileFocus={{ scale: 1.01 }}
              >
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="pl-10 pr-10 h-12 transition-all duration-200"
                  value={formData.password}
                  onChange={(e) => handlePasswordChange(e.target.value)}
                  required
                />
                <motion.button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={showPassword ? 'hide' : 'show'}
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </motion.div>
                  </AnimatePresence>
                </motion.button>
              </motion.div>

              {/* Password Strength Meter */}
              <AnimatePresence>
                {formData.password && (
                  <motion.div 
                    className="space-y-2 pt-2"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                      <motion.div 
                        className={`h-full ${getStrengthColor()} transition-all duration-300`}
                        variants={strengthBarVariants}
                        initial="hidden"
                        animate="visible"
                        key={calculateStrength()}
                      ></motion.div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {[
                        { key: 'hasMinLength', label: '8+ characters' },
                        { key: 'hasUpperCase', label: 'Uppercase letter' },
                        { key: 'hasLowerCase', label: 'Lowercase letter' },
                        { key: 'hasNumber', label: 'Number' }
                      ].map((requirement, index) => (
                        <motion.div 
                          key={requirement.key}
                          className="flex items-center gap-1"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <motion.div 
                            className={`w-3 h-3 rounded-full flex items-center justify-center ${passwordStrength[requirement.key as keyof typeof passwordStrength] ? 'bg-green-500' : 'bg-gray-300'}`}
                            whileHover={{ scale: 1.2 }}
                          >
                            {passwordStrength[requirement.key as keyof typeof passwordStrength] && (
                              <motion.div variants={checkmarkVariants} initial="hidden" animate="visible">
                                <Check className="w-2 h-2 text-white" />
                              </motion.div>
                            )}
                          </motion.div>
                          <span className={passwordStrength[requirement.key as keyof typeof passwordStrength] ? 'text-green-600' : 'text-gray-500'}>
                            {requirement.label}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Confirm Password */}
            <motion.div 
              className="space-y-2"
              variants={itemVariants}
            >
              <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <motion.div 
                className="relative"
                whileFocus={{ scale: 1.01 }}
              >
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="pl-10 pr-10 h-12 transition-all duration-200"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  required
                />
                <motion.button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={showConfirmPassword ? 'hide' : 'show'}
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </motion.div>
                  </AnimatePresence>
                </motion.button>
              </motion.div>
              <AnimatePresence>
                {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                  <motion.p 
                    className="text-sm text-red-600"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    Passwords do not match
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Terms and Conditions */}
            <motion.div 
              className="space-y-4"
              variants={itemVariants}
            >
              <motion.div 
                className="flex items-start space-x-3"
                whileHover={{ x: 2 }}
              >
                <Checkbox
                  id="terms"
                  checked={acceptedTerms}
                  onCheckedChange={(checked) => setAcceptedTerms(checked as boolean)}
                  className="mt-1"
                />
                <label htmlFor="terms" className="text-sm text-gray-700 cursor-pointer">
                  I agree to the{' '}
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="/terms" className="text-[#f15a26] hover:underline font-medium">
                      Terms and Conditions
                    </Link>
                  </motion.span>{' '}
                  and{' '}
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="/privacy" className="text-[#f15a26] hover:underline font-medium">
                      Privacy Policy
                    </Link>
                  </motion.span>
                </label>
              </motion.div>

              {/* Signup Benefits */}
              <motion.div 
                className="p-4 bg-blue-50 rounded-lg space-y-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-2">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
                  >
                    <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  </motion.div>
                  <div className="text-sm">
                    <p className="font-medium text-blue-700 mb-2">Why sign up?</p>
                    <ul className="space-y-1 text-blue-600">
                      {[
                        'Free property listing',
                        'Automated booking management',
                        '24/7 customer support'
                      ].map((benefit, index) => (
                        <motion.li 
                          key={benefit}
                          className="flex items-center gap-1"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                          >
                            <Check className="h-3 w-3" />
                          </motion.div>
                          <span>{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                type="submit"
                className="w-full h-12 bg-[#f15a26] hover:bg-[#d14a1e] text-white text-base font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                Create Account
              </Button>
            </motion.div>
          </form>

          {/* Divider */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Or sign up with</span>
            </div>
          </motion.div>

          {/* Social Signup */}
          <div className="space-y-3">
            {[
              { name: 'Continue with Google', icon: 'google' },
              { name: 'Continue with Facebook', icon: 'facebook' }
            ].map((social, index) => (
              <motion.div
                key={social.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover="hover"
                whileTap="tap"
                variants={socialButtonVariants}
              >
                <Button
                  type="button"
                  variant="outline"
                  className="w-full h-12 border-gray-300 hover:bg-gray-50 justify-start transition-all duration-200"
                >
                  <div className="flex items-center w-full">
                    {social.icon === 'google' ? (
                      <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 mr-3" fill="#1877F2" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    )}
                    <span className="flex-1 text-left">{social.name}</span>
                  </div>
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Login Link */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-gray-600">
            Already have an account?{' '}
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/login"
                className="font-medium text-[#f15a26] hover:text-[#d14a1e] transition-colors"
              >
                Sign in here
              </Link>
            </motion.span>
          </p>
        </motion.div>

        
      </motion.div>
    </motion.div>
  );
}

export default page;