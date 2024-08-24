export type AppointmentHistory = {
  date: string;
  time: string;
};

export type LoyaltyCard = {
  totalCuts: number;
  cutsNeeded: number;
  cutsRemaining: number;
};

export type Client = {
  id: string;
  name: string;
  clientSince: string;
  clientAvatar: string;
  appointmentHistory: AppointmentHistory[];
  loyaltyCard: LoyaltyCard;
};
