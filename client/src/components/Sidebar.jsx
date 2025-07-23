import { Protect, useClerk, useUser } from '@clerk/clerk-react';
import { Eraser, FileText, Hash, House, Scissors, SquarePen, Users, Image, LogOut } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import toast from 'react-hot-toast';

const navItems = [
  { to: '/ai', label: 'Dashboard', Icon: House },
  { to: '/ai/write-article', label: 'Write Article', Icon: SquarePen },
  { to: '/ai/blog-titles', label: 'Blog Titles', Icon: Hash },
  { to: '/ai/generate-images', label: 'Generate Images', Icon: Image },
  { to: '/ai/remove-background', label: 'Remove Background', Icon: Eraser },
  { to: '/ai/remove-object', label: 'Remove Object', Icon: Scissors },
  { to: '/ai/review-resume', label: 'Review Resume', Icon: FileText },
  { to: '/ai/community', label: 'Community', Icon: Users },
];

const Sidebar = ({ sidebar, setSidebar }) => {
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();

  if (!user) return null;

  return (
    <div className={`w-64 bg-white border-r border-gray-200 flex flex-col justify-between items-center max-sm:absolute top-14 bottom-0 ${sidebar ? 'translate-x-0' : 'max-sm:-translate-x-full'} transition-all duration-300 ease-in-out shadow-lg`}>
      <div className='my-6 w-full px-4'>
        {/* User Profile Section */}
        <div className='text-center mb-6'>
          <div className='relative group mx-auto w-16 h-16'>
            <div className='absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-full opacity-75 group-hover:opacity-100 blur transition-opacity duration-300'></div>
            <img 
              src={user.imageUrl} 
              alt="User avatar" 
              className='relative w-16 h-16 rounded-full border-3 border-white shadow-xl group-hover:scale-105 transition-transform duration-300' 
            />
          </div>
          <h1 className='mt-3 font-semibold text-lg text-gray-800'>{user.fullName}</h1>
          <div className='mt-1 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600'>
            <Protect plan='premium' fallback='Free Plan'>Premium Plan</Protect>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-1">
          {navItems.map(({ to, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/ai'}
              onClick={() => setSidebar(false)}
              className={({ isActive }) =>
                `px-3 py-2.5 flex items-center gap-3 rounded-lg transition-colors duration-200
                ${isActive 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              <Icon className='w-5 h-5' />
              <span className="font-medium text-sm">{label}</span>
            </NavLink>
          ))}
        </div>
      </div>
      {/* Bottom Profile Bar */}
      <div className='w-full border-t border-gray-200 p-4'>
        <div 
          onClick={openUserProfile}  
          className='flex gap-3 items-center cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200'
        >
          <img 
            src={user.imageUrl} 
            className='w-10 h-10 rounded-full border border-gray-200' 
            alt="User profile" 
          />
          <div className='flex-1 min-w-0'>
            <h3 className='font-medium text-gray-900 truncate text-sm'>{user.fullName}</h3>
            <p className='text-xs text-gray-500'>
              <Protect plan='premium' fallback='Free Plan'>Premium Member</Protect>
            </p>
          </div>
          <LogOut 
            onClick={(e) => {
              e.stopPropagation()
              toast.success('Successfully logged out!')
              signOut()
            }} 
            className='w-4 h-4 text-gray-400 hover:text-red-500 transition-colors duration-200 cursor-pointer'
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
