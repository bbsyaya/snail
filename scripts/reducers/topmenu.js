
const topMenuMap = [{  
	name:'webchat',
	desc:'微信'
}];

const initialState = { data: topMenuMap };

export default function topMenu(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
