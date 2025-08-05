import { Link, useNavigate } from "react-router";
import React, { useEffect, useRef } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../component/ui/form";
import { useForm } from "react-hook-form";
import { Button } from "../../component/ui/Button";
import { Input } from "../../component/ui/Input";
import { Eye, EyeOff } from "lucide-react";
import HeroSection from "../../component/layouts/HeroSection";
// import { getUserDataFromToken } from "../../lib/utils";

export const Login = () => {
  const navigate = useNavigate();

  const [isDisabled, setIsDisabled] = React.useState(false);
  const buttonRef = useRef(null);

  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });


  useEffect(() => {
    // navigate("/home");
  }, [navigate]);

  const handleSignIn = async () => {
    setIsDisabled(true);
    if (buttonRef.current) {
      buttonRef.current.disabled = true;
    }
    try {
      // Simulate an API call to sign in 
    } catch (error) {
      console.error("Sign in error:", error);
    } finally {
      setIsDisabled(false);
      if (buttonRef.current) {
        buttonRef.current.disabled = false;
      }
    }
  };

  const handleSignUp = () => {
    navigate("/register");
  };

  // const [valError, setValError] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <Form {...form}>
      <div className="min-h-screen w-full flex bg-background">
        <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 bg-background md:bg-background">
          <div className="md:hidden w-full max-w-md mb-8 flex justify-center">
            <HeroSection onlyText className="text-center" />
          </div>
          <div className="w-full max-w-md p-8 space-y-6 bg-background rounded-lg shadow-lg mt-2">
            <div className="space-y-2 text-center">
              <h1 className="text-2xl font-bold tracking-tight">
                Welcome back
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your credentials to access your account
              </p>
            </div>

            <form
              onSubmit={form.handleSubmit(handleSignIn)}
              className="space-y-4"
            >
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="shad-form_label">
                        Username
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          className="text-md"
                          placeholder="mohinim@gmail"
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
                      <FormLabel className="shad-form_label">
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
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent text-muted-foreground"
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

              {/* {error && (
                <div variant="destructive">
                  <div>{error}</div>
                </div>
              )} */}

              <Button
                type="submit"
                className="w-full"
                disabled={isDisabled}
                onClick={handleSignIn}
                ref={buttonRef}
              >
                Sign In
              </Button>

              <div className="text-center space-x-1">
                <span className="text-sm text-muted-foreground">
                  Don't have an account?
                </span>
                <button
                  type="button"
                  onClick={handleSignUp}
                  className="text-sm font-medium hover:underline"
                >
                  Sign up
                </button>
              </div>
            </form>

            <p className="px-8 text-center text-sm text-muted-foreground">
              By signing in, you agree to our{" "}
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
        <div className="flex-1 h-screen hidden md:block">
          <HeroSection />
        </div>
      </div>
    </Form>
  );
};
