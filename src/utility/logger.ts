/**
 * @Author:             Hesam
 * @Date:               Apr 11 2018
 * @Filename:           Logger.ts
 * @Copyright: Copyright (c) Kian Mobilesoft Ltd. All rights reserved.
 */

const DEBUG = process.env.NODE_ENV === 'development';
const logger = (message: string) => DEBUG ? console.log(message) : console.log('');

export { logger };