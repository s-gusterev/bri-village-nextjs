'use client';

import Select, {
  components,
  CSSObjectWithLabel,
  //   GroupBase,
  StylesConfig,
} from 'react-select';
// import { CSSProperties } from 'react';

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  options: SelectOption[];
  placeholder: string;
  onChange: (selectedOption: SelectOption | null) => void;
  defaultValue: SelectOption | null;
}

const Selected: React.FC<SelectProps> = ({
  options,
  placeholder,
  onChange,
  defaultValue,
}) => {
  const DropdownIndicator = (
    props: React.ComponentProps<typeof components.DropdownIndicator>,
  ) => {
    return (
      <components.DropdownIndicator {...props}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
            stroke="#1A3A27"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
            stroke="#1A3A27"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </components.DropdownIndicator>
    );
  };

  const customStyles: StylesConfig = {
    option: (defaultStyles: CSSObjectWithLabel) => ({
      ...defaultStyles,
      color: '#1a3a27',
      backgroundColor: '#fff',
      textTransform: 'uppercase',
      fontFamily: 'var(--font-family)',
      fontWeight: '400',
      fontSize: '16px',
      paddingTop: '10px',
      paddingBottom: '10px',
      paddingLeft: '15px',
      cursor: 'pointer',
      '&:last-child': {
        marginBottom: '8px',
      },
      '&:first-of-type': {
        marginTop: '8px',
      },

      '&:hover': {
        backgroundColor: '#eaf5ed',
      },
    }),

    control: (defaultStyles: CSSObjectWithLabel) => ({
      ...defaultStyles,
      color: '#1a3a27',
      backgroundColor: '#fff',
      boxShadow: 'none',
      width: '283px',
      border: 'none',
      borderRadius: '10px',
      position: 'relative',
      height: '56px',
      cursor: 'pointer',
      '@media screen and (max-width: 375px)': {
        width: '248px',
        height: '50px',
      },
    }),
    singleValue: (defaultStyles: CSSObjectWithLabel) => ({
      ...defaultStyles,
      color: '#1a3a27',
      margin: '0 0 ',
    }),
    placeholder: (defaultStyles: CSSObjectWithLabel) => ({
      ...defaultStyles,
      color: '#1a3a27',
      fontFamily: 'var(--font-family)',
      marginLeft: 0,
      marginRight: 0,
      fontSize: '16px',
      fontWeight: '400',
    }),
    valueContainer: (defaultStyles: CSSObjectWithLabel) => ({
      ...defaultStyles,
      padding: '15px 16px',
      fontFamily: 'var(--font-family)',
      fontSize: '16px',
      fontWeight: '400',
    }),

    indicatorSeparator: (defaultStyles: CSSObjectWithLabel) => ({
      ...defaultStyles,
      display: 'none',
    }),
    dropdownIndicator: (defaultStyles: CSSObjectWithLabel) => ({
      ...defaultStyles,
      padding: 0,
      marginRight: '16px',
    }),
    menu: (defaultStyles: CSSObjectWithLabel) => ({
      ...defaultStyles,
      marginTop: '10px',
      border: '1px solid #eee',
      borderRadius: '10px',
      background: '#fff',
      overflow: 'hidden',
      paddingTop: '0',
      zIndex: 99,
    }),
    menuPortal: (defaultStyles: CSSObjectWithLabel) => ({
      ...defaultStyles,
    }),
    clearIndicator: (defaultStyles: CSSObjectWithLabel) => ({
      ...defaultStyles,
      display: 'none',
    }),
  };
  return (
    <div>
      <Select
        maxMenuHeight={300}
        options={options}
        styles={customStyles}
        components={{ DropdownIndicator }}
        isSearchable={false}
        placeholder={placeholder}
        onChange={(newValue) => onChange(newValue as SelectOption | null)}
        isClearable={true}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default Selected;
