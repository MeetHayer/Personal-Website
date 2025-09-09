import { motion } from 'framer-motion'
import { BookOpen, Code, Calculator, TrendingUp, Database, Globe, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'
import { useState, useEffect } from 'react'

const courses = [
  // Finance courses (from resume)
  { name: 'Statistics for Economics and Management', category: 'finance', icon: Calculator },
  { name: 'Investment & Portfolio Analysis', category: 'finance', icon: TrendingUp },
  { name: 'Portfolio Management', category: 'finance', icon: TrendingUp },
  { name: 'Econometrics', category: 'finance', icon: Calculator },
  { name: 'Intermediate Macroeconomics', category: 'finance', icon: Globe },
  { name: 'Regression with Microdata', category: 'finance', icon: Calculator },
  { name: 'Corporate Finance', category: 'finance', icon: TrendingUp },
  { name: 'Financial Accounting', category: 'finance', icon: Calculator },
  
  // CS courses (from resume)
  { name: 'Object Oriented Software Development', category: 'cs', icon: Code },
  { name: 'Foundations of Computation', category: 'cs', icon: Code },
  { name: 'Computer Science I', category: 'cs', icon: Code },
  { name: 'Data Structures', category: 'cs', icon: Database },
  
  // Math courses (from resume)
  { name: 'Discrete Mathematics', category: 'math', icon: Calculator },
  
  // Business courses (from resume)
  { name: 'HONR-Business & the liberal arts', category: 'business', icon: BookOpen },
  
  // Miscellaneous courses (from resume)
  { name: 'Contemporary Society', category: 'misc', icon: Globe },
  { name: 'Intro Peace and Conflicts', category: 'misc', icon: Globe },
  { name: 'Literature: Poetry, Fiction and Drama', category: 'misc', icon: BookOpen },
  { name: 'Civic Education I', category: 'misc', icon: Globe },
]

const categoryColors = {
  finance: 'from-slate-600 to-slate-700',
  cs: 'from-violet-500 to-purple-600',
  math: 'from-blue-500 to-indigo-600',
  business: 'from-blue-500 to-cyan-600',
  misc: 'from-emerald-500 to-teal-600',
}

const categoryIcons = {
  finance: TrendingUp,
  cs: Code,
  math: Calculator,
  business: BookOpen,
  misc: Globe,
}

export default function CoursesBelt() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Filter courses by selected category
  const filteredCourses = selectedCategory 
    ? courses.filter(course => course.category === selectedCategory)
    : courses

  // Reset current index when category changes
  useEffect(() => {
    setCurrentIndex(0)
  }, [selectedCategory])

  // Auto-advance courses
  useEffect(() => {
    if (!isPlaying || isHovered) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredCourses.length)
    }, 2000) // Change every 2 seconds

    return () => clearInterval(interval)
  }, [isPlaying, isHovered, filteredCourses.length])

  const nextCourse = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredCourses.length)
  }

  const prevCourse = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredCourses.length) % filteredCourses.length)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const currentCourse = filteredCourses[currentIndex]
  const CategoryIcon = categoryIcons[currentCourse.category as keyof typeof categoryIcons]
  const colorClass = categoryColors[currentCourse.category as keyof typeof categoryColors]

  return (
    <div className="relative py-8">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 opacity-50 rounded-2xl"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-slate-700 dark:text-slate-200 mb-2 font-heading">
            Academic Journey
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Explore the diverse courses that shaped my knowledge
          </p>
        </div>

        {/* Main Course Display */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Course Card */}
            <div className={`relative bg-gradient-to-r ${colorClass} rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300`}>
              <div className="flex items-center justify-between">
                {/* Left side - Category and Course Info */}
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <CategoryIcon className="text-white" size={28} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-1 font-heading">
                      {currentCourse.name}
                    </h4>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-white/60"></div>
                      <span className="text-white/80 text-sm capitalize font-medium">
                        {currentCourse.category === 'cs' ? 'Computer Science' : currentCourse.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right side - Course Icon */}
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <currentCourse.icon className="text-white" size={24} />
                </div>
              </div>

              {/* Progress Indicator */}
              <div className="mt-6 flex justify-center">
                <div className="flex gap-2">
                  {filteredCourses.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex ? 'bg-white' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prevCourse}
              className="p-3 rounded-full bg-white/80 dark:bg-slate-700/80 hover:bg-white dark:hover:bg-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="text-slate-700 dark:text-slate-200" size={20} />
            </button>

            <button
              onClick={togglePlayPause}
              className="p-4 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              {isPlaying ? (
                <Pause className="text-white" size={20} />
              ) : (
                <Play className="text-white" size={20} />
              )}
            </button>

            <button
              onClick={nextCourse}
              className="p-3 rounded-full bg-white/80 dark:bg-slate-700/80 hover:bg-white dark:hover:bg-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="text-slate-700 dark:text-slate-200" size={20} />
            </button>
          </div>

          {/* Course Counter */}
          <div className="text-center mt-4">
            <span className="text-sm text-slate-600 dark:text-slate-400 font-mono">
              {currentIndex + 1} of {filteredCourses.length}
            </span>
          </div>
        </div>

        {/* Course Categories Preview */}
        <div className="mt-8 flex justify-center gap-2 flex-wrap">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105 ${
              selectedCategory === null
                ? 'bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300'
                : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-600'
            }`}
          >
            <span>All Courses</span>
          </button>
          {Object.entries(categoryIcons).map(([category, Icon]) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-600'
              }`}
            >
              <Icon size={14} />
              <span className="capitalize">
                {category === 'cs' ? 'CS' : category === 'misc' ? 'Liberal Arts' : category}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}