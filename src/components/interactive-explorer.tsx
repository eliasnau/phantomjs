"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlertCircle,
  CheckCircle2,
  Copy,
  Key,
  UserPlus,
  Users,
} from "lucide-react";

export function InteractiveFeatureExplorer() {
  const [activeFeature, setActiveFeature] = useState("auth");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [userRole, setUserRole] = useState("");
  const [apiEndpoint, setApiEndpoint] = useState("");
  const [apiResponse, setApiResponse] = useState("");

  const demoPassword = "phantom123";
  const demoToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

  const apiEndpoints = ["/api/users", "/api/posts", "/api/comments"];

  const simulateAuth = () => {
    if (username && password === demoPassword) {
      setToken(demoToken);
      setApiResponse(
        "Authentication successful! Use the token for other operations."
      );
    } else {
      setApiResponse("Authentication failed. Please use the demo password.");
    }
  };

  const simulateRBAC = () => {
    if (token && userRole) {
      if (userRole === "admin") {
        setApiResponse("Access granted to admin dashboard.");
      } else {
        setApiResponse("Access granted to user dashboard.");
      }
    } else {
      setApiResponse("Please authenticate and select a user role.");
    }
  };

  const simulateAPI = () => {
    if (token && apiEndpoint) {
      setApiResponse(
        `API request to ${apiEndpoint} successful. Sample response: { "status": "success", "data": [...] }`
      );
    } else {
      setApiResponse("Please authenticate and select an API endpoint.");
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto bg-background border-primary/10">
      <CardHeader>
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Interactive Feature Explorer
        </CardTitle>
        <CardDescription>
          Experience Phantom Starter&apos;s key features firsthand
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeFeature} onValueChange={setActiveFeature}>
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="auth">Authentication</TabsTrigger>
            <TabsTrigger value="rbac">Role-Based Access</TabsTrigger>
            <TabsTrigger value="api">API Integration</TabsTrigger>
          </TabsList>
          <TabsContent value="auth">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                  type="password"
                  placeholder="Password (Use: phantom123)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button
                onClick={simulateAuth}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Key className="mr-2 h-4 w-4" /> Authenticate
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="rbac">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="JWT Token"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                />
                <select
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  value={userRole}
                  onChange={(e) => setUserRole(e.target.value)}
                >
                  <option value="">Select Role</option>
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <Button
                onClick={simulateRBAC}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Users className="mr-2 h-4 w-4" /> Check Access
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="api">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="JWT Token"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                />
                <select
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  value={apiEndpoint}
                  onChange={(e) => setApiEndpoint(e.target.value)}
                >
                  <option value="">Select API Endpoint</option>
                  {apiEndpoints.map((endpoint) => (
                    <option key={endpoint} value={endpoint}>
                      {endpoint}
                    </option>
                  ))}
                </select>
              </div>
              <Button
                onClick={simulateAPI}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <UserPlus className="mr-2 h-4 w-4" /> Make API Request
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <div className="font-mono text-sm bg-muted p-4 rounded-md w-full overflow-x-auto">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold">Response:</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => copyToClipboard(apiResponse)}
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <p className="whitespace-pre-wrap">{apiResponse}</p>
        </div>
        {token && (
          <div className="mt-4 text-sm text-muted-foreground">
            <CheckCircle2 className="inline-block mr-2 h-4 w-4 text-green-500" />
            Authenticated
          </div>
        )}
        {!token && activeFeature !== "auth" && (
          <div className="mt-4 text-sm text-muted-foreground">
            <AlertCircle className="inline-block mr-2 h-4 w-4 text-yellow-500" />
            Please authenticate first
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
