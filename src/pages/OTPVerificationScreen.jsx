import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const OTPVerificationScreen = () => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setOtp(value.slice(0, 6));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      toast.error("Please enter a 6-digit OTP");
      return;
    }
    
    // Placeholder for OTP verification logic
    console.log("Verifying OTP:", otp);
    toast.success("OTP verified successfully");
    // Navigate to the next screen after successful verification
    navigate('/');
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>OTP Verification</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Enter 6-digit OTP"
                value={otp}
                onChange={handleOtpChange}
                maxLength={6}
                className="text-center text-2xl tracking-widest"
              />
            </div>
            <Button type="submit" className="w-full">Verify OTP</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default OTPVerificationScreen;