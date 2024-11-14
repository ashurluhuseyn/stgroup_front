// Layout.js
import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Sidenav from '../components/Sidenav';
import { SidebarProvider } from '../context/sideContext';

const Layout = () => {
  return (
    <SidebarProvider>
      <div className='layout'>
        <Header />
        <Sidenav />
        <main>
          <Outlet />
        </main> 
        <Footer />
      </div>
    </SidebarProvider>
  );
}

export default Layout;
