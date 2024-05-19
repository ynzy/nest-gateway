import { networkInterfaces } from 'os';

// 获取本机的IP地址
export const getLocalIP = () => {
  const interfaces = networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const inter of interfaces[name]) {
      if (inter.family === 'IPv4' && !inter.internal) {
        return inter.address;
      }
    }
  }
  return '127.0.0.1'; // 如果没有找到，返回回环地址
};
