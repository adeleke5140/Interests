import { supabaseClient } from "../client"
import { AuthBindings } from "@refinedev/core";
import { AuthActionResponse } from "@refinedev/core/dist/interfaces";
import { notificationProvider as notification } from "../../../notification";


export const authProvider: AuthBindings = {
  login: async ({ email, password, providerName }): Promise<AuthActionResponse> => {
    try {
      if (providerName) {
        const { data, error } = await supabaseClient.auth.signInWithOAuth({
          provider: providerName,
        })
        if (error) {
          return {
            success: false,
            error
          }
        }
        if (data?.url) {
          return {
            success: true,
          }
        }
      }

      const { data, error } = await supabaseClient.auth.signInWithPassword({
        email,
        password
      })

      if (error) {
        return {
          success: false,
          error
        }
      }
      if (data?.user) {
        return {
          success: true,
          redirectTo: '/create'
        }
      }

      return {
        success: false,
        error: {
          message: 'Login Failed',
          name: 'Inalid email or password'
        }
      }

    } catch (err: any) {
      return {
        success: false,
        error: err
      }
    }
  },
  register: async ({ email, password }): Promise<AuthActionResponse> => {
    try {
      const { data, error } = await supabaseClient.auth.signUp({
        email,
        password
      })
      if (error) {
        return {
          success: false,
          error
        }
      }

      if (data) {
        notification.open({
          type: "success",
          message:
            "A confirmation email has been sent to your email. Click it to Login",
        });
        return {
          success: true,
          redirectTo: '/create'
        }
      }
    } catch (err: any) {
      return {
        success: false,
        error: err
      }
    }
    return {
      success: false,
      error: {
        message: 'Registration Failed',
        name: 'RInvalid Email or Password'
      }
    }
  },
  forgotPassword: async ({ email }): Promise<AuthActionResponse> => {
    try {
      const { data, error } =
        await supabaseClient.auth.resetPasswordForEmail(email, {
          redirectTo: `${window.location.origin}/update-password`,
        });

      if (error) {
        return {
          success: false,
          error,
        };
      }

      if (data) {
        notification.open({
          type: "success",
          message:
            "Please check your email for a link to reset your password. If it doesn't appear within a few minutes, check your spam folder.",
        });
        return {
          success: true,
        };
      }
    } catch (err: any) {
      return {
        success: false,
        error: err,
      };
    }
    return {
      success: false,
      error: {
        message: "Forgot password failed",
        name: "Invalid email",
      },
    };
  },
  updatePassword: async ({ password }) => {
    try {
      const { data, error } = await supabaseClient.auth.updateUser({
        password,
      });

      if (error) {
        return {
          success: false,
          error,
        };
      }

      if (data) {
        return {
          success: true,
          redirectTo: "/",
        };
      }
    } catch (error: any) {
      return {
        success: false,
        error,
      };
    }
    return {
      success: false,
      error: {
        message: "Update password failed",
        name: "Invalid password",
      },
    };
  },
  logout: async () => {
    const { error } = await supabaseClient.auth.signOut();

    if (error) {
      return {
        success: false,
        error,
      };
    }

    return {
      success: true,
      redirectTo: "/",
    };
  },
  onError: async (error) => {
    console.error(error);
    return { error };
  },
  check: async () => {
    try {
      const { data } = await supabaseClient.auth.getSession();
      const { session } = data;

      if (!session) {
        return {
          authenticated: false,
          error: {
            message: "Check failed",
            name: "Session not found",
          },
          logout: true,
          redirectTo: "/login",
        };
      }
    } catch (error: any) {
      return {
        authenticated: false,
        error: error || {
          message: "Check failed",
          name: "Session not found",
        },
        logout: true,
        redirectTo: "/login",
      };
    }

    return {
      authenticated: true,
    };
  },
  getPermissions: async () => {
    const user = await supabaseClient.auth.getUser();

    if (user) {
      return user.data.user?.role;
    }

    return null;
  },
  getIdentity: async () => {
    const { data } = await supabaseClient.auth.getUser()

    if (data?.user) {
      return {
        ...data.user,
        name: data.user.email,
      };
    }

    return null;
  },

}
