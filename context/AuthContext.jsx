import { createContext, useContext, useState, useCallback } from 'react';

const AuthContext = createContext(null);

const DEMO_USERS = {
  admin:    { name: 'Rajesh Kumar',  email: 'admin@workkeeper.com',    role: 'admin',    avatar: null },
  hr:       { name: 'Priya Sharma',  email: 'hr@workkeeper.com',       role: 'hr',       avatar: null },
  employee: { name: 'Amit Patel',    email: 'amit@workkeeper.com',     role: 'employee', avatar: null },
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = useCallback((role) => {
    setUser(DEMO_USERS[role] || DEMO_USERS.employee);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  const switchRole = useCallback((role) => {
    setUser(DEMO_USERS[role] || DEMO_USERS.employee);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, switchRole }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
