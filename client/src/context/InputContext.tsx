import React, { createContext, useReducer, Dispatch } from 'react';
import { ReactNode } from 'react';

type FormState = {
  email: string;
  name: string;
  portfolioLink: string;
  githubLink: string;
  linkedInLink: string;
  twitterLink: string;
  template: string;
  summary: string;
}

type FormAction =
  | { type: 'SET_EMAIL'; payload: string }
  | { type: 'SET_NAME'; payload: string }
  | { type: 'SET_PORTFOLIO_LINK'; payload: string }
  | { type: 'SET_GITHUB_LINK'; payload: string }
  | { type: 'SET_LINKEDIN_LINK'; payload: string }
  | { type: 'SET_TWITTER_LINK'; payload: string }
  | { type: 'SET_TEMPLATE'; payload: string }
  | { type: 'SET_SUMMARY'; payload: string }

type FormContextProps = {
  state: FormState;
  dispatch: Dispatch<FormAction>;
}

type FormProviderProps = {
  children: ReactNode; // This type is for children and can be ReactNode, ReactElement, JSX.Element, etc.
}

const initialState: FormState = {
  email: '',
  name: '',
  portfolioLink: '',
  githubLink: '',
  linkedInLink: '',
  twitterLink: '',
  template: '',
  summary: '',
};

const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_PORTFOLIO_LINK':
      return { ...state, portfolioLink: action.payload };
    case 'SET_GITHUB_LINK':
      return { ...state, githubLink: action.payload };
    case 'SET_LINKEDIN_LINK':
      return { ...state, linkedInLink: action.payload };
    case 'SET_TWITTER_LINK':
      return { ...state, twitterLink: action.payload };
    case 'SET_TEMPLATE':
      return { ...state, template: action.payload };
    case 'SET_SUMMARY':
      return { ...state, summary: action.payload };
    default:
      return state;
  }
};

export const FormContext = createContext<FormContextProps>({
  state: initialState,
  dispatch: () => null
});

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

