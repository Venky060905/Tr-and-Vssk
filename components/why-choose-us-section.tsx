
import { CheckCircle, Users, Clock, MessageSquare } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Reliable & Experienced Professionals",
    description: "Our team of qualified chartered accountants brings years of expertise to every project",
  },
  {
    icon: CheckCircle,
    title: "End-to-End Business Support",
    description: "Complete business solutions from accounting to tax compliance and advisory services",
  },
  {
    icon: Clock,
    title: "Timely & Accurate Reporting",
    description: "We ensure all deliverables meet deadlines with the highest accuracy standards",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description: "Clear, honest communication throughout every step of our engagement",
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16 fade-in">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">
            Why Choose Us
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            We combine professional expertise with personalized service to deliver exceptional results for our clients
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="h-10 w-10 text-white" />
                </div>
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3 leading-tight">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
