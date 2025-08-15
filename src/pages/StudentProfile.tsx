import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Watermark from "@/components/Watermark";
import { ArrowLeft, Upload, Plus, X } from "lucide-react";
import { Link } from "react-router-dom";
import professionalCV from "@/assets/professional-cv.jpg";

interface StudentData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    linkedIn: string;
  };
  education: {
    university: string;
    degree: string;
    fieldOfStudy: string;
    graduationYear: string;
    gpa: string;
  };
  skills: string[];
  certificates: string[];
  experience: string;
  careerGoals: string;
}

const StudentProfile = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [studentData, setStudentData] = useState<StudentData>({
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      linkedIn: ""
    },
    education: {
      university: "",
      degree: "",
      fieldOfStudy: "",
      graduationYear: "",
      gpa: ""
    },
    skills: [],
    certificates: [],
    experience: "",
    careerGoals: ""
  });

  const [newSkill, setNewSkill] = useState("");
  const [newCertificate, setNewCertificate] = useState("");

  const addSkill = () => {
    if (newSkill.trim()) {
      setStudentData(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()]
      }));
      setNewSkill("");
    }
  };

  const removeSkill = (index: number) => {
    setStudentData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };

  const addCertificate = () => {
    if (newCertificate.trim()) {
      setStudentData(prev => ({
        ...prev,
        certificates: [...prev.certificates, newCertificate.trim()]
      }));
      setNewCertificate("");
    }
  };

  const removeCertificate = (index: number) => {
    setStudentData(prev => ({
      ...prev,
      certificates: prev.certificates.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async () => {
    // Here you would typically send the data to your backend
    console.log("Student Data:", studentData);
    // Show success message and redirect
    alert("Your profile has been submitted! We'll craft your professional CV and send it to your email within 48 hours.");
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const universities = [
    "University of Ghana (UG)",
    "Kwame Nkrumah University of Science and Technology (KNUST)",
    "University of Cape Coast (UCC)",
    "Ghana Institute of Management and Public Administration (GIMPA)",
    "Ashesi University",
    "University for Development Studies (UDS)",
    "University of Education, Winneba (UEW)",
    "Central University",
    "Valley View University",
    "Other"
  ];

  const degrees = [
    "Bachelor of Science (BSc)",
    "Bachelor of Arts (BA)",
    "Bachelor of Technology (BTech)",
    "Bachelor of Commerce (BCom)",
    "Bachelor of Business Administration (BBA)",
    "Bachelor of Engineering (BEng)",
    "Bachelor of Laws (LLB)",
    "Master of Science (MSc)",
    "Master of Arts (MA)",
    "Master of Business Administration (MBA)",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Navigation */}
      <nav className="bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-primary hover:text-primary-hover transition-smooth">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          <div className="font-poppins text-2xl font-bold gradient-hero bg-clip-text text-transparent">
            Career Craft
          </div>
          <div className="text-sm text-muted-foreground">
            Step {currentStep} of 4
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-smooth ${
                    step <= currentStep
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step}
                </div>
              ))}
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-smooth"
                style={{ width: `${(currentStep / 4) * 100}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <Card className="p-8 gradient-card shadow-medium animate-fade-in">
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="font-poppins text-2xl font-bold mb-2">Personal Information</h2>
                      <p className="text-muted-foreground">Let's start with your basic details</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          value={studentData.personalInfo.fullName}
                          onChange={(e) =>
                            setStudentData(prev => ({
                              ...prev,
                              personalInfo: { ...prev.personalInfo, fullName: e.target.value }
                            }))
                          }
                          placeholder="Enter your full name"
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={studentData.personalInfo.email}
                          onChange={(e) =>
                            setStudentData(prev => ({
                              ...prev,
                              personalInfo: { ...prev.personalInfo, email: e.target.value }
                            }))
                          }
                          placeholder="your.email@example.com"
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          value={studentData.personalInfo.phone}
                          onChange={(e) =>
                            setStudentData(prev => ({
                              ...prev,
                              personalInfo: { ...prev.personalInfo, phone: e.target.value }
                            }))
                          }
                          placeholder="+233 24 123 4567"
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label htmlFor="location">Location *</Label>
                        <Input
                          id="location"
                          value={studentData.personalInfo.location}
                          onChange={(e) =>
                            setStudentData(prev => ({
                              ...prev,
                              personalInfo: { ...prev.personalInfo, location: e.target.value }
                            }))
                          }
                          placeholder="Accra, Ghana"
                          className="mt-2"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <Label htmlFor="linkedIn">LinkedIn Profile (Optional)</Label>
                        <Input
                          id="linkedIn"
                          value={studentData.personalInfo.linkedIn}
                          onChange={(e) =>
                            setStudentData(prev => ({
                              ...prev,
                              personalInfo: { ...prev.personalInfo, linkedIn: e.target.value }
                            }))
                          }
                          placeholder="https://linkedin.com/in/yourprofile"
                          className="mt-2"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Education */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="font-poppins text-2xl font-bold mb-2">Education Details</h2>
                      <p className="text-muted-foreground">Tell us about your academic background</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <Label htmlFor="university">University *</Label>
                        <Select
                          value={studentData.education.university}
                          onValueChange={(value) =>
                            setStudentData(prev => ({
                              ...prev,
                              education: { ...prev.education, university: value }
                            }))
                          }
                        >
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select your university" />
                          </SelectTrigger>
                          <SelectContent>
                            {universities.map((uni) => (
                              <SelectItem key={uni} value={uni}>
                                {uni}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="degree">Degree Type *</Label>
                        <Select
                          value={studentData.education.degree}
                          onValueChange={(value) =>
                            setStudentData(prev => ({
                              ...prev,
                              education: { ...prev.education, degree: value }
                            }))
                          }
                        >
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select degree type" />
                          </SelectTrigger>
                          <SelectContent>
                            {degrees.map((degree) => (
                              <SelectItem key={degree} value={degree}>
                                {degree}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="fieldOfStudy">Field of Study *</Label>
                        <Input
                          id="fieldOfStudy"
                          value={studentData.education.fieldOfStudy}
                          onChange={(e) =>
                            setStudentData(prev => ({
                              ...prev,
                              education: { ...prev.education, fieldOfStudy: e.target.value }
                            }))
                          }
                          placeholder="e.g., Computer Science"
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label htmlFor="graduationYear">Graduation Year *</Label>
                        <Input
                          id="graduationYear"
                          value={studentData.education.graduationYear}
                          onChange={(e) =>
                            setStudentData(prev => ({
                              ...prev,
                              education: { ...prev.education, graduationYear: e.target.value }
                            }))
                          }
                          placeholder="2024"
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label htmlFor="gpa">GPA/Class (Optional)</Label>
                        <Input
                          id="gpa"
                          value={studentData.education.gpa}
                          onChange={(e) =>
                            setStudentData(prev => ({
                              ...prev,
                              education: { ...prev.education, gpa: e.target.value }
                            }))
                          }
                          placeholder="3.8/4.0 or First Class"
                          className="mt-2"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Skills & Certificates */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="font-poppins text-2xl font-bold mb-2">Skills & Certificates</h2>
                      <p className="text-muted-foreground">Showcase your abilities and achievements</p>
                    </div>

                    <div>
                      <Label htmlFor="skills">Skills</Label>
                      <div className="flex gap-2 mt-2">
                        <Input
                          value={newSkill}
                          onChange={(e) => setNewSkill(e.target.value)}
                          placeholder="Enter a skill"
                          onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                        />
                        <Button onClick={addSkill} size="sm" variant="outline">
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {studentData.skills.map((skill, index) => (
                          <div
                            key={index}
                            className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm flex items-center gap-2"
                          >
                            {skill}
                            <button onClick={() => removeSkill(index)} className="hover:text-red-300">
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="certificates">Certificates & Awards</Label>
                      <div className="flex gap-2 mt-2">
                        <Input
                          value={newCertificate}
                          onChange={(e) => setNewCertificate(e.target.value)}
                          placeholder="Enter certificate or award"
                          onKeyPress={(e) => e.key === 'Enter' && addCertificate()}
                        />
                        <Button onClick={addCertificate} size="sm" variant="outline">
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="space-y-2 mt-3">
                        {studentData.certificates.map((cert, index) => (
                          <div
                            key={index}
                            className="bg-muted px-3 py-2 rounded-lg flex items-center justify-between"
                          >
                            <span className="text-sm">{cert}</span>
                            <button onClick={() => removeCertificate(index)} className="text-destructive hover:text-destructive/80">
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="experience">Work Experience (Optional)</Label>
                      <Textarea
                        id="experience"
                        value={studentData.experience}
                        onChange={(e) =>
                          setStudentData(prev => ({ ...prev, experience: e.target.value }))
                        }
                        placeholder="Describe any internships, part-time jobs, or volunteer work..."
                        rows={4}
                        className="mt-2"
                      />
                    </div>
                  </div>
                )}

                {/* Step 4: Career Goals */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="font-poppins text-2xl font-bold mb-2">Career Goals</h2>
                      <p className="text-muted-foreground">Help us tailor your CV to your aspirations</p>
                    </div>

                    <div>
                      <Label htmlFor="careerGoals">Career Objectives & Goals *</Label>
                      <Textarea
                        id="careerGoals"
                        value={studentData.careerGoals}
                        onChange={(e) =>
                          setStudentData(prev => ({ ...prev, careerGoals: e.target.value }))
                        }
                        placeholder="Describe your career goals, target industries, and what type of roles you're seeking..."
                        rows={6}
                        className="mt-2"
                      />
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Review Your Information</h3>
                      <div className="text-sm space-y-1 text-muted-foreground">
                        <p><strong>Name:</strong> {studentData.personalInfo.fullName}</p>
                        <p><strong>Email:</strong> {studentData.personalInfo.email}</p>
                        <p><strong>University:</strong> {studentData.education.university}</p>
                        <p><strong>Degree:</strong> {studentData.education.degree} in {studentData.education.fieldOfStudy}</p>
                        <p><strong>Skills:</strong> {studentData.skills.join(', ')}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-8">
                  <Button
                    onClick={prevStep}
                    variant="outline"
                    disabled={currentStep === 1}
                    className="flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Previous
                  </Button>

                  {currentStep < 4 ? (
                    <Button onClick={nextStep} variant="hero" className="flex items-center gap-2">
                      Next
                      <Plus className="w-4 h-4 rotate-90" />
                    </Button>
                  ) : (
                    <Button onClick={handleSubmit} variant="premium" size="lg">
                      Submit Profile
                    </Button>
                  )}
                </div>
              </Card>
            </div>

            {/* Side Panel */}
            <div className="space-y-6">
              <Card className="p-6 gradient-card shadow-medium animate-scale-in">
                <div className="text-center">
                  <img
                    src={professionalCV}
                    alt="Professional CV example"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="font-poppins text-lg font-semibold mb-2">
                    Professional CV Creation
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Our AI-powered system creates stunning CVs tailored to the Ghanaian job market.
                  </p>
                </div>
              </Card>

              <Card className="p-6 gradient-card shadow-medium">
                <h3 className="font-semibold mb-4">What Happens Next?</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5">
                      1
                    </div>
                    <p className="text-muted-foreground">Your information is securely processed</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5">
                      2
                    </div>
                    <p className="text-muted-foreground">AI creates your professional CV</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5">
                      3
                    </div>
                    <p className="text-muted-foreground">Expert review and refinement</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5">
                      4
                    </div>
                    <p className="text-muted-foreground">Delivered to your email within 48 hours</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 gradient-button text-white">
                <div className="text-center">
                  <Upload className="w-12 h-12 mx-auto mb-3 opacity-80" />
                  <h3 className="font-semibold mb-2">Secure & Confidential</h3>
                  <p className="text-sm opacity-90">
                    Your personal information is encrypted and handled with the highest security standards.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Watermark />
    </div>
  );
};

export default StudentProfile;