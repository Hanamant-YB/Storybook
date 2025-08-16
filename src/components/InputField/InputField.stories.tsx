import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import InputField from './InputField';

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# InputField Component

A flexible and accessible input component with multiple variants, states, and features.

## Features
- **Multiple Variants**: Filled, outlined, and ghost styles
- **Size Options**: Small, medium, and large sizes
- **States**: Normal, disabled, invalid, and loading states
- **Additional Features**: Clear button, password toggle, helper text, and error messages
- **Accessibility**: Full ARIA support and keyboard navigation
- **Theme Support**: Light and dark theme compatible

## Usage
\`\`\`tsx
import { InputField } from './components';

<InputField
  label="Email"
  placeholder="Enter your email"
  helperText="We'll never share your email"
  variant="outlined"
  size="md"
/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['filled', 'outlined', 'ghost'],
      description: 'Visual style variant of the input field',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the input field',
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'email', 'number'],
      description: 'HTML input type',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the input is disabled',
    },
    invalid: {
      control: { type: 'boolean' },
      description: 'Whether the input has validation errors',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Shows loading spinner',
    },
    clearable: {
      control: { type: 'boolean' },
      description: 'Shows clear button when input has value',
    },
    showPasswordToggle: {
      control: { type: 'boolean' },
      description: 'Shows password visibility toggle (only for password type)',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic story with controlled state
const InputFieldWithState = (args: any) => {
  const [value, setValue] = useState('');
  return (
    <InputField
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Default: Story = {
  render: InputFieldWithState,
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    helperText: 'We\'ll never share your email with anyone else.',
  },
};

export const WithLabel: Story = {
  render: InputFieldWithState,
  args: {
    label: 'Full Name',
    placeholder: 'Enter your full name',
  },
};

export const WithError: Story = {
  render: InputFieldWithState,
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    invalid: true,
    errorMessage: 'Please enter a valid email address',
  },
};

export const Disabled: Story = {
  render: InputFieldWithState,
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true,
    value: 'Disabled value',
  },
};

export const Loading: Story = {
  render: InputFieldWithState,
  args: {
    label: 'Loading Input',
    placeholder: 'Loading...',
    loading: true,
    value: 'Loading value',
  },
};

export const Clearable: Story = {
  render: InputFieldWithState,
  args: {
    label: 'Clearable Input',
    placeholder: 'Type something to see the clear button',
    clearable: true,
    value: 'Sample text',
  },
};

export const PasswordWithToggle: Story = {
  render: InputFieldWithState,
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    showPasswordToggle: true,
    value: 'secretpassword123',
  },
};

// Variants
export const FilledVariant: Story = {
  render: InputFieldWithState,
  args: {
    label: 'Filled Input',
    placeholder: 'This is a filled variant',
    variant: 'filled',
  },
};

export const OutlinedVariant: Story = {
  render: InputFieldWithState,
  args: {
    label: 'Outlined Input',
    placeholder: 'This is an outlined variant',
    variant: 'outlined',
  },
};

export const GhostVariant: Story = {
  render: InputFieldWithState,
  args: {
    label: 'Ghost Input',
    placeholder: 'This is a ghost variant',
    variant: 'ghost',
  },
};

// Sizes
export const SmallSize: Story = {
  render: InputFieldWithState,
  args: {
    label: 'Small Input',
    placeholder: 'Small size input',
    size: 'sm',
  },
};

export const MediumSize: Story = {
  render: InputFieldWithState,
  args: {
    label: 'Medium Input',
    placeholder: 'Medium size input',
    size: 'md',
  },
};

export const LargeSize: Story = {
  render: InputFieldWithState,
  args: {
    label: 'Large Input',
    placeholder: 'Large size input',
    size: 'lg',
  },
};

// Input Types
export const EmailType: Story = {
  render: InputFieldWithState,
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
  },
};

export const NumberType: Story = {
  render: InputFieldWithState,
  args: {
    label: 'Age',
    placeholder: 'Enter your age',
    type: 'number',
  },
};

// Complex Example
export const ComplexExample: Story = {
  render: () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    
    return (
      <div className="space-y-4 w-96">
        <InputField
          label="Full Name"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          variant="outlined"
          size="md"
          helperText="Your name as it appears on your ID"
        />
        
        <InputField
          label="Email Address"
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          size="md"
          invalid={Boolean(email && !email.includes('@'))}
          errorMessage={email && !email.includes('@') ? 'Please enter a valid email' : ''}
          clearable
        />
        
        <InputField
          label="Password"
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          size="md"
          showPasswordToggle
          helperText="Must be at least 8 characters"
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'A complex form example showing multiple input fields with different configurations.',
      },
    },
  },
};

// All Variants Comparison
export const AllVariants: Story = {
  render: () => {
    const [values, setValues] = useState({
      filled: '',
      outlined: '',
      ghost: '',
    });
    
    const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues(prev => ({ ...prev, [field]: e.target.value }));
    };
    
    return (
      <div className="space-y-6 w-96">
        <InputField
          label="Filled Variant"
          placeholder="Filled input"
          value={values.filled}
          onChange={handleChange('filled')}
          variant="filled"
          helperText="This is a filled variant"
        />
        
        <InputField
          label="Outlined Variant"
          placeholder="Outlined input"
          value={values.outlined}
          onChange={handleChange('outlined')}
          variant="outlined"
          helperText="This is an outlined variant"
        />
        
        <InputField
          label="Ghost Variant"
          placeholder="Ghost input"
          value={values.ghost}
          onChange={handleChange('ghost')}
          variant="ghost"
          helperText="This is a ghost variant"
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all three variants: filled, outlined, and ghost.',
      },
    },
  },
};

// All Sizes Comparison
export const AllSizes: Story = {
  render: () => {
    const [values, setValues] = useState({
      sm: '',
      md: '',
      lg: '',
    });
    
    const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues(prev => ({ ...prev, [field]: e.target.value }));
    };
    
    return (
      <div className="space-y-6 w-96">
        <InputField
          label="Small Size"
          placeholder="Small input"
          value={values.sm}
          onChange={handleChange('sm')}
          size="sm"
          helperText="Small size input"
        />
        
        <InputField
          label="Medium Size"
          placeholder="Medium input"
          value={values.md}
          onChange={handleChange('md')}
          size="md"
          helperText="Medium size input"
        />
        
        <InputField
          label="Large Size"
          placeholder="Large input"
          value={values.lg}
          onChange={handleChange('lg')}
          size="lg"
          helperText="Large size input"
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all three sizes: small, medium, and large.',
      },
    },
  },
};
