import { createSlice } from '@reduxjs/toolkit'
import Brand1 from '../assets/brand-1.png'
import Brand2 from '../assets/brand-2.png'
import Brand3 from '../assets/brand-3.png'
import Brand4 from '../assets/brand-4.png'
import Brand5 from '../assets/brand-5.png'
import Category1 from '../assets/card (1).png'
import Category2 from '../assets/card (2).png'
import Category3 from '../assets/card (3).png'
import Category4 from '../assets/card (4).png'

const initialState = {
  staticImages: [
      { id: 'img1', src: Brand1, alt: 'Description for image 1' },
      { id: 'img2', src: Brand2, alt: 'Description for image 2' },
      { id: 'img3', src: Brand3, alt: 'Description for image 3' },
      { id: 'img4', src: Brand4, alt: 'Description for image 4' },
      { id: 'img5', src: Brand5, alt: 'Description for image 5' },
  ],
  categoryImages: [
    { id: 'img1', src: Category1, alt: 'Description for image 1' },
    { id: 'img2', src: Category2, alt: 'Description for image 2' },
    { id: 'img3', src: Category3, alt: 'Description for image 3' },
    { id: 'img4', src: Category4, alt: 'Description for image 4' },
  ]
};

const dataSlice = createSlice({
  name: 'data',
  initialState: initialState,
  reducers: {
    
  },
})
export const { actions } = dataSlice;
export default dataSlice.reducer