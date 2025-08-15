import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Watermark from "@/components/Watermark";
import { CheckCircle, Users, Award, Zap, FileText, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import heroStudents from "@/assets/hero-students.jpg";
import studentWorking from "@/assets/student-working.jpg";
import graduationSuccess from "@/assets/graduation-success.jpg";
import professionalCV from "@/assets/professional-cv.jpg";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-poppins text-2xl font-bold gradient-hero bg-clip-text text-transparent">
            Career Craft
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-foreground hover:text-primary transition-smooth">Features</a>
            <a href="#process" className="text-foreground hover:text-primary transition-smooth">How It Works</a>
            <a href="#success" className="text-foreground hover:text-primary transition-smooth">Success Stories</a>
          </div>
          <div className="flex space-x-4">
            <Link to="/auth">
              <Button variant="ghost" size="sm">Sign In</Button>
            </Link>
            <Link to="/auth">
              <Button variant="hero" size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroStudents})` }}
        ></div>
        
        <div className="relative container mx-auto px-6 text-center text-white z-10">
          <h1 className="font-poppins text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Craft Your Career,
            <br />
            <span className="text-yellow-300">Land Your Dream Job</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up opacity-90">
            Career Craft empowers Ghanaian university students with AI-powered, 
            professionally crafted CVs and resumes that get results.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up">
            <Link to="/auth">
              <Button variant="premium" size="xl">
                Create Your CV Now
              </Button>
            </Link>
            <Link to="/payment">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Make Payment
              </Button>
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-scale-in">
            <div className="text-center">
              <div className="text-4xl font-bold">500+</div>
              <div className="text-lg opacity-90">Students Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">95%</div>
              <div className="text-lg opacity-90">Job Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">48hrs</div>
              <div className="text-lg opacity-90">Average Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-poppins text-4xl font-bold mb-6">
              Why Choose Career Craft?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine AI technology with human expertise to create CVs that stand out 
              in Ghana's competitive job market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 gradient-card shadow-medium hover:shadow-strong transition-smooth animate-slide-in-left">
              <div className="w-16 h-16 gradient-button rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-poppins text-xl font-semibold mb-4">AI-Powered Creation</h3>
              <p className="text-muted-foreground">
                Advanced AI analyzes your profile and crafts a personalized CV 
                optimized for Ghanaian employers and international opportunities.
              </p>
            </Card>

            <Card className="p-8 gradient-card shadow-medium hover:shadow-strong transition-smooth animate-slide-in-left">
              <div className="w-16 h-16 gradient-button rounded-2xl flex items-center justify-center mb-6">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-poppins text-xl font-semibold mb-4">Professional Templates</h3>
              <p className="text-muted-foreground">
                Choose from industry-specific templates designed to highlight 
                your unique skills and academic achievements effectively.
              </p>
            </Card>

            <Card className="p-8 gradient-card shadow-medium hover:shadow-strong transition-smooth animate-slide-in-left">
              <div className="w-16 h-16 gradient-button rounded-2xl flex items-center justify-center mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-poppins text-xl font-semibold mb-4">Direct Delivery</h3>
              <p className="text-muted-foreground">
                Your completed CV is delivered straight to your email, 
                ready to send to employers within 48 hours.
              </p>
            </Card>

            <Card className="p-8 gradient-card shadow-medium hover:shadow-strong transition-smooth animate-slide-in-left">
              <div className="w-16 h-16 gradient-button rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-poppins text-xl font-semibold mb-4">Expert Review</h3>
              <p className="text-muted-foreground">
                Every CV is reviewed by career experts who understand 
                the Ghanaian job market and employer expectations.
              </p>
            </Card>

            <Card className="p-8 gradient-card shadow-medium hover:shadow-strong transition-smooth animate-slide-in-left">
              <div className="w-16 h-16 gradient-button rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-poppins text-xl font-semibold mb-4">Proven Results</h3>
              <p className="text-muted-foreground">
                95% of our students receive job offers within 3 months 
                of using their Career Craft CV.
              </p>
            </Card>

            <Card className="p-8 gradient-card shadow-medium hover:shadow-strong transition-smooth animate-slide-in-left">
              <div className="w-16 h-16 gradient-button rounded-2xl flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-poppins text-xl font-semibold mb-4">Quality Guarantee</h3>
              <p className="text-muted-foreground">
                Not satisfied? We'll revise your CV until it meets 
                your expectations. Your success is our mission.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-poppins text-4xl font-bold mb-6">
              Simple 3-Step Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From student information to professional CV in just 48 hours
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 gradient-button rounded-xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-poppins text-xl font-semibold mb-2">Submit Your Information</h3>
                  <p className="text-muted-foreground">
                    Fill out our comprehensive form with your academic details, 
                    skills, certificates, and career aspirations.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 gradient-button rounded-xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-poppins text-xl font-semibold mb-2">AI + Expert Crafting</h3>
                  <p className="text-muted-foreground">
                    Our AI analyzes your profile while our experts ensure 
                    cultural relevance and industry best practices.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 gradient-button rounded-xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-poppins text-xl font-semibold mb-2">Receive Your CV</h3>
                  <p className="text-muted-foreground">
                    Get your professionally crafted CV delivered to your email, 
                    ready to impress employers and land interviews.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <img 
                src={studentWorking} 
                alt="Student working on laptop with CV documents"
                className="w-full h-96 object-cover rounded-2xl shadow-strong"
              />
              <div className="absolute inset-0 gradient-button opacity-20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="success" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-poppins text-4xl font-bold mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real students, real results. See how Career Craft transforms careers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-scale-in">
              <img 
                src={graduationSuccess} 
                alt="Diverse group of African graduates celebrating success"
                className="w-full h-96 object-cover rounded-2xl shadow-strong"
              />
            </div>

            <div className="space-y-8 animate-slide-in-left">
              <Card className="p-6 gradient-card shadow-medium">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">KA</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Kwame Asante</h4>
                    <p className="text-sm text-muted-foreground">Computer Science, KNUST</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Career Craft transformed my basic academic CV into a professional 
                  document that landed me a software developer role at a top Ghanaian tech company!"
                </p>
              </Card>

              <Card className="p-6 gradient-card shadow-medium">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">EA</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Esi Adjei</h4>
                    <p className="text-sm text-muted-foreground">Business Administration, UG</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "The professional CV I received helped me secure an internship 
                  at a multinational company. The quality exceeded my expectations!"
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-6 text-center text-white">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of Ghanaian students who've accelerated their careers with Career Craft. 
              Your dream job is just one professional CV away.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/auth">
                <Button variant="premium" size="xl" className="bg-white text-primary hover:bg-gray-100">
                  Start Your Journey
                </Button>
              </Link>
              <Link to="/payment">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                  Make Payment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground text-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="font-poppins text-2xl font-bold mb-4 gradient-hero bg-clip-text text-transparent">
                Career Craft
              </div>
              <p className="text-sm opacity-80">
                Empowering Ghanaian students to achieve their career dreams 
                through professionally crafted CVs and resumes.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>CV Writing</li>
                <li>Resume Creation</li>
                <li>Profile Review</li>
                <li>Career Consultation</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Contact Us</li>
                <li>FAQ</li>
                <li>Guidelines</li>
                <li>Success Stories</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>info@careercraft.gh</li>
                <li>+233 24 123 4567</li>
                <li>Accra, Ghana</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/20 mt-8 pt-8 text-center text-sm opacity-60">
            <p>&copy; 2024 Career Craft Ghana. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <Watermark />
    </div>
  );
};

export default Landing;