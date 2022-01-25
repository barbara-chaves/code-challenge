export const ADD_BOOKING = 'APP/BOOK_TABLE/ADD_BOOKING';

export const initialState = {
  bookings: [],
};

export const addBooking = (booking: {
  type: string;
  booking: any;
}) => ({
  type: ADD_BOOKING,
  booking,
});

const bookTableReducer = (state = initialState, action: any) => {
  if (action.type === ADD_BOOKING) {
    return {
      ...state,
      bookings: state.bookings.concat(action.booking),
    };
  }
};

export default bookTableReducer