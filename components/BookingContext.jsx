import { createContext, useReducer } from "react";

export const BookingContext = createContext();

const initialState = {
  brand: "",
  variant: "",
  bookingDate: "",
  bookingTime: "",
  name: "",
  email: "",
  phone: "",
  houseNumber: "",
  streetNumber: "",
  city: "",
  state: "",
  postalCode: "",
  dob: "",
  note: "",
};

export const ACTIONS = {
  brand: "brand",
  variant: "variant",
  bookingDate: "bookingDate",
  bookingTime: "bookingTime",
  name: "name",
  email: "email",
  phone: "phone",
  houseNumber: "houseNumber",
  streetNumber: "streetNumber",
  city: "city",
  state: "state",
  postalCode: "postalCode",
  dob: "dob",
  note: "note",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.brand:
      return { ...state, brand: action.payload.brand };
    case ACTIONS.variant:
      return { ...state, variant: action.payload.variant };
    case ACTIONS.bookingDate:
      return { ...state, bookingDate: action.payload.bookingDate };
    case ACTIONS.bookingTime:
      return { ...state, bookingTime: action.payload.bookingTime };
    case ACTIONS.name:
      return { ...state, name: action.payload.name };
    case ACTIONS.email:
      return { ...state, email: action.payload.email };
    case ACTIONS.phone:
      return { ...state, phone: action.payload.phone };
    case ACTIONS.houseNumber:
      return { ...state, houseNumber: action.payload.houseNumber };
    case ACTIONS.streetNumber:
      return { ...state, streetNumber: action.payload.streetNumber };
    case ACTIONS.city:
      return { ...state, city: action.payload.city };
    case ACTIONS.state:
      return { ...state, state: action.payload.state };
    case ACTIONS.postalCode:
      return { ...state, postalCode: action.payload.postalCode };
    case ACTIONS.dob:
      return { ...state, dob: action.payload.dob };
    case ACTIONS.note:
      return { ...state, note: action.payload.note };
    default:
      return state;
  }
};

export const BookingProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <BookingContext.Provider value={[state, dispatch]}>
      {props.children}
    </BookingContext.Provider>
  );
};
