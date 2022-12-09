/**
 * 地图数据 
 * 控制x y轴的方向 1:左 2:上 3:右 4:下
 */
export default [
  {
    29: 1, 33: 1, 37: 1, 49: 1, 69: 1,  
    3: 2, 7: 2, 47: 2, 51: 2, 57: 2,  
    5: 3, 9: 3, 21: 3, 25: 3, 53: 3, 60: 3,  
    19: 4, 23: 4, 27: 4, 31: 4, 35: 4, 66: 4,
  },
  {
    18: 1, 48: 1, 53: 1, 60: 1, 64: 1, 70: 1, 81: 1,
    8: 2, 29: 2, 51: 2, 62: 2, 74: 2, 79: 2,
    5: 3, 10: 3, 23: 3, 34: 3, 77: 3,
    3: 4, 15: 4, 21: 4, 39: 4, 58: 4, 68: 4,
  },
  {
    28: 1, 73: 1,
    46: 2, 85: 2,
    53: 3, 88: 3,
    19: 4, 68: 4,
  },
  // 最后一个地图选项是无限火力版
  {
    29: 1, 33: 1, 37: 1, 49: 1, 69: 1,  
    3: 2, 7: 2, 47: 2, 51: 2, 57: 2,  
    5: 3, 9: 3, 21: 3, 25: 3, 53: 3, 60: 3,  
    19: 4, 23: 4, 27: 4, 31: 4, 35: 4, 66: 4,
  },
  // {
  //   : 1, : 1, : 1, : 1, : 1, : 1,
  //   : 2, : 2, : 2, : 2, : 2, : 2,
  //   : 3, : 3, : 3, : 3, : 3, : 3,
  //   : 4, : 4, : 4, : 4, : 4, : 4,
  // }
] as {[key in number]: DirectionType}[]

/** 初始格子的位置信息和总格子数量 */
const mapGridInfoList: MapGridInfo[] = [
  { x: 0, y: 250, x_y: 3, num: 72 },
  { x: 0, y: 50, x_y: 3, num: 83 },
  { x: 0, y: 50, x_y: 3, num: 96 },
  { x: 0, y: 250, x_y: 3, num: 72 },
]
export {
  mapGridInfoList
}

/** 格子类型 */
export type GridInfo = {
  x: number
  y: number
  x_y: DirectionType
}

export type MapGridInfo = GridInfo & {num: number}

/** 方向 1:左 2:下 3:右 4:上 */
export type DirectionType = 1 | 2| 3 | 4
  
/* 
刚开始的时候，switch判断写法
switch (i) {
  // 下
  case 3: case 15: case 21: case 39: case 58: case 68: {
    x_y = 4; break;
  }
  // 右
  case 5: case 10: case 23: case 34: case 77: {
    x_y = 3; break;
  } 
  // 上
  case 8: case 29: case 51: case 62: case 74: case 79: {
    x_y = 2; break;
  } 
  // 左
  case 18: case 48: case 53: case 60: case 64: case 70: case 81: {
    x_y = 1; break;
  } 
}
*/