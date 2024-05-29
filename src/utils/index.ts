import { networkInterfaces } from 'os';
import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';
import * as _ from 'lodash';

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

// 获取项目运行环境
export const getEnv = () => {
  return process.env.RUNNING_ENV;
};

// 读取项目配置
export const getConfig = () => {
  const environment = getEnv();

  const yamlPath = join(process.cwd(), `./.config/.${environment}.yaml`);
  const file = readFileSync(yamlPath, 'utf8');
  const envConfig = yaml.load(file);
  return envConfig;
};
