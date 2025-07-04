import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Mail, Calendar, MapPin, Award, Code, Briefcase } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ParticleBackground } from "@/components/particle-background"
import { FloatingShapes } from "@/components/floating-shapes"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background relative particle-overlay">
      <ParticleBackground />
      <FloatingShapes />

      {/* Keep all existing content but wrap it in a relative container */}
      <div className="relative z-10">
        {/* Header */}
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center">
            <div className="mr-4 flex">
              <Link href="#home" className="mr-6 flex items-center space-x-2">
                <span className="font-bold text-xl">Portfolio</span>
              </Link>
            </div>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#home" className="transition-colors hover:text-foreground/80">
                Home
              </Link>
              <Link href="#experience" className="transition-colors hover:text-foreground/80">
                Experience
              </Link>
              <Link href="#achievements" className="transition-colors hover:text-foreground/80">
                Achievements
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
            <div className="ml-auto flex items-center space-x-2">
              <Button variant="ghost" size="sm" asChild>
                <a href="mailto:akashbellary007@gmail.com">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://github.com/Akashbellary" target="_blank">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://www.linkedin.com/in/akash-br-b86a94219/" target="_blank">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </header>

        <main>
          {/* Hero Section */}
          <section id="home" className="py-24 md:py-32">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      Hi, I'm Akash BR
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      Machine Learning Engineer & Full Stack Developer passionate about AI, data science, and building
                      intelligent systems. I specialize in Python, Django, and modern ML technologies.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button size="lg" asChild>
                      <Link href="#projects">View My Work</Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <Link href="mailto:akashbellary007@gmail.com">Get In Touch</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="bg-[#ffdaf0] text-[#000000] hover:bg-[#f8ccdc] transition-colors">
                      <Link href="https://drive.google.com/file/d/16dZQq1gn6DBoS4FG0ajbX8eQcvoQyrIw/view?usp=sharing">Resume</Link>
                    </Button>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>Bangalore, India</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Briefcase className="h-4 w-4" />
                      <span>Available for hire</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      width={400}
                      height={400}
                      alt="Profile"
                      className="aspect-square overflow-hidden rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="py-24 bg-muted/50">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Experience</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    My professional journey and the roles that have shaped my expertise.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>ML & Django Developer Intern</CardTitle>
                      <Badge variant="secondary">Recent</Badge>
                    </div>
                    <CardDescription className="flex items-center space-x-2">
                      <span>Way2AgriBusiness</span>
                      <Separator orientation="vertical" className="h-4" />
                      <span className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>2024</span>
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Developed crop suitability prediction model using machine learning algorithms</li>
                      <li>
                        • Built CNN-based plant disease detection system with cause analysis and solution
                        recommendations
                      </li>
                      <li>• Enhanced and debugged key features on official websites to improve user experience</li>
                      <li>• Worked on agriculture-focused online marketplace for farm equipment and seeds</li>
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge variant="outline">Python</Badge>
                      <Badge variant="outline">Machine Learning</Badge>
                      <Badge variant="outline">Django</Badge>
                      <Badge variant="outline">CNN</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Java Full Stack Developer</CardTitle>
                    <CardDescription className="flex items-center space-x-2">
                      <span>TNS India Foundation</span>
                      <Separator orientation="vertical" className="h-4" />
                      <span className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>Training Program</span>
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Completed comprehensive Java Full Stack Development training program</li>
                      <li>• Built Placement Management System as capstone project</li>
                      <li>• Implemented CRUD operations for managing student and recruiter data</li>
                      <li>• Gained hands-on experience with enterprise Java development</li>
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge variant="outline">Java</Badge>
                      <Badge variant="outline">Spring Tool Suite</Badge>
                      <Badge variant="outline">PostgreSQL</Badge>
                      <Badge variant="outline">Full Stack</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Achievements Section */}
          <section id="achievements" className="py-24">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Achievements</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Recognition and milestones that highlight my professional growth and contributions.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
                <Card className="text-center">
                  <CardHeader>
                    <Award className="mx-auto h-12 w-12 text-primary" />
                    <CardTitle>HackerRank Gold Badge</CardTitle>
                    <CardDescription>Python - 5 Star Rating</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Achieved 5-star gold badge in Python programming on HackerRank platform, demonstrating advanced
                      coding skills.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <Award className="mx-auto h-12 w-12 text-primary" />
                    <CardTitle>HackerRank Silver Badges</CardTitle>
                    <CardDescription>SQL, C++, Java - 3 Star Rating</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Earned 3-star silver badges in SQL, C++, and Java, showcasing proficiency across multiple
                      programming languages.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <Code className="mx-auto h-12 w-12 text-primary" />
                    <CardTitle>LeetCode Problem Solver</CardTitle>
                    <CardDescription>300+ Problems Solved</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Successfully solved over 300 algorithmic problems on LeetCode, strengthening data structures and
                      algorithms expertise.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <Award className="mx-auto h-12 w-12 text-primary" />
                    <CardTitle>Research Publications</CardTitle>
                    <CardDescription>Financial AI & Healthcare</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Published research on "FinMM-Edit: Context-Aware Correction Layer for OCR" and "Cloud Computing
                      For Smart Healthcare System."
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <Award className="mx-auto h-12 w-12 text-primary" />
                    <CardTitle>Professional Certificates</CardTitle>
                    <CardDescription>AI/ML & Cloud Computing</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      AWS ML Foundations, NLP Specialization by Andrew NG, Data Analysis with Python, and AI/ML Job
                      Simulation certificates.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <Award className="mx-auto h-12 w-12 text-primary" />
                    <CardTitle>Technical Expertise</CardTitle>
                    <CardDescription>Data Science & Machine Learning</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Specialized in Python libraries including NumPy, Pandas, Matplotlib, and Scikit-learn for data
                      analysis and ML projects.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-24 bg-muted/50">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Projects</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    A showcase of my recent work and personal projects that demonstrate my skills and creativity.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
                <Card><a href='#'>
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <Image
                      src="/ProjectImages/FinMM.jpg"
                      width={400}
                      height={200}
                      alt="FinMM-Edit System"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>FinMM-Edit: Financial Correction System</CardTitle>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm" asChild>
                          <Link href="https://github.com/Akashbellary" target="_blank">
                            <Github className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                    <CardDescription>
                      Intelligent Financial Document Correction System with OCR error correction
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Advanced system combining rule-based processing and LLMs for high-accuracy currency, number, and
                      context validation. Features automatic OCR error correction and context-aware financial
                      interpretations.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Python</Badge>
                      <Badge variant="outline">LLMs</Badge>
                      <Badge variant="outline">OCR</Badge>
                      <Badge variant="outline">NLP</Badge>
                    </div>
                  </CardContent>
                  </a>
                </Card>

                <Card><a href='#'>
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <Image
                      src="ProjectImages/Plant disease detection system.jpg"
                      width={400}
                      height={200}
                      alt="Plant Disease Detection"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Plant Disease Detection System</CardTitle>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm" asChild>
                          <Link href="https://github.com/Akashbellary" target="_blank">
                            <Github className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                    <CardDescription>CNN-based plant disease diagnosis with solution recommendations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Robust system using adapted CNN architectures for plant disease diagnosis. Provides detailed
                      insights into causes and recommends tailored solutions to enhance crop health and yield.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">CNN</Badge>
                      <Badge variant="outline">TensorFlow</Badge>
                      <Badge variant="outline">Computer Vision</Badge>
                      <Badge variant="outline">Agriculture</Badge>
                    </div>
                  </CardContent>
                  </a>
                </Card>

                <Card>
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      width={400}
                      height={200}
                      alt="AI Web Chatbot"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>AI Web Chatbot</CardTitle>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm" asChild>
                          <Link href="https://github.com" target="_blank">
                            <Github className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                    <CardDescription>NLP-driven chatbot with deep learning intent classification</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Built using Python, NLTK, TensorFlow, and Keras with deep learning model (128-64-dense) trained
                      with SGD, ReLU, and Softmax for accurate intent classification from JSON dataset.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Python</Badge>
                      <Badge variant="outline">NLTK</Badge>
                      <Badge variant="outline">TensorFlow</Badge>
                      <Badge variant="outline">Keras</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <Image
                      src="ProjectImages/3DMarket.jpg"
                      width={400}
                      height={200}
                      alt="3D Asset Store"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>3D Asset Store</CardTitle>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm" asChild>
                          <Link href="https://github.com" target="_blank">
                            <Github className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                    <CardDescription>Platform for artists to post and sell 3D models and scans</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Full-stack web application where artists can post 3D models and 3D scans. Features complete CRUD
                      operations and advanced search functionality for easy asset discovery.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">HTML/CSS</Badge>
                      <Badge variant="outline">Django</Badge>
                      <Badge variant="outline">Python</Badge>
                      <Badge variant="outline">CRUD</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <Image
                      src="/ProjectImages/FEBMRS.jpg"
                      width={400}
                      height={200}
                      alt="Movie Recommendation System"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Face Expression Based Movie Recommendation System</CardTitle>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm" asChild>
                          <Link href="https://github.com/Akashbellary/recommendmovie" target="_blank">
                            <Github className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                    <CardDescription>Mood-based movie recommendation using facial expression analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Innovative system that suggests movies based on user's current mood detected through facial
                      expressions, making it easy to select the perfect movie for any moment.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Computer Vision</Badge>
                      <Badge variant="outline">Machine Learning</Badge>
                      <Badge variant="outline">OpenCV</Badge>
                      <Badge variant="outline">Recommendation System</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card><a href = 'https://google.com'>
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <Image
                      src="ProjectImages/DataScience.jpg"
                      width={400}
                      height={200}
                      alt="Data Science Projects"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Data Science Portfolio</CardTitle>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm" asChild>
                          <Link href="https://github.com" target="_blank">
                            <Github className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                    <CardDescription>Collection of ML and data analysis projects</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Multiple projects including Stock Price Forecasting, Spam Email Detection, Sentiment Analysis,
                      Medical Data Visualizer, House Price Prediction, and Speech Recognition System using Python
                      libraries.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">NumPy</Badge>
                      <Badge variant="outline">Pandas</Badge>
                      <Badge variant="outline">Matplotlib</Badge>
                      <Badge variant="outline">Scikit-learn</Badge>
                    </div>
                  </CardContent>
                  </a>
                </Card>
                <Card>
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <Image
                      src="/ProjectImages/Fine Tuning LLM GPT2.jpg"
                      width={400}
                      height={200}
                      alt="Movie Recommendation System"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Fine-tuned LLM to Answer Customer Queries</CardTitle>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm" asChild>
                          <Link href="https://github.com" target="_blank">
                            <Github className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                    <CardDescription>Mood-based movie recommendation using facial expression analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Innovative system that suggests movies based on user's current mood detected through facial
                      expressions, making it easy to select the perfect movie for any moment.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Computer Vision</Badge>
                      <Badge variant="outline">Machine Learning</Badge>
                      <Badge variant="outline">OpenCV</Badge>
                      <Badge variant="outline">Recommendation System</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card><a href = 'https://recommendmovie007.streamlit.app/'>
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <Image
                      src="/ProjectImages/Movie recommendation system.jpg"
                      width={400}
                      height={200}
                      alt="Movie Recommendation System"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Movie recommendation system</CardTitle>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm" asChild>
                          <Link href="https://github.com/Akashbellary/recommendmovie" target="_blank">
                            <Github className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                    <CardDescription>Mood-based movie recommendation using facial expression analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Innovative system that suggests movies based on user's current mood detected through facial
                      expressions, making it easy to select the perfect movie for any moment.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Computer Vision</Badge>
                      <Badge variant="outline">Machine Learning</Badge>
                      <Badge variant="outline">OpenCV</Badge>
                      <Badge variant="outline">Recommendation System</Badge>
                    </div>
                  </CardContent>
                  </a>
                </Card>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-24" id='contact'>
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Let's Work Together</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I'm always interested in new opportunities and exciting projects. Let's connect and discuss how we
                    can collaborate.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="mailto:akashbellary007@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Email
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="https://www.linkedin.com/in/akash-br-b86a94219/" target="_blank">
                      <Linkedin className="mr-2 h-4 w-4" />
                      Connect on LinkedIn
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t py-6 md:py-0">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
            <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
              <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                © 2024 Akash BR. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="mailto:akashbellary007@gmail.com">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://github.com/Akashbellary" target="_blank">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://www.linkedin.com/in/akash-br-b86a94219/" target="_blank">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
