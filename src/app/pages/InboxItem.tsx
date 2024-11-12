// src/pages/InboxItem.tsx
import React from 'react';

// Define a type for the props
interface InboxItemProps {
  text: string;
}

// Use the defined type in the component
const InboxItem: React.FC<InboxItemProps> = ({ text }) => {
  return (
    <div className="bg-blue-200 p-3 rounded-md hover:bg-blue-300 transition duration-200">
      {text}
    </div>
  );
};

export default InboxItem;
