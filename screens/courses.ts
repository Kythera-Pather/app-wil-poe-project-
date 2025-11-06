export interface CourseHighlight {
    title: string;
    overview: string;
    items: string[];
    project: string;
    audience: string;
  }
  
  export interface SixMonthCourse {
    id: string;
    title: string;
    description: string;
    price: number;
    image: any;
    overview: string;
    highlights: CourseHighlight[];
    benefits: string[];
    whoShouldEnroll: string[];
  }
  
  export interface SixWeekCourse {
    id: string;
    title: string;
    description: string;
    price: number;
    image: any;
    overview: string;
    highlights: CourseHighlight[];
    benefits: string[];
    whoShouldEnroll: string[];
  }
  
  export const sixMonthCourses: SixMonthCourse[] = [
    {
      id: 'first-aid',
      title: 'First Aid',
      description: 'Comprehensive first aid training covering emergency response, CPR, and wound care.',
      price: 1500,
      image: require('../assets/first-aid-course.jpg'),
      overview: 'This 6-month course provides in-depth knowledge and practical skills in first aid, preparing you to handle medical emergencies with confidence. It covers everything from basic life support to advanced first aid techniques.',
      highlights: [
        {
          title: 'Emergency Response',
          overview: 'Learn to assess situations and act quickly in emergencies.',
          items: ['Scene safety assessment', 'Emergency medical services (EMS) activation', 'Patient assessment'],
          project: 'Simulated emergency scenarios and practical drills.',
          audience: 'Anyone wanting to be prepared for medical emergencies.'
        }
      ],
      benefits: ['Gain life-saving skills', 'Become a certified first aid provider', 'Increase safety awareness'],
      whoShouldEnroll: ['Caregivers', 'Teachers', 'Community leaders', 'Anyone interested in health and safety']
    },
    {
      id: 'sewing',
      title: 'Sewing',
      description: 'Learn sewing from basics to advanced techniques, including pattern making and garment construction.',
      price: 1500,
      image: require('../assets/sewing-course.jpg'),
      overview: 'From threading a needle to creating your own garments, this course covers all aspects of sewing. You will learn to use a sewing machine, read patterns, and finish garments professionally.',
      highlights: [
        {
          title: 'Garment Construction',
          overview: 'Master the process of creating clothes from scratch.',
          items: ['Understanding sewing patterns', 'Fabric cutting and preparation', 'Assembling and finishing garments'],
          project: 'Create a complete outfit (e.g., a skirt and blouse).',
          audience: 'Aspiring fashion designers, hobbyists, and entrepreneurs.'
        }
      ],
      benefits: ['Develop a valuable, practical skill', 'Start your own sewing business', 'Create custom clothing'],
      whoShouldEnroll: ['Beginners with no sewing experience', 'Hobbyists looking to improve their skills', 'Aspiring entrepreneurs']
    },
    {
      id: 'landscaping',
      title: 'Landscaping',
      description: 'Master the art of garden design, plant care, and sustainable landscaping practices.',
      price: 1500,
      image: require('../assets/landscaping-course.jpg'),
      overview: 'This course teaches you the principles of landscape design and horticulture. You will learn about soil health, plant selection, and creating beautiful, sustainable outdoor spaces.',
      highlights: [
        {
          title: 'Garden Design',
          overview: 'Learn to plan and design functional and aesthetic gardens.',
          items: ['Site analysis and planning', 'Plant selection and placement', 'Hardscaping elements'],
          project: 'Design a complete garden plan for a residential property.',
          audience: 'Garden enthusiasts and aspiring landscape designers.'
        }
      ],
      benefits: ['Create beautiful outdoor spaces', 'Gain knowledge for a career in horticulture', 'Understand sustainable gardening'],
      whoShouldEnroll: ['Homeowners', 'Gardening enthusiasts', 'Individuals seeking a career in landscaping']
    },
    {
      id: 'life-skills',
      title: 'Life Skills',
      description: 'Develop essential life skills for personal and professional growth, including communication and financial literacy.',
      price: 1500,
      image: require('../assets/life-skills-course.jpg'),
      overview: 'This comprehensive course focuses on personal development, covering critical skills like communication, financial management, problem-solving, and goal-setting to empower you in all areas of life.',
      highlights: [
        {
          title: 'Personal Finance',
          overview: 'Learn to manage your money effectively.',
          items: ['Budgeting and saving', 'Understanding debt', 'Basic investment principles'],
          project: 'Create a personal financial plan and budget.',
          audience: 'Young adults and anyone looking to improve their financial health.'
        }
      ],
      benefits: ['Improve decision-making', 'Enhance career prospects', 'Achieve personal and financial goals'],
      whoShouldEnroll: ['Young adults', 'Job seekers', 'Anyone looking for personal growth']
    },
  ];
  
  export const sixWeekCourses: SixWeekCourse[] = [
    {
      id: 'child-minding',
      title: 'Child Minding',
      description: 'Learn the essentials of child care, safety, and early childhood development.',
      price: 750,
      image: require('../assets/child-minding-course.jpg'),
      overview: 'This 6-week course prepares you for a career in child minding, covering child safety, nutrition, and creating a stimulating environment for children.',
      highlights: [],
      benefits: ['Qualify for child-minding jobs', 'Ensure a safe environment for children', 'Understand child development'],
      whoShouldEnroll: ['Aspiring nannies and au pairs', 'Parents and guardians', 'Community caregivers']
    },
    {
      id: 'cooking',
      title: 'Cooking & Nutrition',
      description: 'Master basic cooking techniques and learn the fundamentals of a healthy, balanced diet.',
      price: 750,
      image: require('../assets/cooking-course.jpg'),
      overview: 'This course will teach you essential cooking skills and how to prepare nutritious and delicious meals. You will learn about different food groups and healthy meal planning.',
      highlights: [],
      benefits: ['Cook healthy meals for your family', 'Improve your diet and well-being', 'Potential for a career in catering'],
      whoShouldEnroll: ['Beginners in the kitchen', 'Health-conscious individuals', 'Aspiring cooks']
    },
    {
      id: 'garden-maintenance',
      title: 'Garden Maintenance',
      description: 'Learn the basics of garden care, including pruning, weeding, and pest control.',
      price: 750,
      image: require('../assets/garden-main-course.jpg'),
      overview: 'This practical course covers the essential skills needed to maintain a healthy and beautiful garden, from soil care to seasonal tasks.',
      highlights: [],
      benefits: ['Maintain a beautiful home garden', 'Gain skills for part-time gardening work', 'Connect with nature'],
      whoShouldEnroll: ['Homeowners', 'Gardening beginners', 'Anyone looking for a practical outdoor skill']
    },
  ];
  