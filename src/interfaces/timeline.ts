export interface TimeLineItem {
  key: number;
  year: string;
  cardTitle: string;
  cardSubtitle: string;
  cardDetailedText: string;
}

export interface PopUpState {
  isOpen: boolean;
  item: TimeLineItem | null;
}
