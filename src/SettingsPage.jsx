import React, { useState } from 'react';

const SettingsPage = () => {
  return (
    <div className="min-h-screen p-6 mt-12 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
      <div className="max-w-3xl p-8 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
        <h1 className="mb-6 text-3xl font-bold text-center">Settings</h1>

        <form className="space-y-6">
          {/* Profile Settings */}
          <div className="pb-4 border-b">
            <h2 className="mb-4 text-xl font-semibold">Profile Settings</h2>
            <div>
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">Full Name *</label>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">Email *</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Notification Preferences */}
          <div className="pb-4 border-b">
            <h2 className="mb-4 text-xl font-semibold">Notification Preferences</h2>
            <div className="flex items-center space-x-4">
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">Email Notifications</label>
              <input type="checkbox" className="text-blue-600 form-checkbox dark:text-blue-500" />
            </div>
            <div className="flex items-center space-x-4">
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">SMS Notifications</label>
              <input type="checkbox" className="text-blue-600 form-checkbox dark:text-blue-500" />
            </div>
            <div className="flex items-center space-x-4">
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">Push Notifications</label>
              <input type="checkbox" className="text-blue-600 form-checkbox dark:text-blue-500" />
            </div>
          </div>

          {/* Password Change */}
          <div className="pb-4 border-b">
            <h2 className="mb-4 text-xl font-semibold">Change Password</h2>
            <div>
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">Current Password</label>
              <input
                type="password"
                placeholder="Current Password"
                className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">New Password</label>
              <input
                type="password"
                placeholder="New Password"
                className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">Confirm New Password</label>
              <input
                type="password"
                placeholder="Confirm New Password"
                className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Account Deletion */}
          <div className="pb-4 border-b">
            <h2 className="mb-4 text-xl font-semibold">Account Management</h2>
            <div>
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">Delete Account</label>
              <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                Warning: This action is irreversible. Deleting your account will remove all data associated with it.
              </p>
              <button
                type="button"
                className="px-4 py-2 font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Delete Account
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Save Settings
          </button>
        </form>
      </div>
    </div>
  );
};

export default SettingsPage;