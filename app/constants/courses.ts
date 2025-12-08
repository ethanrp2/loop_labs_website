import { Course } from '@/app/types/courses';

/**
 * Mock course data for development
 * Replace with CMS or API data in production
 */
export const MOCK_COURSES: Course[] = [
  {
    id: '1',
    title: 'Loop Lab Sprouts',
    subtitle: 'Recommended for Grades K-2',
    description:
      'Curious Minds Discover AI Learning through the AI Mastery Blueprint and LoopLabs coursework.',
    imageUrl: '/images/coursework/sprouts.png',
    curriculum: `AI Story Friends: Fun tales featuring characters who utilize little "thinking machines" to address challenges, promoting an understanding of AI governance.

Play & Patterns: Simple games that illustrate the importance of steps and order.

Everyday Magic: Gadgets that talk, move, or light up—helping kids discover how AI makes things exciting while introducing them to hands-on coding.`,
    enrollLink: '/enroll/sprouts',
  },
  {
    id: '2',
    title: 'LoopLabs Junior',
    subtitle: 'Recommended for Grades 3-5',
    description:
      "Building strong foundations is essential for success in any field. With the rise of AI learning, individuals can harness the power of technology to enhance their skills. The AI Mastery Blueprint provides a comprehensive guide for those looking to deepen their understanding of artificial intelligence. By engaging with LoopLabs coursework, learners can apply what they've learned in a practical setting, ensuring a solid grasp of the concepts.",
    imageUrl: '/images/coursework/junior.png',
    curriculum: `Foundational AI Concepts: Introduction to AI basics tailored for elementary students.

Hands-On Projects: Build simple AI-powered projects using visual programming tools.

Ethics & Responsibility: Understanding fairness, privacy, and ethical considerations in AI.`,
    enrollLink: '/enroll/junior',
  },
  {
    id: '3',
    title: 'LoopLabs Explorers',
    subtitle: 'Recommended for Grades 6-8',
    description:
      'Developing competencies in AI learning is essential for mastering the AI Mastery Blueprint. Through LoopLabs coursework, individuals can enhance their skills and effectively apply their knowledge in real-world scenarios.',
    imageUrl: '/images/coursework/explorers.png',
    curriculum: `Machine Learning Fundamentals: Understand how machines learn from data.

Data Science Basics: Explore data collection, analysis, and visualization.

Real-World Applications: Apply AI concepts to solve problems in various fields.`,
    enrollLink: '/enroll/explorers',
  },
  {
    id: '4',
    title: 'LoopLabs Innovators',
    subtitle: 'Recommended for Grades 9-12',
    description:
      'Mastering advanced skills in AI learning is essential for anyone looking to excel in the field. By following the AI Mastery Blueprint, you can effectively navigate the complexities of artificial intelligence. Completing the LoopLabs coursework will further enhance your understanding and application of these advanced techniques.',
    imageUrl: '/images/coursework/innovators.png',
    curriculum: `Advanced AI Techniques: Deep dive into neural networks, deep learning, and AI algorithms.

Project Development: Design and build comprehensive AI projects from scratch.

Career Pathways: Explore careers in AI and prepare for college-level AI studies.`,
    enrollLink: '/enroll/innovators',
  },
  {
    id: '5',
    title: 'LoopLabs Launch',
    subtitle: 'Recommended for College and Beyond',
    description:
      'From Skills to Real-World Impact: With the AI Mastery Blueprint, you can transform AI learning into practical applications through LoopLabs coursework.',
    imageUrl: '/images/coursework/launch.png',
    curriculum: `Industry-Level AI: Work with cutting-edge AI tools and frameworks used in industry.

Capstone Projects: Develop portfolio-ready AI applications and research projects.

Networking & Mentorship: Connect with AI professionals and gain insights into the field.`,
    enrollLink: '/enroll/launch',
  },
];

/**
 * Get all courses
 * @returns All courses
 */
export const getAllCourses = (): Course[] => {
  return MOCK_COURSES;
};
