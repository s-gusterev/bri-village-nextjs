'use client';

import Select, {
  components,
  CSSObjectWithLabel,
  StylesConfig,
} from 'react-select';

interface SelectOption {
  label: string;
  value: string | null;
}

interface SelectProps {
  options: SelectOption[];
  placeholder: string;
  onChange: (selectedOption: SelectOption | null) => void;
  defaultValue: SelectOption | null;
  value: SelectOption | null;
}

const Selected: React.FC<SelectProps> = ({
  options,
  placeholder,
  onChange,
  defaultValue,
  value,
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
            d="M6 9L12 15L18 9"
            stroke="white"
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
      color: '#fff',
      backgroundColor: ' #3b9254',
      textTransform: 'uppercase',
      fontFamily: 'var(--font-family)',
      fontWeight: '600',
      fontSize: '16px',
      paddingTop: '12px',
      paddingBottom: '12px',
      paddingLeft: '30px',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#eaf5ed',
        color: '#3b9254',
      },
    }),

    control: (defaultStyles: CSSObjectWithLabel, state) => ({
      ...defaultStyles,
      color: '#fff',
      backgroundColor: '#3b9254',
      boxShadow: 'none',
      width: '100%',
      border: 'none',
      borderRadius: '10px',
      position: 'relative',
      height: '48px',
      cursor: 'pointer',
      borderBottomLeftRadius: state.selectProps.menuIsOpen ? '0' : '10px',
      borderBottomRightRadius: state.selectProps.menuIsOpen ? '0' : '10px',
    }),
    singleValue: (defaultStyles: CSSObjectWithLabel) => ({
      ...defaultStyles,
      color: '#fff',
      margin: '0 0 ',
      marginLeft: 0,
      marginTop: 0,
      marginBottom: 0,
      fontSize: '16px',
      fontWeight: '600',
      textTransform: 'uppercase',
      paddingLeft: '15px',
    }),
    placeholder: (defaultStyles: CSSObjectWithLabel) => ({
      ...defaultStyles,
      color: '#fff',
      fontFamily: 'var(--font-family)',
      marginLeft: 0,
      marginRight: 0,
      fontSize: '16px',
      fontWeight: '600',
      textTransform: 'uppercase',
      paddingLeft: '15px',
    }),
    valueContainer: (defaultStyles: CSSObjectWithLabel) => ({
      ...defaultStyles,
      padding: '15px 16px',
      fontFamily: 'var(--font-family)',
      fontSize: '16px',
      fontWeight: '400',
    }),

    menuList: (defaultStyles: CSSObjectWithLabel) => ({
      ...defaultStyles,
      padding: 0,
    }),

    indicatorSeparator: (defaultStyles: CSSObjectWithLabel) => ({
      ...defaultStyles,
      display: 'none',
    }),
    dropdownIndicator: (defaultStyles: CSSObjectWithLabel, state) => ({
      ...defaultStyles,
      padding: 0,
      marginRight: '30px',
      transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'none',
    }),
    menu: (defaultStyles: CSSObjectWithLabel) => ({
      ...defaultStyles,
      marginTop: 0,
      border: 'none',
      borderRadius: 0,
      background: '#3b9254',
      overflow: 'hidden',
      paddingTop: '0',
      zIndex: 99,
      borderBottomLeftRadius: '10px',
      borderBottomRightRadius: '10px',
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
        value={value}
      />
    </div>
  );
};
export default Selected;
