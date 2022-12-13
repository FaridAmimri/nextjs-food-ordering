/** @format */

import axios from 'axios'

const BASE_URL = 'https://nextjs-food-ordering-seven.vercel.app/'

export const publicRequest = axios.create({
  baseURL: BASE_URL
})
