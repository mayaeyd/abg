import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, IconButton, InputAdornment } from "@mui/material";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/login", {
        username,
        password,
      });
      if (response.data.status === "success") {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setError("فشل تسجيل الدخول. يرجى التحقق من اسم المستخدم وكلمة المرور.");
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Login Form */}
      <div className="flex-1 bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-md" dir="rtl">
          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-600 mb-8 text-right">
            تسجيل الدخول
          </h1>

          {/* Username Field */}
          <div className="mb-6">
            <TextField
              fullWidth
              variant="standard"
              label="اسم المستخدم"
              placeholder="اسم المستخدم"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              InputLabelProps={{
                style: {
                  textAlign: "right",
                  right: 0,
                  transformOrigin: "right",
                },
              }}
              InputProps={{
                style: { textAlign: "right", direction: "rtl" },
              }}
              sx={{
                "& .MuiInputLabel-root": {
                  right: 0,
                  left: "auto",
                  transformOrigin: "right",
                },
                "& .MuiInput-underline:before": {
                  borderBottomColor: "#d1d5db",
                },
                "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                  borderBottomColor: "#9ca3af",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#2563eb",
                },
              }}
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <TextField
              fullWidth
              variant="standard"
              type={showPassword ? "text" : "password"}
              label="كلمة المرور"
              placeholder="كلمة المرور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputLabelProps={{
                style: {
                  textAlign: "right",
                  right: 0,
                  transformOrigin: "right",
                },
              }}
              InputProps={{
                style: { textAlign: "right", direction: "rtl" },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      size="small"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiInputLabel-root": {
                  right: 0,
                  left: "auto",
                  transformOrigin: "right",
                },
                "& .MuiInput-underline:before": {
                  borderBottomColor: "#d1d5db",
                },
                "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                  borderBottomColor: "#9ca3af",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#2563eb",
                },
              }}
            />
          </div>

          <div className="text-right mb-8">
            <Button
              variant="text"
              size="small"
              sx={{
                color: "#6b7280",
                textTransform: "none",
                fontSize: "0.875rem",
                "&:hover": {
                  color: "#374151",
                  backgroundColor: "transparent",
                },
              }}
            >
              هل نسيت كلمة المرور؟
            </Button>
          </div>

          <Button
            fullWidth
            variant="contained"
            onClick={handleLogin}
            sx={{
              height: 35,
              backgroundColor: "#2563eb",
              "&:hover": {
                backgroundColor: "#1d4ed8",
              },
              py: 1.5,
              fontSize: "1.125rem",
              fontWeight: 600,
              borderRadius: "0.5rem",
            }}
          >
            تسجيل الدخول
          </Button>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>

      <div className="flex-1 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="mb-8 flex gap-3">
            <h2 className="text-7xl font-bold mb-2">ABG</h2>
            <p className="text-sm opacity-90">
              accord
              <br />
              business
              <br />
              group
            </p>
          </div>
          <div className="text-xl font-medium">MyndAI</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
