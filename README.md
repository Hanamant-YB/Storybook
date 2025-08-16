# 🎨 Uzence Design Studio

A modern React component library built with TypeScript, TailwindCSS, and Storybook. This project demonstrates best practices for building scalable, accessible, and well-documented UI components.

## 🚀 Features

- **React 18** with TypeScript for type safety
- **TailwindCSS** for utility-first styling
- **Storybook** for component documentation and development
- **Accessibility** focused with ARIA support
- **Responsive** design with mobile-first approach
- **Dark mode** support
- **Modern patterns** and best practices

## 📦 Components

### 1. InputField Component

A flexible input component with multiple variants, states, and features.

**Features:**
- ✅ Multiple variants (filled, outlined, ghost)
- ✅ Three sizes (small, medium, large)
- ✅ Validation states (normal, invalid, disabled, loading)
- ✅ Clear button functionality
- ✅ Password visibility toggle
- ✅ Helper text and error messages
- ✅ Full accessibility support

**Props:**
```typescript
interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  loading?: boolean;
  variant?: 'filled' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  type?: 'text' | 'password' | 'email' | 'number';
  clearable?: boolean;
  showPasswordToggle?: boolean;
  className?: string;
}
```

**Usage:**
```tsx
import { InputField } from './components';

<InputField
  label="Email Address"
  placeholder="Enter your email"
  helperText="We'll never share your email"
  variant="outlined"
  size="md"
  clearable
/>
```

### 2. DataTable Component

A feature-rich data table with sorting, selection, and loading states.

**Features:**
- ✅ Display tabular data with customizable columns
- ✅ Column sorting (ascending/descending)
- ✅ Row selection (single/multiple)
- ✅ Loading skeleton animation
- ✅ Empty state with custom messages
- ✅ Responsive design with horizontal scrolling
- ✅ Custom cell rendering

**Props:**
```typescript
interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
  className?: string;
  emptyMessage?: string;
}

interface Column<T> {
  key: keyof T;
  title: string;
  sortable?: boolean;
  width?: string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}
```

**Usage:**
```tsx
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
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd uzence-design-studio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start Storybook**
   ```bash
   npm run storybook
   ```

4. **Open your browser**
   Navigate to `http://localhost:6006` to view the component documentation.

### Available Scripts

- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production
- `npm run dev` - Alias for `npm run storybook`
- `npm start` - Start React development server
- `npm run build` - Build React app for production
- `npm test` - Run tests

## 📚 Storybook Documentation

The project includes comprehensive Storybook documentation for each component:

### InputField Stories
- **Default** - Basic input field
- **WithLabel** - Input with label
- **WithError** - Input with validation error
- **Disabled** - Disabled state
- **Loading** - Loading state with spinner
- **Clearable** - Input with clear button
- **PasswordWithToggle** - Password input with visibility toggle
- **Variants** - Filled, outlined, and ghost variants
- **Sizes** - Small, medium, and large sizes
- **Input Types** - Text, email, number, and password types
- **Complex Example** - Real-world form example
- **All Variants** - Comparison of all variants
- **All Sizes** - Comparison of all sizes

### DataTable Stories
- **Default** - Basic data table
- **WithSelection** - Table with row selection
- **Loading** - Loading state with skeleton
- **Empty** - Empty state
- **ProductsTable** - Example with product data
- **Complex Example** - Multiple tables with state management
- **Custom Empty State** - Custom empty message
- **Responsive Table** - Mobile responsive behavior
- **Interactive Example** - Data manipulation example

## 🎨 Design System

### Colors
The design system uses a consistent color palette:

- **Primary**: Blue shades (50-900)
- **Gray**: Neutral grays (50-900)
- **Success**: Green for positive states
- **Error**: Red for error states
- **Warning**: Yellow for warning states

### Typography
- **Font Family**: System UI stack
- **Sizes**: xs, sm, base, lg, xl, 2xl
- **Weights**: Normal, medium, semibold

### Spacing
- **Consistent spacing scale** using TailwindCSS utilities
- **Responsive breakpoints** for mobile-first design

## ♿ Accessibility

Both components are built with accessibility in mind:

### InputField Accessibility
- Proper ARIA labels and descriptions
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- Error announcements

### DataTable Accessibility
- Semantic HTML table structure
- ARIA roles and properties
- Keyboard navigation for sorting
- Screen reader support for selection
- Focus indicators

## 🌙 Dark Mode Support

The components support dark mode through TailwindCSS classes. To enable dark mode:

1. Add `dark` class to the root element
2. Components will automatically adapt using dark mode variants

## 📱 Responsive Design

All components are built with a mobile-first approach:

- **Mobile**: Optimized for small screens
- **Tablet**: Responsive breakpoints
- **Desktop**: Full feature set

## 🧪 Testing

The project includes:

- **Storybook interactions** for component testing
- **TypeScript** for compile-time type checking
- **Accessibility testing** through Storybook addons

## 📖 Best Practices

### Component Development
- ✅ Use TypeScript for type safety
- ✅ Implement proper prop interfaces
- ✅ Add comprehensive Storybook documentation
- ✅ Ensure accessibility compliance
- ✅ Follow React best practices
- ✅ Use semantic HTML elements
- ✅ Implement proper error handling

### Styling
- ✅ Use TailwindCSS utility classes
- ✅ Maintain consistent spacing
- ✅ Follow design system guidelines
- ✅ Support dark mode
- ✅ Ensure responsive design

### Documentation
- ✅ Clear component descriptions
- ✅ Usage examples
- ✅ Props documentation
- ✅ Accessibility notes
- ✅ Best practices guidance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests and documentation
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- React team for the amazing framework
- TailwindCSS for the utility-first CSS framework
- Storybook team for the component development environment
- The open-source community for inspiration and tools

---

**Built with ❤️ using React, TypeScript, TailwindCSS, and Storybook**
