import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Mail, Phone, Building, DollarSign, Settings, Search, Download } from "lucide-react";
import { format } from "date-fns";

interface QuoteRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  businessType: string;
  callVolume: string;
  features: {
    crm: boolean;
    sms: boolean;
    booking: boolean;
    callAnswering: boolean;
    multilocation: boolean;
  };
  preferredAutomationPlatform: string;
  preferredLLM: string;
  estimatedCost: string;
  maintenancePlan: string;
  message: string;
  createdAt: string;
}

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState("");

  const { data: quoteRequests, isLoading: quotesLoading } = useQuery<{ success: boolean; data: QuoteRequest[] }>({
    queryKey: ["/api/quote-requests"],
  });

  const { data: contactMessages, isLoading: contactsLoading } = useQuery<{ success: boolean; data: ContactMessage[] }>({
    queryKey: ["/api/contact-messages"],
  });

  const quotes = quoteRequests?.data || [];
  const contacts = contactMessages?.data || [];

  const filteredQuotes = quotes.filter(quote =>
    quote.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    quote.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    quote.businessType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const exportToCSV = (data: any[], filename: string) => {
    const csvContent = [
      Object.keys(data[0] || {}).join(","),
      ...data.map(row => Object.values(row).map(value => 
        typeof value === 'object' ? JSON.stringify(value) : `"${value}"`
      ).join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const getFeaturesList = (features: QuoteRequest['features']) => {
    return Object.entries(features)
      .filter(([_, enabled]) => enabled)
      .map(([feature, _]) => feature.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage customer inquiries and quote requests</p>
        </div>

        {/* Search and Actions */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search customers, emails, or business types..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => exportToCSV(quotes, "quote-requests.csv")}
              disabled={quotes.length === 0}
            >
              <Download className="w-4 h-4 mr-2" />
              Export Quotes
            </Button>
            <Button
              variant="outline"
              onClick={() => exportToCSV(contacts, "contact-messages.csv")}
              disabled={contacts.length === 0}
            >
              <Download className="w-4 h-4 mr-2" />
              Export Contacts
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Quote Requests</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{quotes.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Contact Messages</CardTitle>
              <Mail className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{contacts.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Potential Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${quotes.reduce((sum, quote) => {
                  const cost = parseInt(quote.estimatedCost.replace(/[^0-9]/g, '')) || 0;
                  return sum + cost;
                }, 0).toLocaleString()}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Revenue Potential</CardTitle>
              <Settings className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${quotes.reduce((sum, quote) => {
                  const monthlyMatch = quote.maintenancePlan.match(/\$(\d+)/);
                  const monthly = monthlyMatch ? parseInt(monthlyMatch[1]) : 0;
                  return sum + monthly;
                }, 0).toLocaleString()}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Data Tables */}
        <Tabs defaultValue="quotes" className="space-y-4">
          <TabsList>
            <TabsTrigger value="quotes">Quote Requests ({filteredQuotes.length})</TabsTrigger>
            <TabsTrigger value="contacts">Contact Messages ({filteredContacts.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="quotes" className="space-y-4">
            {quotesLoading ? (
              <div className="text-center py-8">Loading quote requests...</div>
            ) : filteredQuotes.length === 0 ? (
              <Card>
                <CardContent className="text-center py-8">
                  <p className="text-gray-500">No quote requests found.</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-6">
                {filteredQuotes.map((quote) => (
                  <Card key={quote.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <CardTitle className="text-lg">{quote.name}</CardTitle>
                          <CardDescription className="flex items-center gap-4 mt-1">
                            <span className="flex items-center gap-1">
                              <Mail className="w-4 h-4" />
                              {quote.email}
                            </span>
                            <span className="flex items-center gap-1">
                              <Phone className="w-4 h-4" />
                              {quote.phone}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {format(new Date(quote.createdAt), "MMM dd, yyyy 'at' h:mm a")}
                            </span>
                          </CardDescription>
                        </div>
                        <div className="flex gap-2 mt-2 sm:mt-0">
                          <Badge variant="secondary">{quote.estimatedCost}</Badge>
                          <Badge variant="outline">{quote.maintenancePlan}</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Building className="w-4 h-4 text-gray-500" />
                            <span className="font-medium">Business:</span>
                            <span className="capitalize">{quote.businessType}</span>
                          </div>
                          <div>
                            <span className="font-medium">Call Volume:</span>
                            <Badge variant="outline" className="ml-2 capitalize">{quote.callVolume}</Badge>
                          </div>
                          <div>
                            <span className="font-medium">Selected Features:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {getFeaturesList(quote.features).map((feature) => (
                                <Badge key={feature} variant="secondary" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <span className="font-medium">Preferred Platform:</span>
                            <Badge variant="outline" className="ml-2">{quote.preferredAutomationPlatform}</Badge>
                          </div>
                          <div>
                            <span className="font-medium">Preferred AI Model:</span>
                            <Badge variant="outline" className="ml-2 capitalize">{quote.preferredLLM}</Badge>
                          </div>
                          {quote.message && (
                            <div>
                              <span className="font-medium">Additional Message:</span>
                              <p className="text-sm text-gray-600 mt-1 p-2 bg-gray-50 rounded">{quote.message}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="contacts" className="space-y-4">
            {contactsLoading ? (
              <div className="text-center py-8">Loading contact messages...</div>
            ) : filteredContacts.length === 0 ? (
              <Card>
                <CardContent className="text-center py-8">
                  <p className="text-gray-500">No contact messages found.</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4">
                {filteredContacts.map((contact) => (
                  <Card key={contact.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <CardTitle className="text-lg">{contact.name}</CardTitle>
                          <CardDescription className="flex items-center gap-4 mt-1">
                            <span className="flex items-center gap-1">
                              <Mail className="w-4 h-4" />
                              {contact.email}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {format(new Date(contact.createdAt), "MMM dd, yyyy 'at' h:mm a")}
                            </span>
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-700 whitespace-pre-wrap">{contact.message}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}