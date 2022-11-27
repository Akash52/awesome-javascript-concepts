let dictionary: Record<string, TrackStates> = {};

interface TrackStates {
  current: string;
  next: string;
}

const item: Record<keyof TrackStates, string> = {
  current: "abc23ds",
  next: "dsfsdflink3",
};

//Number are coerced to string
dictionary[0] = item;
