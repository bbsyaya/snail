import * as types from '../constants/ActionTypes';

const topMenuMap = [{  
		name:'webchat',
		desc:'微信',
		leftMenus: ['账号', '投票', '红包', '结算', '统计', '群控', '其他']
	},
	{  
		name:'QQ',
		desc:'QQ',
		leftMenus: ['账号', '投票', '红包', '结算', '统计', '群控', '其他']
	},	
	{  
		name:'taobao',
		desc:'淘宝',
		leftMenus: ['账号', '投票', '红包', '结算', '统计', '群控', '其他']
	},	
	{  
		name:'jingdong',
		desc:'京东',
		leftMenus: ['账号', '投票', '红包', '结算', '统计', '群控', '其他']
	},	
	{  
		name:'zhibo8',
		desc:'直播吧',
		leftMenus: ['账号', '投票', '红包', '结算', '统计', '群控', '其他']
	},		
	{  
		name:'england_league',
		desc:'英超直播',
		leftMenus: ['账号', '投票', '红包', '结算', '统计', '群控', '其他']
	},			
];

const initialState = { data: topMenuMap, selected:'webchat' };

export default function topMenu(state = initialState, action) {
  switch (action.type) {
  	case types.CHANGE_TOP_MENU:
  	  return Object.assign({}, state, {
        topmenu: {selected: action.topMenuName},
      });
    default:
      return state;
  }
}
