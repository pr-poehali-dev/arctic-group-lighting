export interface Product {
  id: number;
  name: string;
  model: string;
  type: string;
  power: number;
  lumen: number;
  ip: string;
  price: number;
  temp: string;
  warranty: number;
  image?: string;
}

export const productTypes = ['Подвесной', 'Линейный', 'Прожектор', 'Уличный', 'Взрывозащищённый', 'Школьный'];

export const products: Product[] = [
  { id: 13, name: 'ПРОМСВЕТ Школьный', model: 'PS-SCH-40', type: 'Школьный', power: 40, lumen: 4800, ip: 'IP40', price: 2900, temp: '4000K', warranty: 5, image: 'https://cdn.poehali.dev/projects/bc1f4fb4-c6d7-44db-b1ef-cad46090ff0e/bucket/a63886a0-31c9-451b-acd2-1e86f22884a8.jpg' },
  { id: 1, name: 'ПРОМСВЕТ Highbay', model: 'PS-HB-100', type: 'Подвесной', power: 100, lumen: 16000, ip: 'IP65', price: 8900, temp: '5000K', warranty: 5 },
  { id: 2, name: 'ПРОМСВЕТ Highbay', model: 'PS-HB-150', type: 'Подвесной', power: 150, lumen: 24000, ip: 'IP65', price: 12400, temp: '5000K', warranty: 5 },
  { id: 3, name: 'ПРОМСВЕТ Highbay', model: 'PS-HB-200', type: 'Подвесной', power: 200, lumen: 32000, ip: 'IP66', price: 16800, temp: '5700K', warranty: 5 },
  { id: 4, name: 'ПРОМСВЕТ Line', model: 'PS-LN-40', type: 'Линейный', power: 40, lumen: 6400, ip: 'IP40', price: 3200, temp: '4000K', warranty: 3 },
  { id: 5, name: 'ПРОМСВЕТ Line', model: 'PS-LN-60', type: 'Линейный', power: 60, lumen: 9600, ip: 'IP54', price: 4700, temp: '4000K', warranty: 3 },
  { id: 6, name: 'ПРОМСВЕТ Flood', model: 'PS-FL-50', type: 'Прожектор', power: 50, lumen: 7500, ip: 'IP66', price: 3900, temp: '6500K', warranty: 4 },
  { id: 7, name: 'ПРОМСВЕТ Flood', model: 'PS-FL-100', type: 'Прожектор', power: 100, lumen: 15000, ip: 'IP66', price: 6900, temp: '6500K', warranty: 4 },
  { id: 8, name: 'ПРОМСВЕТ Flood', model: 'PS-FL-200', type: 'Прожектор', power: 200, lumen: 30000, ip: 'IP66', price: 13500, temp: '6500K', warranty: 4 },
  { id: 9, name: 'ПРОМСВЕТ Street', model: 'PS-ST-80', type: 'Уличный', power: 80, lumen: 12800, ip: 'IP67', price: 7200, temp: '5000K', warranty: 5 },
  { id: 10, name: 'ПРОМСВЕТ Street', model: 'PS-ST-120', type: 'Уличный', power: 120, lumen: 19200, ip: 'IP67', price: 10900, temp: '5000K', warranty: 5 },
  { id: 11, name: 'ПРОМСВЕТ Ex', model: 'PS-EX-60', type: 'Взрывозащищённый', power: 60, lumen: 9000, ip: 'IP68', price: 18900, temp: '5000K', warranty: 7 },
  { id: 12, name: 'ПРОМСВЕТ Ex', model: 'PS-EX-100', type: 'Взрывозащищённый', power: 100, lumen: 15000, ip: 'IP68', price: 26400, temp: '5000K', warranty: 7 },
];