import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Clock, CheckCircle } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column with Video */}
          <div className="fade-in">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-2 h-96 flex items-center justify-center shadow-lg overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="rounded-xl w-full h-full object-cover"
              >
                <source src="images/team-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Right Column with Text */}
          <div className="fade-in">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">
              About Us
            </h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed mb-6">
              We provide end-to-end accounting, tax, and business consulting solutions. With expertise in financial
              compliance and advisory, we ensure accurate, reliable, and timely services for individuals and businesses.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our team of qualified chartered accountants combines years of experience with modern technology to deliver
              exceptional results. We understand the complexities of financial management and are committed to helping
              our clients achieve their business objectives through strategic financial guidance.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">Expert Team</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">Timely Delivery</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">Quality Assurance</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">Certified Services</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="card-hover border-0 shadow-md bg-white rounded-xl text-center">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Expert Team</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Qualified chartered accountants with years of experience
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover border-0 shadow-md bg-white rounded-xl text-center">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Certified Services</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Professional certification and compliance with industry standards
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover border-0 shadow-md bg-white rounded-xl text-center">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Timely Delivery</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Meeting deadlines with accurate and reliable reporting
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover border-0 shadow-md bg-white rounded-xl text-center">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Quality Assurance</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Thorough review processes ensuring accuracy and compliance
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
