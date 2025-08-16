import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import DataTable from './DataTable';
import { Column } from '../../types';

// Sample data types
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  lastLogin: string;
}

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  rating: number;
}

const meta: Meta<typeof DataTable> = {
  title: 'Components/DataTable',
  component: DataTable,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# DataTable Component

A flexible and feature-rich data table component with sorting, selection, and loading states.

## Features
- **Data Display**: Display tabular data with customizable columns
- **Column Sorting**: Click column headers to sort data
- **Row Selection**: Single or multiple row selection with checkboxes
- **Loading State**: Skeleton loading animation
- **Empty State**: Customizable empty state message
- **Responsive**: Horizontal scrolling for mobile devices
- **Accessibility**: Full ARIA support and keyboard navigation

## Usage
\`\`\`tsx
import { DataTable, Column } from './components';

const columns: Column<User>[] = [
  { key: 'name', title: 'Name', sortable: true },
  { key: 'email', title: 'Email', sortable: true },
  { key: 'role', title: 'Role' },
];

<DataTable
  data={users}
  columns={columns}
  selectable
  onRowSelect={(selected) => console.log(selected)}
/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    loading: {
      control: { type: 'boolean' },
      description: 'Shows loading skeleton',
    },
    selectable: {
      control: { type: 'boolean' },
      description: 'Enables row selection with checkboxes',
    },
    emptyMessage: {
      control: { type: 'text' },
      description: 'Custom message for empty state',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data
const sampleUsers: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active', lastLogin: '2024-01-15' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'active', lastLogin: '2024-01-14' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor', status: 'inactive', lastLogin: '2024-01-10' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User', status: 'active', lastLogin: '2024-01-13' },
  { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'Admin', status: 'inactive', lastLogin: '2024-01-08' },
];

const sampleProducts: Product[] = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 999.99, stock: 15, rating: 4.5 },
  { id: 2, name: 'Mouse', category: 'Electronics', price: 29.99, stock: 50, rating: 4.2 },
  { id: 3, name: 'Keyboard', category: 'Electronics', price: 89.99, stock: 25, rating: 4.7 },
  { id: 4, name: 'Monitor', category: 'Electronics', price: 299.99, stock: 10, rating: 4.8 },
  { id: 5, name: 'Headphones', category: 'Audio', price: 149.99, stock: 30, rating: 4.3 },
];

// Column definitions
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

const productColumns: Column<Product>[] = [
  { key: 'name', title: 'Product Name', sortable: true },
  { key: 'category', title: 'Category', sortable: true },
  { 
    key: 'price', 
    title: 'Price', 
    sortable: true,
    render: (value) => `$${(value as number).toFixed(2)}`
  },
  { 
    key: 'stock', 
    title: 'Stock', 
    sortable: true,
    render: (value) => (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
        (value as number) > 20 ? 'bg-green-100 text-green-800' :
        (value as number) > 10 ? 'bg-yellow-100 text-yellow-800' :
        'bg-red-100 text-red-800'
      }`}>
        {value}
      </span>
    )
  },
  { 
    key: 'rating', 
    title: 'Rating', 
    sortable: true,
    render: (value) => (
      <div className="flex items-center">
        <span className="text-yellow-400">★</span>
        <span className="ml-1">{value}</span>
      </div>
    )
  },
];

export const Default: Story = {
  args: {
    data: sampleUsers,
    columns: userColumns,
  },
};

export const WithSelection: Story = {
  render: (args: any) => {
    const [selectedRows, setSelectedRows] = useState<User[]>([]);
    
    return (
      <div className="space-y-4">
        <DataTable
          {...args}
          selectable
          onRowSelect={setSelectedRows}
        />
        {selectedRows.length > 0 && (
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-2">Selected Users:</h3>
            <ul className="text-sm text-gray-600">
              {selectedRows.map(user => (
                <li key={user.id}>{user.name} ({user.email})</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  },
  args: {
    data: sampleUsers,
    columns: userColumns,
  },
};

export const Loading: Story = {
  args: {
    data: [],
    columns: userColumns,
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns: userColumns,
    emptyMessage: 'No users found. Try adjusting your search criteria.',
  },
};

export const ProductsTable: Story = {
  args: {
    data: sampleProducts,
    columns: productColumns,
    selectable: true,
  },
};

export const ComplexExample: Story = {
  render: () => {
    const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    
    return (
      <div className="space-y-8 w-full max-w-6xl">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Users Management</h2>
          <DataTable
            data={sampleUsers}
            columns={userColumns}
            selectable
            onRowSelect={setSelectedUsers}
          />
          {selectedUsers.length > 0 && (
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                {selectedUsers.length} user(s) selected
              </p>
            </div>
          )}
        </div>
        
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Product Inventory</h2>
          <DataTable
            data={sampleProducts}
            columns={productColumns}
            selectable
            onRowSelect={setSelectedProducts}
          />
          {selectedProducts.length > 0 && (
            <div className="mt-4 p-3 bg-green-50 rounded-lg">
              <p className="text-sm text-green-800">
                {selectedProducts.length} product(s) selected
              </p>
            </div>
          )}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'A complex example showing multiple tables with selection state management.',
      },
    },
  },
};

export const CustomEmptyState: Story = {
  args: {
    data: [],
    columns: userColumns,
    emptyMessage: '🎉 No data to display! Add some users to get started.',
  },
};

export const ResponsiveTable: Story = {
  render: (args: any) => (
    <div className="w-full max-w-md">
      <DataTable {...args} />
    </div>
  ),
  args: {
    data: sampleUsers,
    columns: userColumns,
    selectable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates responsive behavior on smaller screens with horizontal scrolling.',
      },
    },
  },
};

// Interactive example with data manipulation
export const InteractiveExample: Story = {
  render: () => {
    const [users, setUsers] = useState<User[]>(sampleUsers);
    const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
    
    const handleDeleteSelected = () => {
      const selectedIds = new Set(selectedUsers.map(user => user.id));
      setUsers(users.filter(user => !selectedIds.has(user.id)));
      setSelectedUsers([]);
    };
    
    const handleAddUser = () => {
      const newUser: User = {
        id: Math.max(...users.map(u => u.id)) + 1,
        name: `New User ${users.length + 1}`,
        email: `user${users.length + 1}@example.com`,
        role: 'User',
        status: 'active',
        lastLogin: new Date().toISOString().split('T')[0],
      };
      setUsers([...users, newUser]);
    };
    
    return (
      <div className="space-y-4 w-full max-w-4xl">
        <div className="flex gap-4">
          <button
            onClick={handleAddUser}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Add User
          </button>
          {selectedUsers.length > 0 && (
            <button
              onClick={handleDeleteSelected}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Delete Selected ({selectedUsers.length})
            </button>
          )}
        </div>
        
        <DataTable
          data={users}
          columns={userColumns}
          selectable
          onRowSelect={setSelectedUsers}
        />
        
        {selectedUsers.length > 0 && (
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-2">Selected Users:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              {selectedUsers.map(user => (
                <li key={user.id}>
                  {user.name} - {user.email} ({user.role})
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'An interactive example showing how to integrate the DataTable with data manipulation features.',
      },
    },
  },
};
