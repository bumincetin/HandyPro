
export type UserRole = 'client' | 'worker' | 'admin';

export enum VerifiedStatus {
  PENDING = 'pending',
  VERIFIED = 'verified',
  REJECTED = 'rejected'
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  address?: string;
  propertyType?: string;
}

export interface WorkerProfile extends UserProfile {
  trades: string[];
  isOnline: boolean;
  verifiedStatus: VerifiedStatus;
  rating: number;
  doveVivoScore: number;
  insuranceUrl?: string;
}

export interface MaterialRequest {
  id: string;
  description: string;
  cost: number;
  imageUrl?: string;
  status: 'pending' | 'approved' | 'rejected';
}

export interface Job {
  id: string;
  title: string;
  description: string;
  category: string;
  autoDetectedCategory?: string;
  status: 'open' | 'accepted' | 'en_route' | 'in_progress' | 'completed';
  isEmergency: boolean;
  clientName: string;
  location: string;
  payout: string;
  distance?: string;
  audioUrl?: string;
  beforeImageUrl?: string;
  afterImageUrl?: string;
  materialRequests: MaterialRequest[];
  startedAt?: Date;
}

export interface Message {
  id: string;
  senderId: string;
  senderRole: UserRole;
  text: string;
  translatedText?: string;
  timestamp: Date;
}