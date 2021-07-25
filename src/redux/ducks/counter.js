const INCREMENT = 'inc';
const DECREMENT = 'dec';

/* actions */
export const increment = () => ({
	type: INCREMENT,
});

export const decrement = () => ({
	type: DECREMENT,
});

/* state */
const initialState = {
	count: 10,
};

/* reducer */
export default (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT:
			return { ...state, count: state.count + 1 };
		case DECREMENT:
			return { ...state, count: state.count - 1 };
		default:
			return state;
	}
};
