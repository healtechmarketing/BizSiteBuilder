import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertQuoteRequestSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const formSchema = insertQuoteRequestSchema.extend({
  features: z.object({
    callAnswering: z.boolean().default(false),
    booking: z.boolean().default(false),
    sms: z.boolean().default(false),
    crm: z.boolean().default(false),
    multilocation: z.boolean().default(false),
  }),
});

type FormData = z.infer<typeof formSchema>;

export default function QuoteForm() {
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      businessType: "",
      callVolume: "",
      features: {
        callAnswering: false,
        booking: false,
        sms: false,
        crm: false,
        multilocation: false,
      },
      message: "",
    },
  });

  const businessType = watch("businessType");
  const callVolume = watch("callVolume");
  const features = watch("features");

  // Calculate quote based on current selections
  const calculateQuote = () => {
    let baseCost = 500;
    let selectedFeatureCount = Object.values(features || {}).filter(Boolean).length;
    
    // Adjust base cost based on business type
    if (businessType === "healthcare" || businessType === "professional") {
      baseCost += 300;
    }
    
    // Adjust based on call volume
    if (callVolume === "medium") {
      baseCost += 200;
    } else if (callVolume === "high") {
      baseCost += 500;
    }
    
    // Add cost per feature
    baseCost += selectedFeatureCount * 150;
    
    // Multi-location adds significant complexity
    if (features?.multilocation) {
      baseCost += 800;
    }
    
    // Determine recommended maintenance plan
    let recommendedPlan = "Essential ($149/month)";
    if (selectedFeatureCount >= 3 || features?.multilocation) {
      recommendedPlan = "Elite ($399/month)";
    } else if (selectedFeatureCount >= 2 || callVolume === "high") {
      recommendedPlan = "Proactive ($249/month)";
    }
    
    return {
      estimatedCost: `$${baseCost.toLocaleString()}`,
      maintenancePlan: recommendedPlan
    };
  };

  const { estimatedCost, maintenancePlan } = calculateQuote();

  const submitQuoteMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await apiRequest("POST", "/api/quote-requests", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Quote Request Submitted!",
        description: "We'll get back to you within 24 hours with a detailed proposal.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to submit quote request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormData) => {
    const quote = calculateQuote();
    const submissionData = {
      ...data,
      estimatedCost: quote.estimatedCost,
      maintenancePlan: quote.maintenancePlan
    };
    submitQuoteMutation.mutate(submissionData);
  };

  return (
    <section id="quote-form" className="py-20 bg-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Get Your Custom Quote
          </h2>
          <p className="text-xl text-gray-600">
            Answer a few questions to get an accurate estimate for your AI automation build.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <Label htmlFor="businessType" className="text-sm font-semibold text-gray-900 mb-3">
                  Business Type
                </Label>
                <Select onValueChange={(value) => setValue("businessType", value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your business type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="service">Service Business (HVAC, Plumbing, etc.)</SelectItem>
                    <SelectItem value="healthcare">Healthcare/Dental</SelectItem>
                    <SelectItem value="retail">Retail/E-commerce</SelectItem>
                    <SelectItem value="restaurant">Restaurant/Food Service</SelectItem>
                    <SelectItem value="professional">Professional Services</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.businessType && (
                  <p className="text-red-500 text-sm mt-1">{errors.businessType.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="callVolume" className="text-sm font-semibold text-gray-900 mb-3">
                  Monthly Call Volume
                </Label>
                <Select onValueChange={(value) => setValue("callVolume", value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select call volume" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">0-100 calls/month</SelectItem>
                    <SelectItem value="medium">100-500 calls/month</SelectItem>
                    <SelectItem value="high">500+ calls/month</SelectItem>
                  </SelectContent>
                </Select>
                {errors.callVolume && (
                  <p className="text-red-500 text-sm mt-1">{errors.callVolume.message}</p>
                )}
              </div>
              
              <div>
                <Label className="text-sm font-semibold text-gray-900 mb-3">Automation Needs</Label>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="callAnswering"
                      checked={features.callAnswering}
                      onCheckedChange={(checked) => 
                        setValue("features.callAnswering", checked as boolean)
                      }
                    />
                    <Label htmlFor="callAnswering" className="text-gray-700">
                      Call answering & screening
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="booking"
                      checked={features.booking}
                      onCheckedChange={(checked) => 
                        setValue("features.booking", checked as boolean)
                      }
                    />
                    <Label htmlFor="booking" className="text-gray-700">
                      Appointment booking
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="sms"
                      checked={features.sms}
                      onCheckedChange={(checked) => 
                        setValue("features.sms", checked as boolean)
                      }
                    />
                    <Label htmlFor="sms" className="text-gray-700">
                      SMS automation
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="crm"
                      checked={features.crm}
                      onCheckedChange={(checked) => 
                        setValue("features.crm", checked as boolean)
                      }
                    />
                    <Label htmlFor="crm" className="text-gray-700">
                      CRM integration
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="multilocation"
                      checked={features.multilocation}
                      onCheckedChange={(checked) => 
                        setValue("features.multilocation", checked as boolean)
                      }
                    />
                    <Label htmlFor="multilocation" className="text-gray-700">
                      Multi-location support
                    </Label>
                  </div>
                </div>
              </div>
              
              <div>
                <Label className="text-sm font-semibold text-gray-900 mb-3">Contact Information</Label>
                <div className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Your Name" 
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Email Address" 
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <Input 
                      type="tel" 
                      placeholder="Phone Number" 
                      {...register("phone")}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gray-50 rounded-xl">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-gray-900">Estimated Build Cost:</span>
                <span className="text-2xl font-bold text-primary">{estimatedCost}</span>
              </div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-semibold text-gray-900">Recommended Maintenance:</span>
                <span className="text-xl font-semibold text-success">{maintenancePlan}</span>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary text-white hover:bg-primary/90 text-lg py-4"
                disabled={submitQuoteMutation.isPending}
              >
                {submitQuoteMutation.isPending ? "Submitting..." : "Get Detailed Quote"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
