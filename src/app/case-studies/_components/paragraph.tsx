import { ReactNode } from "react";
import React from "react";

type TextProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Wraps number-character sequences (digits with attached characters not separated by space)
 * in <strong> tags, excluding any inside or immediately followed by <sup> tags.
 */
const wrapNumericSequencesWithStrong = (input: ReactNode): ReactNode => {
  // Regex: match digit sequences optionally joined with non-space characters
  // that are NOT followed by a </sup> or inside a <sup>
  const regex = /(\S*\d\S*)(?![^<]*<\/sup>)/g;

  if (typeof input === "string") {
    const parts: ReactNode[] = [];
    let lastIndex = 0;

    input.replace(regex, (match, group, offset) => {
      parts.push(input.slice(lastIndex, offset));
      parts.push(<strong key={offset}>{group}</strong>);
      lastIndex = offset + group.length;
      return match;
    });

    parts.push(input.slice(lastIndex));
    return parts;
  }

  // If it's an array of nodes, process each
  if (Array.isArray(input)) {
    return input.map((child, index) => (
      <React.Fragment key={index}>{wrapNumericSequencesWithStrong(child)}</React.Fragment>
    ));
  }

  // If it's a valid React element
  if (React.isValidElement(input)) {
    // Skip <sup> entirely
    if (input.type === "sup") {
      return input;
    }

    // Recursively process children
    return React.cloneElement(input, {
      ...input.props,
      children: wrapNumericSequencesWithStrong(input.props.children),
    });
  }

  return input;
};

const Paragraph: React.FC<TextProps> = ({ children, className = "" }) => {
  return (
    <p className={`text-base md:text-xl md:leading-8 ${className}`}>
      {wrapNumericSequencesWithStrong(children)}
    </p>
  );
};

export default Paragraph;
