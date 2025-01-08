export interface BaseItem {
  id: number;
  title: string;
  category: string;
  description: string;
  level: '초급' | '중급' | '고급';
  tags: string[];
  currentMembers: number;
  maxMembers: number;
  recruitingPositions?: string[];
  schedule: string;
  location: string;
}

export interface Project extends BaseItem {
  currentMembers: number;
}

export interface Study extends BaseItem {
  organizer: string;
}

export interface Conference {
  id: number;
  title: string;
  category: string;
  startDate: string;
  endDate: string;
  location: string;
  organizer: string;
  description: string;
}

export interface Feed {
  id: number;
  user: {
    name: string;
    image: string;
  };
  content: string;
  image?: string;
  time: string;
  likes: number;
  comments: number;
}
