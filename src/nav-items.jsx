import { Home, MapPin, Utensils, Camera, Book } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Destinations",
    to: "/destinations",
    icon: <MapPin className="h-4 w-4" />,
    page: <div>Destinations Page</div>,
  },
  {
    title: "Cuisine",
    to: "/cuisine",
    icon: <Utensils className="h-4 w-4" />,
    page: <div>Chinese Cuisine Page</div>,
  },
  {
    title: "Gallery",
    to: "/gallery",
    icon: <Camera className="h-4 w-4" />,
    page: <div>Photo Gallery Page</div>,
  },
  {
    title: "Culture",
    to: "/culture",
    icon: <Book className="h-4 w-4" />,
    page: <div>Chinese Culture Page</div>,
  },
];
