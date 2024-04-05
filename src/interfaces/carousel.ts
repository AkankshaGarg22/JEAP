export interface MenuItem {
    id: number;
    title: string;
    slides: string[];
    from: string;
    to: string;
    how: string;
  }

export interface CarouselProps {
  item: MenuItem;
  autoSlide?: boolean;
  autoSlideInterval?: number;
}
