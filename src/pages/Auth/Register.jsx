import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../component/ui/form";
import { Button } from "../../component/ui/Button";
import { Input } from "../../component/ui/Input";
import { Link } from "react-router-dom";
import { Eye, EyeOff, ShieldIcon, UserIcon, WorkflowIcon } from "lucide-react";
import HeroSection from "../../component/layouts/HeroSection";
import { Label } from "@radix-ui/react-label";
import {
  MultiSelect,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../component/ui/Select";
import axiosInstance from "../../lib/axiosInstance";
// import axiosInstance from "../../lib/axiosInstance";

export const Register = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [valError, setValError] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [IsShowSecretKeyInput, setIsShowSecretKeyInput] = useState(false);
  const [selectedRole, setSelectedRole] = useState("ROLE_USER");
  const [selectedTraits, setSelectedTraits] = useState([]);
  const buttonRef = useRef(null);
  const form = useForm({
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      role: "ROLE_USER",
      key: "",
    },
  });

  // eslint-disable-next-line no-unused-vars
  const handleSignUp = async () => {
    try {
      setIsDisabled(true);
      //  e.preventDefault();
    console.log('Form submitted with data:', { 
      ...form.getValues(), 
      role: selectedRole,
      traits: selectedTraits
    });


    const response = await axiosInstance.post("/auth/register", {
      ...form.getValues(),
      role: selectedRole,
      traits: selectedTraits
    });

      const { status } = response;
      console.log("Registration successful:", response.data);
      if (status === 200) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      // setValError(`Error: ${error || error.message}`);
    } finally {
      setIsDisabled(false);
      buttonRef.current.blur();
    }
  };

   
  const handleRoleChange = (value) => {
    setSelectedRole(value);
    setIsShowSecretKeyInput(value === "ROLE_ADMIN");
  };

  const handleSignIn = () => {
    navigate("/login");
  };

  // const [valError, setValError] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <Form {...form}>
      <div className="min-h-screen w-full flex bg-gray-50">
        <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 bg-background">
          <div className="md:hidden w-full max-w-md mb-8">
            <HeroSection onlyText className="text-center" />
          </div>
          <div className="w-full max-w-md p-8 space-y-6 bg-background rounded-lg shadow-lg mt-2">
            <div className="space-y-2 text-center">
              <h1 className="text-2xl font-bold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your details to get started
              </p>
            </div>

            <form
              onSubmit={form.handleSubmit(handleSignUp)}
              className="space-y-4"
            >
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="intern-form_label">
                        Full Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          className="text-md"
                          placeholder="Mohini Mahajan"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="intern-form_label">
                        Username
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          className="text-md"
                          placeholder="mohinim"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="intern-form_label">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          className="text-md"
                          placeholder="mohinime@gmail.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="intern-form_label">
                        Password
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showPassword ? "text" : "password"}
                            className="text-md pr-10"
                            placeholder="••••••••"
                            {...field}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
                            tabIndex={-1}
                          >
                            {showPassword ? (
                              <EyeOff size={18} />
                            ) : (
                              <Eye size={18} />
                            )}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Select Role</Label>
                <Select
                  value={selectedRole}
                  onValueChange={handleRoleChange}
                  required
                >
                  <SelectTrigger id="role">
                    <SelectValue placeholder="Choose your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ROLE_USER">
                      <div className="flex items-center gap-2">
                        <UserIcon className="h-4 w-4" />
                        <div className="flex flex-col">
                          <span>User</span>
                          <span className="text-xs text-muted-foreground">
                            Standard access
                          </span>
                        </div>
                      </div>
                    </SelectItem>
                    <SelectItem value="ROLE_ADMIN">
                      <div className="flex items-center gap-2">
                        <ShieldIcon className="h-4 w-4" />
                        <div className="flex flex-col">
                          <span>Administrator</span>
                          <span className="text-xs text-muted-foreground">
                            Full system access
                          </span>
                        </div>
                      </div>
                    </SelectItem>
                    <SelectItem value="ROLE_SERVICE_PROVIDER">
                      <div className="flex items-center gap-2">
                        <WorkflowIcon className="h-4 w-4" />
                        <div className="flex flex-col">
                          <span>Service Provider</span>
                          <span className="text-xs text-muted-foreground">
                            Standard access
                          </span>
                        </div>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              { selectedRole === "ROLE_SERVICE_PROVIDER" && (
                <div className="space-y-2">
                <Label htmlFor="traits">Service Provider Traits</Label>
                <MultiSelect
                  values={selectedTraits}
                  onValuesChange={setSelectedTraits}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select traits" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Dog Walking">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Dog Walking</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="Pet Sitting">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Pet Sitting</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="Grooming">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Grooming</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="Veterinarian">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Veterinarian</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </MultiSelect>
              </div>)}

              {IsShowSecretKeyInput && (
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="key"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="intern-form_label">
                          Secret Key
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            className="text-md"
                            placeholder="Secret Key"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {valError && (
                <Alert variant="default" className="text-[red]">
                  <AlertDescription className="text-[red]">
                    {valError}
                  </AlertDescription>
                </Alert>
              )}

              <Button
                type="submit"
                className="w-full bg-indigo-600 text-white  font-bold"
                disabled={isDisabled}
                ref={buttonRef}
              >
                Sign Up
              </Button>

              <div className="text-center space-x-1">
                <span className="text-sm text-muted-foreground">
                  Already have an account?
                </span>
                <button
                  type="button"
                  onClick={handleSignIn}
                  className="text-sm font-medium hover:underline"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="px-8 text-center text-sm text-muted-foreground">
              By signing up, you agree to our{" "}
              <Link
                to="/terms-and-conditions"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link
                to="/privacy-policy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="flex-1 hidden md:block">
          <HeroSection />
        </div>
      </div>
    </Form>
  );
};
