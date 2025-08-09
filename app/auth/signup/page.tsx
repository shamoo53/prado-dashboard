"use client";
import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Eye, EyeOff, Shield, Zap, ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "",
    organization: "",
    agreeToTerms: false,
    agreeToMarketing: false,
  });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 2) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        router.push("/dashboard");
      }, 2000);
      return;
    }

    setStep(2);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      accountType: value,
    }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md space-y-6"
      >
        {/* Header */}
        <div className="text-center space-y-4">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">P</span>
            </div>
            <span className="font-bold text-2xl">Prado-dash</span>
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-gray-900">
              Create your account
            </h1>
            <p className="text-gray-600">
              Join the transparent crowdfunding revolution
            </p>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center space-x-4">
          <div
            className={`flex items-center space-x-2 ${
              step >= 1 ? "text-blue-600" : "text-gray-400"
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= 1 ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
            >
              {step > 1 ? <CheckCircle className="h-4 w-4" /> : "1"}
            </div>
            <span className="text-sm font-medium">Account</span>
          </div>
          <div
            className={`w-8 h-px ${step >= 2 ? "bg-blue-600" : "bg-gray-200"}`}
          ></div>
          <div
            className={`flex items-center space-x-2 ${
              step >= 2 ? "text-blue-600" : "text-gray-400"
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= 2 ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
            >
              2
            </div>
            <span className="text-sm font-medium">Details</span>
          </div>
        </div>

        {/* Sign Upp Formm */}
        <Card className="border-0 shadow-xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl text-center">
              {step === 1 ? "Create Account" : "Account Details"}
            </CardTitle>
            <CardDescription className="text-center">
              {step === 1
                ? "Enter your basic information to get started"
                : "Tell us more about yourself and your goals"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              {step === 1 ? (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="h-11"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a strong password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        className="h-11 pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        required
                        className="h-11 pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="accountType">Account Type</Label>
                    <Select onValueChange={handleSelectChange} required>
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Select account type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="individual">
                          Individual Donor
                        </SelectItem>
                        <SelectItem value="campaigner">
                          Campaign Creator
                        </SelectItem>
                        <SelectItem value="organization">
                          Non-Profit Organization
                        </SelectItem>
                        <SelectItem value="corporate">
                          Corporate Sponsor
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {(formData.accountType === "organization" ||
                    formData.accountType === "corporate") && (
                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization Name</Label>
                      <Input
                        id="organization"
                        name="organization"
                        placeholder="Your organization name"
                        value={formData.organization}
                        onChange={handleInputChange}
                        required
                        className="h-11"
                      />
                    </div>
                  )}

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) =>
                          handleCheckboxChange(
                            "agreeToTerms",
                            checked as boolean
                          )
                        }
                        required
                      />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the{" "}
                        <Link
                          href="/terms"
                          className="text-blue-600 hover:underline"
                        >
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link
                          href="/privacy"
                          className="text-blue-600 hover:underline"
                        >
                          Privacy Policy
                        </Link>
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="marketing"
                        checked={formData.agreeToMarketing}
                        onCheckedChange={(checked) =>
                          handleCheckboxChange(
                            "agreeToMarketing",
                            checked as boolean
                          )
                        }
                      />
                      <Label htmlFor="marketing" className="text-sm">
                        I'd like to receive updates about campaigns and platform
                        features
                      </Label>
                    </div>
                  </div>
                </>
              )}

              <div className="flex space-x-4">
                {step === 2 && (
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 h-11 bg-transparent"
                    onClick={() => setStep(1)}
                  >
                    Back
                  </Button>
                )}
                <Button
                  type="submit"
                  className="flex-1 h-11"
                  disabled={isLoading}
                >
                  {isLoading
                    ? "Creating Account..."
                    : step === 1
                    ? "Continue"
                    : "Create Account"}
                </Button>
              </div>
            </form>

            {step === 1 && (
              <>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="h-11 bg-transparent">
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                      <path
                        d="M2.56 12.25c0-.78-.07 1.53-.2 2.25H12v4.26h5.92c-2.6 1.37-2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-5.98 7.28-2.66l3.15-3.57-2.77c-.98.6-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-2.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.2.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.57-2.77c-.98.6-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84c.81 1.2 2.5 2.3 4.69 2.3z"
                        fill="#EA4335"
                      />
                    </svg>
                    Google
                  </Button>
                  <Button variant="outline" className="h-11 bg-transparent">
                    <svg
                      className="mr-2 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24 24"
                    >
                      <path d="M12 23c2.97 0 5.46-5.98 7.28-2.66l3.15-3.57-2.77c-.98.6-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path d="M5.84 14.09c-.222-2.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.2.81-.62z" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.57-2.77c-.98.6-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53z" />
                    </svg>
                    GitHub
                  </Button>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        {/* Security Featuresss */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Shield className="h-4 w-4 text-green-600" />
            <span>Bank-level Security</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Zap className="h-4 w-4 text-blue-600" />
            <span>Stellar Blockchain</span>
          </div>
        </div>

        {/* Sign In Link */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/auth/signin"
              className="font-medium text-blue-600 hover:underline"
            >
              Sign in here
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
