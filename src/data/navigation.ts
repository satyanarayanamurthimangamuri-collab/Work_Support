export interface NavItem {
  label: string;
  path: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "Work Support", path: "/work-support" },
  { label: "Training", path: "/training" },
  { label: "Work With Team", path: "/work-with-team" },
  { label: "Joining Our Team", path: "/joining-our-team" },
  { label: "Contact Us", path: "/contact" },
];
