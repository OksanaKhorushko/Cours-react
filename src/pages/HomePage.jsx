import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header/Header';

const pages = [
  {
    name: 'Home',
    to: '/',
  },
  {
    name: 'Chats',
    to: '/chats',
  },
  {
    name: 'User Profile',
    to: '/user',
  },
];

export const HomePage = () => {
  return (
    <>
      <Header pages={pages} />
      <Outlet />
    </>
  );
};
