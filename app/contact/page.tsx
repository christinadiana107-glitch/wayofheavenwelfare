"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { DonationModal, PaymentMethod } from "@/components/donation-modal";
import { WelcomePopup } from "@/components/welcome-popup";
import { FloatingDonateButton } from "@/components/floating-donate-button";
import { FadeIn } from "@/components/ui/fade-in";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Facebook, Heart, Building2, MessageCircle, Check, Copy } from "lucide-react";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ContactPage() {
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [copyingField, setCopyingField] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>("UBL");
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

  const handleDonateClick = () => {
    setIsDonateModalOpen(true);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "923325892922"; // WhatsApp number without + and spaces
    const message = "Hello! I would like to know more about Way of Heaven Welfare Organization and how I can help.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

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
    <main className="min-h-screen">
      <Navigation onDonateClick={handleDonateClick} />

      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Contact Us</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto text-pretty">
              Partner with us today. Together, we can transform lives.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Details */}
          <div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Get in Touch</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We'd love to hear from you. Reach out to us for partnerships, volunteer opportunities, or any questions about our work.
              </p>
            </div>
            <div className="space-y-8 flex gap-4 max-md:flex-col w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:grid-cols-2">
                {/* Address */}
                <Card className="h-full flex flex-col justify-between hover:shadow-xl transition-all duration-500 hover:scale-105">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">Office Address</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Building 37C, Lane 3, Rahat Commercial,
                      <br />
                      DHA Phase 6, Karachi 75500, Sindh, Pakistan
                    </p>
                  </CardContent>
                </Card>

                {/* WhatsApp */}
                <Card
                  className="h-full flex flex-col justify-between hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer"
                  onClick={handleWhatsAppClick}
                >
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 group-hover:scale-110 transition-all duration-300">
                        <MessageCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <CardTitle className="text-lg">WhatsApp</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-muted-foreground">Chat with us instantly on WhatsApp</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-green-200 text-green-600 hover:bg-green-50 hover:border-green-300 hover:scale-105 transition-all duration-300 bg-transparent"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleWhatsAppClick();
                      }}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Start Chat
                    </Button>
                  </CardContent>
                </Card>

                {/* Phone */}
                <Card className="h-fit flex flex-col justify-between hover:shadow-xl transition-all duration-500 hover:scale-105">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-300">
                        <Phone className="w-6 h-6 text-secondary" />
                      </div>
                      <CardTitle className="text-lg">Phone</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <a href="tel:+923325892922" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                      +92 332 5892922
                    </a>
                  </CardContent>
                </Card>

                {/* Email */}
                <Card className="h-fit flex flex-col justify-between hover:shadow-xl transition-all duration-500 hover:scale-105">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">Email</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <a href="mailto:wayofheavenwelfare@gmail.com" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                      wayofheavenwelfare@gmail.com
                    </a>
                  </CardContent>
                </Card>

                {/* Social Media */}
                <Card className=" h-fit flex flex-col justify-between hover:shadow-xl transition-all duration-500 hover:scale-105 md:col-span-2">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-300">
                        <Facebook className="w-6 h-6 text-secondary" />
                      </div>
                      <CardTitle className="text-lg">Follow Us</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex space-x-6">
                      <a
                        href="https://www.facebook.com/share/14NzhSrEPDx/?mibextid=wwXIfr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        Facebook
                      </a>
                      <a
                        href="https://youtube.com/@wohco?si=rpfHUIf3IZTRHU4u"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        YouTube
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
              {/* Donation Information Card */}
              <FadeIn direction="right" delay={200} className="mt-">
                <Card className="h-fit hover:shadow-xl transition-all duration-500 p-4">
                  <div className="space-y-2 animate-in slide-in-from-bottom duration-500 delay-200">
                    <div className="flex items-center space-x-2 mb-4">
                      <Building2 className="w-5 h-5 text-primary" />
                      <h3 className="text-lg font-semibold">Bank Details</h3>
                    </div>

                    <div className="space-y-2 animate-in slide-in-from-left duration-300 delay-400">
                      <label className="text-sm font-medium text-muted-foreground">Bank Name</label>

                      <Select defaultValue="UBL" onValueChange={(e) => setPaymentMethod(e as PaymentMethod)}>
                        <SelectTrigger
                          value={"UBL"}
                          className="w-full h-full min-h-14 flex items-center justify-between p-3 bg-primary/5 border border-primary/20 rounded-lg hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10 text-base font-medium"
                        >
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
                              United Bank Limited (UBL) - Zakat Account
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

                    <div className="mt-6 space-y-2">
                      <p className="text-sm text-muted-foreground text-center">
                        Every donation helps us provide food, education, healthcare, and spiritual support to families in need.
                      </p>
                    </div>
                  </div>
                  {/* <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Donate to Support</CardTitle>
                      <CardDescription>Your contribution makes a real difference</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg space-y-3 hover:bg-muted/70 transition-colors duration-300">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Bank Name</p>
                      <p className="font-semibold">United Bank Limited (UBL)</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Account Number</p>
                      <p className="font-mono font-semibold">9000333669185</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Account Title</p>
                      <p className="font-semibold">Way of Heaven Welfare Organization</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">IBAN</p>
                      <p className="font-mono font-semibold text-primary">PK95 UNIL 0109 0003 3366 9185</p>
                    </div>
                  </div>

                  <Button
                    onClick={handleDonateClick}
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground hover:scale-105 hover:shadow-lg transition-all duration-300 group"
                    size="lg"
                  >
                    <Heart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    Donate Now
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Every donation helps us provide food, education, healthcare, and spiritual support to families in
                    need.
                  </p>
                </CardContent> */}
                </Card>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <WelcomePopup onDonateClick={handleDonateClick} />
      <DonationModal isOpen={isDonateModalOpen} onClose={() => setIsDonateModalOpen(false)} />

      <FloatingDonateButton onClick={handleDonateClick} />
    </main>
  );
}
