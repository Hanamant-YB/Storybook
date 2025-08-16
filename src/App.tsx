import React, { useState } from 'react';
import { InputField, DataTable, Column } from './components';
import './index.css';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  lastLogin: string;
}

const sampleUsers: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active', lastLogin: '2024-01-15' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'active', lastLogin: '2024-01-14' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor', status: 'inactive', lastLogin: '2024-01-10' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User', status: 'active', lastLogin: '2024-01-13' },
  { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'Admin', status: 'inactive', lastLogin: '2024-01-08' },
];

const userColumns: Column<User>[] = [
  { key: 'name', title: 'Name', sortable: true },
  { key: 'email', title: 'Email', sortable: true },
  { key: 'role', title: 'Role', sortable: true },
  { 
    key: 'status', 
    title: 'Status', 
    sortable: true,
    render: (value) => (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
        value === 'active' 
          ? 'bg-green-100 text-green-800' 
          : 'bg-red-100 text-red-800'
      }`}>
        {value}
      </span>
    )
  },
  { key: 'lastLogin', title: 'Last Login', sortable: true },
];

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  React.useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <div className={darkMode ? 'min-h-screen bg-gray-900 py-8' : 'min-h-screen bg-gray-50 py-8'}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Dark Mode Toggle Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className={
              'px-4 py-2 rounded font-medium shadow transition-colors ' +
              (darkMode
                ? 'bg-gray-800 text-gray-100 hover:bg-gray-700'
                : 'bg-gray-200 text-gray-900 hover:bg-gray-300')
            }
          >
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
        </div>
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={darkMode ? 'text-4xl font-bold text-gray-100 mb-4' : 'text-4xl font-bold text-gray-900 mb-4'}>
          </h1>
          <p className={darkMode ? 'text-xl text-gray-300' : 'text-xl text-gray-600'}>
            React Component Library with TypeScript, TailwindCSS, and Storybook
          </p>
        </div>
        {/* InputField Demo */}
        <div className={darkMode ? 'bg-gray-800 rounded-lg shadow-sm p-8 mb-8' : 'bg-white rounded-lg shadow-sm p-8 mb-8'}>
          <h2 className={darkMode ? 'text-2xl font-semibold text-gray-100 mb-6' : 'text-2xl font-semibold text-gray-900 mb-6'}>
            InputField Component Demo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Basic Form */}
            <div className="space-y-4">
              <h3 className={darkMode ? 'text-lg font-medium text-gray-100 mb-4' : 'text-lg font-medium text-gray-900 mb-4'}>User Registration Form</h3>
              <InputField
                label="Full Name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange('name')}
                variant="outlined"
                size="md"
                helperText="Your name as it appears on your ID"
              />
              <InputField
                label="Email Address"
                placeholder="Enter your email"
                type="email"
                value={formData.email}
                onChange={handleInputChange('email')}
                variant="outlined"
                size="md"
                invalid={Boolean(formData.email && !formData.email.includes('@'))}
                errorMessage={formData.email && !formData.email.includes('@') ? 'Please enter a valid email' : ''}
                clearable
              />
              <InputField
                label="Password"
                placeholder="Enter your password"
                type="password"
                value={formData.password}
                onChange={handleInputChange('password')}
                variant="outlined"
                size="md"
                showPasswordToggle
                helperText="Must be at least 8 characters"
              />
            </div>
            {/* Variants Showcase */}
            <div className="space-y-4">
              <h3 className={darkMode ? 'text-lg font-medium text-gray-100 mb-4' : 'text-lg font-medium text-gray-900 mb-4'}>Input Variants</h3>
              <InputField
                label="Filled Variant"
                placeholder="This is a filled input"
                variant="filled"
                helperText="Filled variant with background"
              />
              <InputField
                label="Outlined Variant"
                placeholder="This is an outlined input"
                variant="outlined"
                helperText="Outlined variant with border"
              />
              <InputField
                label="Ghost Variant"
                placeholder="This is a ghost input"
                variant="ghost"
                helperText="Ghost variant with bottom border only"
              />
            </div>
          </div>
        </div>
        {/* DataTable Demo */}
        <div className={darkMode ? 'bg-gray-800 rounded-lg shadow-sm p-8' : 'bg-white rounded-lg shadow-sm p-8'}>
          <h2 className={darkMode ? 'text-2xl font-semibold text-gray-100 mb-6' : 'text-2xl font-semibold text-gray-900 mb-6'}>
            DataTable Component Demo
          </h2>
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Interactive data table with sorting and selection capabilities
              </p>
              {selectedUsers.length > 0 && (
                <div className={darkMode ? 'px-4 py-2 bg-blue-900 rounded-lg' : 'px-4 py-2 bg-blue-50 rounded-lg'}>
                  <span className={darkMode ? 'text-sm text-blue-200' : 'text-sm text-blue-800'}>
                    {selectedUsers.length} user(s) selected
                  </span>
                </div>
              )}
            </div>
            <DataTable
              data={sampleUsers}
              columns={userColumns}
              selectable
              onRowSelect={setSelectedUsers}
            />
            {selectedUsers.length > 0 && (
              <div className={darkMode ? 'p-4 bg-gray-900 rounded-lg' : 'p-4 bg-gray-50 rounded-lg'}>
                <h3 className={darkMode ? 'font-medium text-gray-100 mb-2' : 'font-medium text-gray-900 mb-2'}>Selected Users:</h3>
                <ul className={darkMode ? 'text-sm text-gray-300 space-y-1' : 'text-sm text-gray-600 space-y-1'}>
                  {selectedUsers.map(user => (
                    <li key={user.id}>
                      {user.name} - {user.email} ({user.role})
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        {/* Footer */}
        <div className={darkMode ? 'text-center mt-12 text-gray-400' : 'text-center mt-12 text-gray-500'}>
          <p>
            Built with using React, TypeScript, TailwindCSS, and Storybook
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
