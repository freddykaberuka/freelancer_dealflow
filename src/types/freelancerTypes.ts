interface Freelancer {
  id: number;
  names: string;
  about: string;
  location?: string;
  category: string;
  technologies: string[];
  image: string;
  years_experience: number;
}

interface FreelancerListProps {
  freelancers: Freelancer[];
}

export default  FreelancerListProps;
