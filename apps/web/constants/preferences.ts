export const PREFERENCE_TAGS = [
  "추리 중심",
  "몰입형 스토리",
  "강한 공포",
  "SF/테크",
  "협동 퍼즐",
  "감성 서사",
] as const;

export type PreferenceTag = (typeof PREFERENCE_TAGS)[number];
