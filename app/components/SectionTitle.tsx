import React from 'react';

interface Props {
  text: string;
}
const SectionTitle: React.FC<Props> = ({ text }) => {
  return (
    <h2 className="text-nutmeg text-3xl font-serif font-light mb-6">{text}</h2>
  );
};

export default SectionTitle;
