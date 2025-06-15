"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

type RoleType = "client" | "admin" | "superadmin";

type MenuItem = {
  name: string;
  href: string;
  submenu?: MenuItem[];
};

type MenuConfig = Record<RoleType, MenuItem[]>;

interface SessionUser {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role?: "USER" | "ADMIN" | "SUPERADMIN";
}

const Navbar = () => {
  const { data: session ,status} = useSession();
  const [resolvedRole, setResolvedRole] = useState<RoleType>("client");

  useEffect(() => {
    const user = session?.user as SessionUser;
     console.log(user)
    if (user?.role === "ADMIN") setResolvedRole("admin");
    else if (user?.role === "SUPERADMIN") setResolvedRole("superadmin");
    else setResolvedRole("client");
  }, [session]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const menuConfig: MenuConfig = {
    client: [
      { name: 'Home', href: '/' },
      {
        name: 'Taxation',
        href: '/direct-tax',
        submenu: [
          { name: 'Direct Tax', href: '/direct-tax' },
          { name: 'InDirect Tax', href: '/indirect-tax' },
          { name: 'NCA', href: '/nca' },
          { name: 'RERA', href: '/rera' },
          { name: 'FEMA', href: '/fema' },
        ],
      },
      {
        name: 'Wealth',
        href: '/invest',
        submenu: [
          { name: 'Invest', href: '/invest' },
          { name: 'Real Estate', href: '/real-estate' },
          { name: 'NRI', href: '/nri' },
        ],
      },
      { name: 'Insurance', href: '/insurance' },
      { name: 'About Us', href: '/about' },
      { name: 'Contact Us', href: '/contact' },
    ],
    admin: [
        { name: 'Home', href: '/' },
      { name: 'Dashboard', href: '/dashboard' },
      {
        name: 'Posts',
        href: '/create-post',
        submenu: [
          { name: 'Create New Post', href: '/create-post' },
          { name: 'View All Posts', href: '/view-posts' },
        ],
      },
      {
        name: 'Files',
        href: '/create-file',
        submenu: [
          { name: 'Upload Pdf', href: '/upload-pdf' },
          { name: 'Delete Pdf', href: '/delete-posts' },
          { name: 'View All Pdf', href: '/view-Pdf' },
        ],
      },
      { name: 'Users', href: '/users' },
    ],
    superadmin: [
      { name: 'Home', href: '/' },
      { name: 'Insurance Master', href: '/superadmin/insurance' },
      { name: 'Tax Controls', href: '/superadmin/taxation' },
      { name: 'Wealth System', href: '/superadmin/wealth' },
      { name: 'Settings', href: '/superadmin/settings' },
      { name: 'Logs', href: '/superadmin/logs' },
    ],
  };

  const getMenuItems = () => {
    return menuConfig[resolvedRole] || menuConfig.client;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md z-50">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <span className="text-2xl font-bold text-yellow-500">Perificio</span>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 z-50">
        {getMenuItems().map((item) => (
          <div key={item.name} className="relative group">
            <Link href={item.href} className="hover:text-blue-600">
              {item.name}
            </Link>
            {item.submenu && (
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md p-2 min-w-[200px]">
                {item.submenu.map((subItem) => (
                  <Link 
                    key={subItem.name} 
                    href={subItem.href}
                    className="block px-4 py-2 hover:bg-gray-100 rounded"
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Menu Button (replaces auth buttons) */}
      <div className="md:hidden">
        <button 
          onClick={toggleMenu}
          className="p-2 text-gray-700 rounded-md hover:bg-gray-100"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Desktop Auth Buttons */}
      {
        status==='authenticated' ? (
          <div className="relative hidden md:block">
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)} 
            className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
          >
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              {session?.user?.image ? (
                <img 
                  src={session.user.image} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              )}
            </div>
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
              <div className="px-4 py-2 border-b">
                <p className="text-sm font-medium text-gray-900">{session?.user?.name}</p>
                <p className="text-sm text-gray-500">{session?.user?.email}</p>
              </div>
              <button 
                onClick={() => signOut()} 
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
        ):( 
        <>
        <div className="hidden md:flex space-x-4">
          <Link href="/sign-in" className="px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50">
            Sign In
          </Link>
          <Link href="/register" className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
            Register
          </Link>
        </div>
        </>
      )}

      {/* Mobile Sidebar Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-transparent bg-opacity-50" onClick={toggleMenu}></div>
          <div className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg">
            {/* Profile Section */}
            <div className="px-4 py-3 border-b flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                {session?.user?.image ? (
                  <img 
                    src={session.user.image} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                )}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{session?.user?.name}</p>
                <p className="text-xs text-gray-500">{session?.user?.email}</p>
              </div>
            </div>
            
            {/* Sign Out Button */}
            <button 
              onClick={() => signOut()} 
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Sign Out
            </button>
            
            {/* Existing mobile menu items */}
            <div className="flex flex-col h-full p-4">
              <button 
                onClick={toggleMenu}
                className="self-end p-2 mb-4 text-gray-700 rounded-md hover:bg-gray-100"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="flex-1 overflow-y-auto">
                {getMenuItems().map((item) => (
                  <div key={item.name} className="mb-2">
                    <Link 
                      href={item.href} 
                      className="block px-4 py-2 text-gray-800 rounded hover:bg-gray-100"
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="pl-4 mt-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-gray-600 rounded hover:bg-gray-100"
                            onClick={toggleMenu}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="pt-4 mt-auto border-t">
              {
        status==='authenticated' ? (
          <div>you are logged in</div> 
        ):(
        <>
                <Link 
                  href="/sign-in" 
                  className="block w-full px-4 py-2 mb-2 text-center text-blue-600 border border-blue-600 rounded hover:bg-blue-50"
                  onClick={toggleMenu}
                >
                  Sign In
                </Link>
                <Link 
                  href="/register" 
                  className="block w-full px-4 py-2 text-center text-white bg-blue-600 rounded hover:bg-blue-700"
                  onClick={toggleMenu}
                >
                  Register
                </Link>
             </>   )}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;