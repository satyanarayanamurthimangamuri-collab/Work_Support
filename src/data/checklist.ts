export interface ChecklistItem {
  id: string;
  label: string;
  completed: boolean;
}

export const SUPPORT_CHECKLIST: ChecklistItem[] = [
  { id: "req", label: "Reviewed project requirement", completed: true },
  { id: "match", label: "Matched with a support specialist", completed: true },
  { id: "fix", label: "Fixed blocking issue in build", completed: true },
  { id: "plan", label: "Plan next milestone", completed: false },
];
