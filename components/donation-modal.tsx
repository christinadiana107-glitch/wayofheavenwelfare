"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { SuccessAnimation } from "@/components/ui/success-animation";
import { X, Heart, Copy, Check, CreditCard, Building2 } from "lucide-react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export type PaymentMethod = "UBL" | "MBL" | "UBL2";

export function DonationModal({ isOpen, onClose }: DonationModalProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [copyingField, setCopyingField] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = async (text: string, field: string) => {
    try {
      setCopyingField(field);
      await navigator.clipboard.writeText(text);
      setCopyingField(null);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
      setCopyingField(null);
    }
  };

  const bankDetails = {
    bankName: "United Bank Limited (UBL)",
    accountNumber: "9000333669185",
    accountTitle: "Way of Heaven Welfare Organization",
    iban: "PK95 UNIL 0109 0003 3366 9185",
  };

  const ublDetails2 = {
    bankName: "United Bank Limited (UBL)",
    accountNumber: "9000377928181",
    accountTitle: "Way of Heaven Welfare Organization",
    iban: "PK61 UNIL 0109 0003 7792 8181",
  };

  const meezanDetails = {
    bankName: "Meezan Bank Limited (MBL)",
    accountNumber: "01960114251920",
    accountTitle: "Way of Heaven Welfare Organization",
    iban: "PK40 MEZN 0001 9601 1425 1920",
  };

  const renderCopyButton = (field: string, text: string) => (
    <Button
      size="sm"
      variant="ghost"
      onClick={() => copyToClipboard(text, field)}
      className="h-8 w-8 p-0 hover:scale-110 transition-all duration-300"
      disabled={copyingField === field}
    >
      {copyingField === field ? (
        <LoadingSpinner size="sm" />
      ) : copiedField === field ? (
        <Check className="w-4 h-4 text-green-600 animate-in zoom-in duration-200" />
      ) : (
        <Copy className="w-4 h-4 group-hover:text-primary transition-colors duration-300" />
      )}
    </Button>
  );

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={() => {
        onClose();
        setPaymentMethod(null);
      }}
    >
      <Card
        className="w-full max-w-lg max-h-[90vh] overflow-y-auto animate-in zoom-in-95 slide-in-from-bottom-4 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <CardHeader className="relative">
          {/* Close Button styled like WelcomePopup */}
          <button
            onClick={() => {
              onClose();
              setPaymentMethod(null);
            }}
            className="absolute right-2 top-0 z-10 p-2 rounded-full transition-colors bg-gray-600 opacity-80 backdrop-blur-2xl hover:bg-gray-700 focus:bg-gray-700 shadow-lg ring-2 ring-gray-300 hover:ring-gray-400 focus:ring-gray-500"
            style={{ zIndex: 10 }}
            aria-label="Close"
          >
            <X className="w-5 h-5 text-white" />
          </button>
          <div className="flex items-center space-x-3 mb-2 animate-in slide-in-from-left duration-500">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-secondary/20 hover:scale-110 transition-all duration-300">
              <Heart className="w-6 h-6 text-secondary animate-pulse" />
            </div>
            <div>
              <CardTitle className="text-2xl">Donate Now</CardTitle>
              <CardDescription>Your generosity brings hope, healing, and transformation.</CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Success Message */}
          {copiedField && (
            <SuccessAnimation
              show={!!copiedField}
              message={`${copiedField === "iban" ? "IBAN" : copiedField === "bankName" ? "Bank Name" : copiedField === "accountNumber" ? "Account Number" : "Account Title"} copied successfully!`}
              className="justify-center"
            />
          )}

          {/* Inspirational Message */}
          <div className="bg-gradient-to-r from-secondary/10 to-primary/10 p-4 rounded-lg border border-secondary/20 animate-in slide-in-from-right duration-500 delay-100 hover:shadow-lg transition-all duration-300">
            <p className="text-center text-foreground font-medium mb-2">Take Part in the Change You Hope to See</p>
            <p className="text-center text-muted-foreground text-sm">Donate for a Good Cause</p>
          </div>

          {/* Bank Details */}
          <div className="space-y-2 animate-in slide-in-from-bottom duration-500 delay-200">
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Bank Details</h3>
            </div>

            <div className="space-y-2 animate-in slide-in-from-left duration-300 delay-400">
              <label className="text-sm font-medium text-muted-foreground">Bank Name</label>

              <Select onValueChange={(e) => setPaymentMethod(e as PaymentMethod)}>
                <SelectTrigger className="w-full h-full min-h-14 flex items-center justify-between p-3 bg-primary/5 border border-primary/20 rounded-lg hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10 text-base font-medium">
                  <SelectValue placeholder="Select a bank" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="MBL" className="font-medium">
                      Meezan Bank Limited (MBL)
                    </SelectItem>
                    <SelectItem value="UBL" className="font-medium">
                      United Bank Limited (UBL)
                    </SelectItem>
                    <SelectItem value="UBL2" className="font-medium">
                      United Bank Limited (UBL) - ZAKAT Account
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {!paymentMethod && <p className="text-gray-400 text-center">------ Select a bank to view details ------</p>}
            {paymentMethod === "UBL" && (
              <>
                {/* Account Number */}
                <div className="space-y-2 animate-in slide-in-from-left duration-300 delay-400">
                  <label className="text-sm font-medium text-muted-foreground">Account Number</label>
                  <div className="flex items-center justify-between p-3 bg-primary/5 border border-primary/20 rounded-lg hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10">
                    <span className="font-mono font-medium">{bankDetails.accountNumber}</span>
                    {renderCopyButton("accountNumber", bankDetails.accountNumber)}
                  </div>
                </div>

                {/* Account Title */}
                <div className="space-y-2 animate-in slide-in-from-left duration-300 delay-500">
                  <label className="text-sm font-medium text-muted-foreground">Account Title</label>
                  <div className="flex items-center justify-between p-3 bg-primary/5 border border-primary/20 rounded-lg hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10">
                    <span className="font-medium">{bankDetails.accountTitle}</span>
                    {renderCopyButton("accountTitle", bankDetails.accountTitle)}
                  </div>
                </div>

                {/* IBAN */}
                <div className="space-y-2 animate-in slide-in-from-left duration-300 delay-600">
                  <label className="text-sm font-medium text-muted-foreground">IBAN</label>
                  <div className="flex items-center justify-between p-3 bg-primary/5 border border-primary/20 rounded-lg hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10">
                    <span className="font-mono font-medium text-primary">{bankDetails.iban}</span>
                    {renderCopyButton("iban", bankDetails.iban)}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4 animate-in slide-in-from-bottom duration-500 delay-800">
                  <Button
                    onClick={() => copyToClipboard(bankDetails.iban, "iban")}
                    className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground hover:scale-105 hover:shadow-lg hover:shadow-secondary/25 transition-all duration-300 group relative overflow-hidden"
                    disabled={copyingField === "iban"}
                  >
                    {copyingField === "iban" ? (
                      <LoadingSpinner size="sm" className="mr-2" />
                    ) : (
                      <Copy className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    )}
                    {copyingField === "iban" ? "Copying..." : "Copy IBAN"}
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                  </Button>
                </div>
              </>
            )}
            {paymentMethod === "MBL" && (
              <>
                {/* Account Number */}
                <div className="space-y-2 animate-in slide-in-from-left duration-300 delay-400">
                  <label className="text-sm font-medium text-muted-foreground">Account Number</label>
                  <div className="flex items-center justify-between p-3 bg-primary/5 border border-primary/20 rounded-lg hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10">
                    <span className="font-mono font-medium">{meezanDetails.accountNumber}</span>
                    {renderCopyButton("accountNumber", meezanDetails.accountNumber)}
                  </div>
                </div>

                {/* Account Title */}
                <div className="space-y-2 animate-in slide-in-from-left duration-300 delay-500">
                  <label className="text-sm font-medium text-muted-foreground">Account Title</label>
                  <div className="flex items-center justify-between p-3 bg-primary/5 border border-primary/20 rounded-lg hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10">
                    <span className="font-medium">{meezanDetails.accountTitle}</span>
                    {renderCopyButton("accountTitle", meezanDetails.accountTitle)}
                  </div>
                </div>

                {/* IBAN */}
                <div className="space-y-2 animate-in slide-in-from-left duration-300 delay-600">
                  <label className="text-sm font-medium text-muted-foreground">IBAN</label>
                  <div className="flex items-center justify-between p-3 bg-primary/5 border border-primary/20 rounded-lg hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10">
                    <span className="font-mono font-medium text-primary">{meezanDetails.iban}</span>
                    {renderCopyButton("iban", meezanDetails.iban)}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 animate-in slide-in-from-bottom duration-500 delay-800">
                  <Button
                    onClick={() => copyToClipboard(meezanDetails.iban, "iban")}
                    className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground hover:scale-105 hover:shadow-lg hover:shadow-secondary/25 transition-all duration-300 group relative overflow-hidden"
                    disabled={copyingField === "iban"}
                  >
                    {copyingField === "iban" ? (
                      <LoadingSpinner size="sm" className="mr-2" />
                    ) : (
                      <Copy className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    )}
                    {copyingField === "iban" ? "Copying..." : "Copy IBAN"}
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                  </Button>
                </div>
              </>
            )}
            {paymentMethod === "UBL2" && (
              <>
                {/* Account Number */}
                <div className="space-y-2 animate-in slide-in-from-left duration-300 delay-400">
                  <label className="text-sm font-medium text-muted-foreground">Account Number</label>
                  <div className="flex items-center justify-between p-3 bg-primary/5 border border-primary/20 rounded-lg hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10">
                    <span className="font-mono font-medium">{ublDetails2.accountNumber}</span>
                    {renderCopyButton("accountNumber", ublDetails2.accountNumber)}
                  </div>
                </div>

                {/* Account Title */}
                <div className="space-y-2 animate-in slide-in-from-left duration-300 delay-500">
                  <label className="text-sm font-medium text-muted-foreground">Account Title</label>
                  <div className="flex items-center justify-between p-3 bg-primary/5 border border-primary/20 rounded-lg hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10">
                    <span className="font-medium">{ublDetails2.accountTitle}</span>
                    {renderCopyButton("accountTitle", ublDetails2.accountTitle)}
                  </div>
                </div>

                {/* IBAN */}
                <div className="space-y-2 animate-in slide-in-from-left duration-300 delay-600">
                  <label className="text-sm font-medium text-muted-foreground">IBAN</label>
                  <div className="flex items-center justify-between p-3 bg-primary/5 border border-primary/20 rounded-lg hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10">
                    <span className="font-mono font-medium text-primary">{ublDetails2.iban}</span>
                    {renderCopyButton("iban", ublDetails2.iban)}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 animate-in slide-in-from-bottom duration-500 delay-800">
                  <Button
                    onClick={() => copyToClipboard(ublDetails2.iban, "iban")}
                    className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground hover:scale-105 hover:shadow-lg hover:shadow-secondary/25 transition-all duration-300 group relative overflow-hidden"
                    disabled={copyingField === "iban"}
                  >
                    {copyingField === "iban" ? (
                      <LoadingSpinner size="sm" className="mr-2" />
                    ) : (
                      <Copy className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    )}
                    {copyingField === "iban" ? "Copying..." : "Copy IBAN"}
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                  </Button>
                </div>
              </>
            )}
          </div>

          {/* Impact Message */}
          <div className="bg-secondary/10 p-4 rounded-lg border border-secondary/20 hover:bg-secondary/15 hover:border-secondary/30 transition-all duration-300 animate-in slide-in-from-right duration-500 delay-700">
            <div className="flex items-start space-x-3">
              <CreditCard className="w-5 h-5 text-secondary mt-0.5" />
              <div>
                <p className="font-medium text-foreground mb-1">Your Impact</p>
                <p className="text-sm text-muted-foreground">
                  Every donation helps us provide food, education, healthcare, and financial support to families in need across Pakistan.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 animate-in slide-in-from-bottom duration-500 delay-800">
            <Button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onClose();
              }}
              variant="outline"
              className="flex-1 bg-transparent hover:scale-105 transition-all duration-300"
            >
              Close
            </Button>
          </div>

          {/* Contact Info */}
          <div className="text-center pt-4 border-t border-border animate-in fade-in duration-500 delay-1000">
            <p className="text-sm text-muted-foreground mb-2">Need help with your donation?</p>
            <p className="text-sm font-medium hover:text-primary transition-colors duration-300 cursor-pointer">Contact us: +92 332 5892922</p>
            <p className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">wohcm48@gmail.com</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
