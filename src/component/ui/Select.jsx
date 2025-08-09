import React, { useEffect, useRef, useState } from "react";

// eslint-disable-next-line no-unused-vars
export const Select = ({ value, onValueChange, required, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);
  
  // Find the selected item from all children, including those nested in SelectContent
  const selectContentChild = React.Children.toArray(children).find(child => child.type === SelectContent);
  const allSelectItems = selectContentChild
    ? React.Children.toArray(selectContentChild.props.children).filter(child => child.type === SelectItem)
    : [];
  const selectedItem = allSelectItems.find(item => item.props.value === value);

  return (
    <div className="relative" ref={selectRef}>
      {/* Pass down props to children for functionality */}
      {React.Children.map(children, child => {
        if (child.type === SelectTrigger) {
          return React.cloneElement(child, {
            onClick: () => setIsOpen(!isOpen),
            selectedItem: selectedItem, // Use the correctly found selected item
            isOpen,
          });
        }
        if (child.type === SelectContent && isOpen) {
          return React.cloneElement(child, {
            children: React.Children.map(child.props.children, item => {
              if (item.type === SelectItem) {
                return React.cloneElement(item, {
                  onSelect: () => {
                    onValueChange(item.props.value);
                    setIsOpen(false);
                  },
                  isSelected: item.props.value === value,
                });
              }
              return item;
            }),
          });
        }
        return null;
      })}
    </div>
  );
};

// The visible trigger button for the dropdown.
export const SelectTrigger = ({ onClick, selectedItem, isOpen, children }) => (
  <button
    id="role"
    onClick={onClick}
    className="flex items-center justify-between w-full px-4 py-2 mt-1 text-left bg-white border-2 border-gray-300 rounded-lg shadow-sm cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200"
    aria-haspopup="listbox"
    aria-expanded={isOpen}
  >
    {selectedItem ? (
      // If an item is selected, display its content
      selectedItem.props.children
    ) : (
      // Otherwise, display the placeholder from SelectValue
      <span className="text-gray-500">
        {React.Children.toArray(children).find(child => child.type === SelectValue)?.props.placeholder}
      </span>
    )}
    <svg
      className={`h-5 w-5 text-gray-400 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  </button>
);

// A placeholder component to be used inside SelectTrigger.
export const SelectValue = ({ placeholder }) => <div className="truncate">{placeholder}</div>;

// The container for the dropdown's options.
export const SelectContent = ({ children }) => (
  <div
    className="absolute left-0 right-0 z-10 mt-1 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg max-h-60"
    role="listbox"
  >
    {children}
  </div>
);

// An individual option item in the dropdown.
// eslint-disable-next-line no-unused-vars
export const SelectItem = ({ value, children, onSelect, isSelected }) => (
  <div
    role="option"
    aria-selected={isSelected}
    onClick={onSelect}
    className={`p-3 text-sm cursor-pointer hover:bg-indigo-100 rounded-lg mx-2 my-1 transition-colors duration-200 ${
      isSelected ? 'bg-indigo-50 text-indigo-700 font-semibold' : 'text-gray-900'
    }`}
  >
    {children}
  </div>
);

export const MultiSelect = ({ values, onValuesChange, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const selectContentChild = React.Children.toArray(children).find(child => child.type === SelectContent);
  const allSelectItems = selectContentChild
    ? React.Children.toArray(selectContentChild.props.children).filter(child => child.type === SelectItem)
    : [];

  const selectedItems = allSelectItems.filter(item => values.includes(item.props.value));

  const handleItemClick = (value) => {
    if (values.includes(value)) {
      onValuesChange(values.filter(v => v !== value));
    } else {
      onValuesChange([...values, value]);
    }
  };

  return (
    <div className="relative" ref={selectRef}>
      {React.Children.map(children, child => {
        if (child.type === SelectTrigger) {
          return React.cloneElement(child, {
            onClick: () => setIsOpen(!isOpen),
            selectedItems: selectedItems,
            isOpen,
          });
        }
        if (child.type === SelectContent && isOpen) {
          return React.cloneElement(child, {
            children: React.Children.map(child.props.children, item => {
              if (item.type === SelectItem) {
                return React.cloneElement(item, {
                  onSelect: () => handleItemClick(item.props.value),
                  isSelected: values.includes(item.props.value),
                });
              }
              return item;
            }),
          });
        }
        return null;
      })}
    </div>
  );
}