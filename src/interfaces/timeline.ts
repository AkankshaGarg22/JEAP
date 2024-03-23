export interface TimeLineItem {
  key: number;
  year: number;
  cardTitle: string;
  cardSubtitle: string;
  cardDetailedText: string;
}

export interface PopUpState {
  isOpen: boolean;
  item: TimeLineItem | null;
}
