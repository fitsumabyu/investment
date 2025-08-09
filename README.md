# Investment Management Dashboard

A comprehensive investment property management application built with Next.js 15, TypeScript, and Tailwind CSS. This application provides tools for managing investment properties, analyzing returns, and generating reports for different user roles.

## 🚀 Features

### Core Functionality
- **Property Management**: Add, edit, and track investment properties with detailed financial analysis
- **Portfolio Analytics**: Comprehensive dashboard with key metrics and performance indicators
- **Investment Calculator**: ROI, mortgage, and cash flow calculators
- **Report Generation**: Generate detailed reports and export functionality
- **Knowledge Library**: Educational content and investment guides
- **Role-Based Access**: Different features for Personal Users, Financial Advisors, Business Admins, and System Admins

### User Roles & Permissions

#### Personal User
- Dashboard with portfolio overview
- Property management and analysis
- Investment calculator tools
- Report generation
- Knowledge library access

#### Financial Advisor
- All Personal User features
- Client management
- Investment scenario creation and analysis
- Client portfolio tracking

#### Business Administrator
- All Advisor features
- User management
- Business analytics
- System configuration

#### System Administrator
- All Business Admin features
- Global system settings
- Advanced configuration options
- System-wide analytics

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Charts**: Recharts
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **State Management**: React Context + Server Actions

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd investment-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
investment-app/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication pages
│   ├── (main)/            # Main application pages
│   │   ├── admin/         # Admin pages
│   │   ├── advisor/       # Advisor-specific pages
│   │   ├── client/        # Client management
│   │   ├── property/      # Property management
│   │   ├── scenario/      # Investment scenarios
│   │   └── ...            # Other pages
├── components/            # Reusable UI components
│   ├── ui/               # shadcn/ui components
│   └── ...               # Custom components
├── lib/                  # Utility functions and data
├── hooks/                # Custom React hooks
└── public/               # Static assets
```

## 🎯 Key Pages & Features

### Authentication (`/auth`)
- Split-screen design with feature highlights
- Role-based registration
- Secure login/logout functionality

### Dashboard (`/dashboard`)
- Portfolio overview with key metrics
- Property cards with quick actions
- Responsive grid layout
- Loading states and error handling

### Property Management
- **Add Property** (`/property/new`): Multi-step form with validation
- **Property Details** (`/property/[id]`): Comprehensive property analysis with charts
- **Edit Property** (`/property/[id]/edit`): Update property information

### Client Management (Advisor Role)
- **Client List** (`/advisor/clients`): Manage client portfolios
- **Client Details** (`/client/[id]`): Individual client analysis
- **Add/Edit Client** (`/client/new`, `/client/[id]/edit`): Client information forms

### Investment Scenarios (Advisor Role)
- **Scenario List** (`/scenarios`): View and manage investment scenarios
- **Scenario Details** (`/scenario/[id]`): Detailed scenario analysis
- **Create Scenario** (`/scenario/new`): Build new investment scenarios

### Reports (`/reports`)
- Portfolio summary reports
- Cash flow analysis
- Tax benefits reports
- Export functionality

### Knowledge Library (`/knowledge`)
- Educational articles and guides
- Investment strategies
- Market analysis content
- Search and categorization

### Investment Calculator (`/calculator`)
- ROI calculator
- Mortgage payment calculator
- Cash flow analysis
- Real-time calculations

### Admin Features
- **User Management** (`/admin/users`): Manage user accounts
- **Business Analytics** (`/admin/analytics`): Business performance metrics
- **System Settings** (`/admin/settings`): Application configuration
- **Global Config** (`/admin/global-config`): System-wide settings

## 🎨 Design System

The application uses a comprehensive design system built with:
- **Tailwind CSS** for styling
- **shadcn/ui** components for consistency
- **Radix UI** for accessible primitives
- **Lucide React** for icons
- **Responsive design** for all screen sizes

### Color Scheme
- Primary: Blue (#3b82f6)
- Success: Green (#10b981)
- Warning: Yellow (#f59e0b)
- Error: Red (#ef4444)
- Neutral: Gray scale

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 400, 500, 600, 700
- **Sizes**: Responsive scale from 12px to 48px

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the root directory:

```env
# Database (for production)
DATABASE_URL="your-database-url"

# Authentication
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# Email (for notifications)
SMTP_HOST="your-smtp-host"
SMTP_PORT="587"
SMTP_USER="your-smtp-user"
SMTP_PASS="your-smtp-password"
```

### Tailwind Configuration
The application uses a custom Tailwind configuration with:
- Custom color palette
- Extended spacing scale
- Custom animations
- Responsive breakpoints

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push

### Other Platforms
The application can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📊 Data Structure

### Core Entities

#### Property
```typescript
interface Property {
  id: string
  name: string
  address: string
  type: string
  yearBuilt: number
  purchasePrice: number
  deposit: number
  rent: number
  interestRate: number
  loanType: string
  loanTerm: number
  expenses: {
    rates: number
    insurance: number
    maintenance: number
    fees: number
  }
  taxRate: number
  growthRate: number
  status: string
  ownerId: string
}
```

#### Client
```typescript
interface Client {
  id: string
  name: string
  email: string
  phone?: string
  address?: string
  notes?: string
  advisorId: string
  properties: string[]
}
```

#### Scenario
```typescript
interface Scenario {
  id: string
  name: string
  description: string
  clientId: string
  status: "Active" | "Draft"
  creationDate: string
  properties: string[]
}
```

## 🔒 Security Features

- **Role-based access control**
- **Secure authentication**
- **Input validation**
- **XSS protection**
- **CSRF protection**
- **Secure headers**

## 📱 Responsive Design

The application is fully responsive with:
- **Mobile-first approach**
- **Breakpoint system**: sm, md, lg, xl, 2xl
- **Touch-friendly interfaces**
- **Optimized for all devices**

## 🧪 Testing

```bash
# Run tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run e2e tests
npm run test:e2e
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue on GitHub
- Check the documentation
- Review the knowledge library within the app

## 🔄 Updates

Stay updated with the latest features and improvements by:
- Following the repository
- Checking the releases page
- Reading the changelog

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS** 