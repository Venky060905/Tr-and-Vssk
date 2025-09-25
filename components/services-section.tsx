import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, FileText, Receipt, Users, Shield, Database, BarChart3, TrendingUp, Search } from "lucide-react"

const services = [
  {
    icon: Receipt,
    title: "Tax Preparation Services",
    description: "Comprehensive tax planning and preparation for individuals and businesses",
    color: "from-blue-50 to-blue-100",
  },
  {
    icon: Calculator,
    title: "Accounting Services & Bookkeeping",
    description: "Complete bookkeeping solutions and financial record management",
    color: "from-green-50 to-green-100",
  },
  {
    icon: FileText,
    title: "Income Tax Return Filing",
    description: "Professional ITR filing services with maximum refund optimization",
    color: "from-purple-50 to-purple-100",
  },
  {
    icon: Users,
    title: "Payroll Support",
    description: "End-to-end payroll processing and compliance management",
    color: "from-pink-50 to-pink-100",
  },
  {
    icon: Shield,
    title: "Digital Signature Certificate (DSC)",
    description: "DSC registration and renewal services for secure digital transactions",
    color: "from-yellow-50 to-yellow-100",
  },
  {
    icon: Database,
    title: "Tally Data Entry",
    description: "Professional Tally software implementation and data entry services",
    color: "from-cyan-50 to-cyan-100",
  },
  {
    icon: BarChart3,
    title: "Financial Statement Preparation",
    description: "Balance Sheet, Income Statement, and Cash Flow preparation",
    color: "from-orange-50 to-orange-100",
  },
  {
    icon: TrendingUp,
    title: "Management Accounting / Advisory",
    description: "Strategic financial advisory and management accounting services",
    color: "from-teal-50 to-teal-100",
  },
  {
    icon: Search,
    title: "Bank Auditing & Assurance",
    description: "Professional auditing services and financial assurance",
    color: "from-indigo-50 to-indigo-100",
  },
]

export function ServicesSection() {
  return (
  <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16 fade-in">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Comprehensive accounting, tax, and business consulting solutions tailored to meet your specific needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`card-hover border-0 shadow-md rounded-xl overflow-hidden group bg-gradient-to-br ${service.color}`}
            >
              <CardHeader className="pb-4">
                <div className="p-4 bg-white/70 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl text-foreground font-semibold leading-tight">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
