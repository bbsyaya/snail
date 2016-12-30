
const topMenuMap = [{  
		name:'webchat',
		desc:'微信'
	},
	{  
		name:'QQ',
		desc:'QQ'
	},	
	{  
		name:'taobao',
		desc:'淘宝'
	},	
	{  
		name:'jingdong',
		desc:'京东'
	},	
	{  
		name:'zhibo8',
		desc:'直播吧'
	},		
	{  
		name:'england_league',
		desc:'英超直播'
	},			
];

const initialState = { data: topMenuMap };

export default function topMenu(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
