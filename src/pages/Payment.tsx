import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Watermark from "@/components/Watermark";
import { ArrowLeft, Phone, CreditCard, Shield, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface PaymentData {
  phoneNumber: string;
  network: string;
  amount: number;
  reference: string;
}

const Payment = () => {
  const [paymentData, setPaymentData] = useState<PaymentData>({
    phoneNumber: "",
    network: "",
    amount: 50, // Default amount in GHS
    reference: ""
  });
  
  const [processing, setProcessing] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const { toast } = useToast();

  const networks = [
    { value: "mtn", label: "MTN Mobile Money" },
    { value: "vodafone", label: "Vodafone Cash" },
    { value: "airteltigo", label: "AirtelTigo Money" }
  ];

  const handlePayment = async () => {
    if (!paymentData.phoneNumber || !paymentData.network) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Validate Ghana phone number format
    const phoneRegex = /^(\+233|0)[2-5][0-9]{8}$/;
    if (!phoneRegex.test(paymentData.phoneNumber)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid Ghanaian phone number.",
        variant: "destructive"
      });
      return;
    }

    setProcessing(true);
    
    try {
      // Generate reference number
      const reference = `CC-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`.toUpperCase();
      
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // For now, we'll simulate a successful payment
      setPaymentData(prev => ({ ...prev, reference }));
      setPaymentComplete(true);
      
      toast({
        title: "Payment Instructions Sent",
        description: `Payment request sent to ${paymentData.phoneNumber}. Please complete the transaction on your phone.`,
      });
      
    } catch (error) {
      toast({
        title: "Payment Failed",
        description: "Unable to process payment. Please try again.",
        variant: "destructive"
      });
    } finally {
      setProcessing(false);
    }
  };

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    
    // Format as Ghana number
    if (digits.startsWith('233')) {
      return '+' + digits;
    } else if (digits.startsWith('0')) {
      return digits;
    } else if (digits.length <= 10) {
      return digits.length > 0 ? '0' + digits : '';
    }
    
    return digits;
  };

  if (paymentComplete) {
    return (
      <div className="min-h-screen bg-gradient-subtle">
        <nav className="bg-background/80 backdrop-blur-lg border-b border-border">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-primary hover:text-primary-hover transition-smooth">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <div className="font-poppins text-2xl font-bold gradient-hero bg-clip-text text-transparent">
              Career Craft
            </div>
            <div className="text-sm text-muted-foreground">
              Payment Status
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-6 py-12">
          <div className="max-w-md mx-auto">
            <Card className="p-8 gradient-card shadow-strong animate-fade-in text-center">
              <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              
              <h1 className="font-poppins text-2xl font-bold mb-4">Payment Initiated</h1>
              <p className="text-muted-foreground mb-6">
                Please complete the transaction on your mobile device.
              </p>
              
              <div className="bg-muted rounded-lg p-4 mb-6 text-left">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Amount:</span>
                    <span className="font-semibold">GHS {paymentData.amount}.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Network:</span>
                    <span className="font-semibold">{networks.find(n => n.value === paymentData.network)?.label}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Phone:</span>
                    <span className="font-semibold">{paymentData.phoneNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Merchant:</span>
                    <span className="font-semibold">0201504598</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Reference:</span>
                    <span className="font-semibold text-xs">{paymentData.reference}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
                  <p className="font-semibold mb-1">Next Steps:</p>
                  <p>1. Check your phone for payment prompt</p>
                  <p>2. Enter your mobile money PIN</p>
                  <p>3. Confirm the transaction</p>
                </div>
                
                <Link to="/profile" className="block">
                  <Button variant="hero" size="lg" className="w-full">
                    Continue to Profile
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>

        <Watermark />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Navigation */}
      <nav className="bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-primary hover:text-primary-hover transition-smooth">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          <div className="font-poppins text-2xl font-bold gradient-hero bg-clip-text text-transparent">
            Career Craft
          </div>
          <div className="text-sm text-muted-foreground">
            Secure Payment
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-md mx-auto">
          <Card className="p-8 gradient-card shadow-strong animate-fade-in">
            <div className="text-center mb-8">
              <div className="w-16 h-16 gradient-button rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h1 className="font-poppins text-2xl font-bold mb-2">Secure Payment</h1>
              <p className="text-muted-foreground">Pay with Mobile Money to create your professional CV</p>
            </div>

            {/* Payment Details */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">Service:</span>
                <span className="font-semibold">Professional CV Creation</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">Amount:</span>
                <span className="font-bold text-lg text-primary">GHS {paymentData.amount}.00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Merchant Number:</span>
                <span className="font-semibold">0201504598</span>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <Label htmlFor="network" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Mobile Money Network *
                </Label>
                <Select
                  value={paymentData.network}
                  onValueChange={(value) => setPaymentData(prev => ({ ...prev, network: value }))}
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select your mobile money network" />
                  </SelectTrigger>
                  <SelectContent>
                    {networks.map((network) => (
                      <SelectItem key={network.value} value={network.value}>
                        {network.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Mobile Money Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={paymentData.phoneNumber}
                  onChange={(e) => setPaymentData(prev => ({ 
                    ...prev, 
                    phoneNumber: formatPhoneNumber(e.target.value)
                  }))}
                  placeholder="0XX XXX XXXX or +233XX XXX XXXX"
                  className="mt-2"
                  disabled={processing}
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Enter the phone number linked to your mobile money account
                </p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-yellow-800">
                    <p className="font-semibold mb-1">Secure Payment Process:</p>
                    <p>You will receive a payment prompt on your phone. Follow the instructions to complete the transaction securely.</p>
                  </div>
                </div>
              </div>

              <Button 
                onClick={handlePayment}
                disabled={processing || !paymentData.phoneNumber || !paymentData.network}
                className="w-full"
                variant="hero"
                size="lg"
              >
                {processing ? "Processing Payment..." : `Pay GHS ${paymentData.amount}.00`}
              </Button>

              <div className="text-center text-xs text-muted-foreground">
                <p>By proceeding, you agree to our Terms of Service.</p>
                <p>Your payment is protected by secure encryption.</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Watermark />
    </div>
  );
};

export default Payment;