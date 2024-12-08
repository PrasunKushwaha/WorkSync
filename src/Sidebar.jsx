import React, { useState } from 'react';
import JobSearch from './JobSearch';
import AppliedJobs from './AppliedJobs';
import SettingsPage from './SettingsPage';
import { LuChevronsRight } from "react-icons/lu";
import {
  AiOutlineSearch,
  AiOutlineCheckCircle,
  AiOutlineSetting,
  AiOutlineBook,
  AiOutlineMenu,
  AiOutlineClose,
} from 'react-icons/ai';
import PaymentGateway from './PaymentGateway';

const Sidebar = () => {
  const [selected, setSelected] = useState("applied");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Mobile Toggle Button */}
      <button
        className="fixed z-30 p-2 mt-20 text-gray-800 bg-gray-100 rounded-md shadow-md dark:bg-gray-800 dark:text-gray-100 sm:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <AiOutlineClose size={20} /> : <LuChevronsRight size={20} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-20 h-full bg-gray-100 border-r dark:bg-gray-800 dark:border-gray-700 transition-transform transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0 sm:w-64 p-6 space-y-4`}
      >
        <h2 className="mb-8 text-2xl font-bold text-center text-gray-800 dark:text-gray-100">
          Job Portal
        </h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => setSelected("search")}
                className={`flex items-center w-full px-4 py-2 text-left rounded-lg transition ${
                  selected === "search"
                    ? "bg-blue-100 text-blue-700 dark:bg-gray-700 dark:text-blue-300"
                    : "hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white"
                }`}
              >
                <AiOutlineSearch size={20} className="mr-3" />
                Job Search
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelected("applied")}
                className={`flex items-center w-full px-4 py-2 text-left rounded-lg transition ${
                  selected === "applied"
                    ? "bg-blue-100 text-blue-700 dark:bg-gray-700 dark:text-blue-300"
                    : "hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white"
                }`}
              >
                <AiOutlineCheckCircle size={20} className="mr-3" />
                Applied Jobs
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelected("learn")}
                className={`flex items-center w-full px-4 py-2 text-left rounded-lg transition ${
                  selected === "learn"
                    ? "bg-blue-100 text-blue-700 dark:bg-gray-700 dark:text-blue-300"
                    : "hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white "
                }`}
              >
                <AiOutlineBook size={20} className="mr-3" />
                Learn
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelected("settings")}
                className={`flex items-center w-full px-4 py-2 text-left rounded-lg transition ${
                  selected === "settings"
                    ? "bg-blue-100 text-blue-700 dark:bg-gray-700 dark:text-blue-300"
                    : "hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white "
                }`}
              >
                <AiOutlineSetting size={20} className="mr-3" />
                Settings
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 sm:ml-64">
        {selected === "search" && <JobSearch />}
        {selected === "applied" && <AppliedJobs />}
        {selected === "learn" && <PaymentGateway />}
        {selected === "settings" && <SettingsPage />}
      </div>
    </div>
  );
};

export default Sidebar;
