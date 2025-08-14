import { useState } from "react";

export const useSelectedTag = () => {
 const [selectedTag, setSelectedTag] = useState<string | null>("All");

 return {
  selectedTag,
  setSelectedTag
 };
};
