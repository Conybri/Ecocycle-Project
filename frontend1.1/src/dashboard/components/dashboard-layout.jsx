
import { useState, useEffect } from "react";
import { useAuth } from "../../auth/AuthContext";
import Sidebar from "./sidebar";
import Header from "./header";
import ProtectedRoute from "./protected-route";

export default function DashboardLayout({ children, user }) {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { hasRole } = useAuth();

  const handleSectionChange = (newSection) => {
    // Validate if user has access to the requested section
    const adminSections = [
      "products",
      "users",
      "orders",
      "analytics",
      "settings",
    ];
    const userSections = ["dashboard", "my-orders", "profile", "store"];

    if (user?.role === "ADMIN") {
      // Admin can access all sections
      setActiveSection(newSection);
    } else if (user?.role === "USUARIO") {
      // Users can only access user sections
      if (userSections.includes(newSection)) {
        setActiveSection(newSection);
      } else {
        console.warn(`Access denied: User role cannot access ${newSection}`);
        // Redirect to dashboard if trying to access restricted section
        setActiveSection("dashboard");
      }
    } else {
      // Unknown role, redirect to dashboard
      setActiveSection("dashboard");
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("dashboard-theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const handleThemeToggle = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("dashboard-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("dashboard-theme", "light");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarCollapsed(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-light">
        <div className="flex h-screen">
          {/* Sidebar */}
          <Sidebar
            userRole={user?.role || "USUARIO"}
            activeSection={activeSection}
            onSectionChange={handleSectionChange}
            collapsed={sidebarCollapsed}
            onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
          />

          {/* Main Content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Header */}
            <Header
              user={user}
              onThemeToggle={handleThemeToggle}
              isDark={isDark}
            />

            {/* Content Area */}
            <main className="flex-1 overflow-y-auto">
              <div className="p-6">
                {children({
                  activeSection,
                  userRole: user?.role || "USUARIO",
                  hasRole: hasRole,
                })}
              </div>
            </main>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
