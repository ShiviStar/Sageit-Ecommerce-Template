import { createSlice } from '@reduxjs/toolkit'
import Brand1 from '../assets/brand-1.png'
import Brand2 from '../assets/brand-2.png'
import Brand3 from '../assets/brand-3.png'
import Brand4 from '../assets/brand-4.png'
import Brand5 from '../assets/brand-5.png'

const initialState = {
  staticImages: [
      { id: 'img1', src: Brand1, alt: 'Description for image 1' },
      { id: 'img2', src: Brand2, alt: 'Description for image 2' },
      { id: 'img3', src: Brand3, alt: 'Description for image 3' },
      { id: 'img4', src: Brand4, alt: 'Description for image 4' },
      { id: 'img5', src: Brand5, alt: 'Description for image 5' },
  ],
};

const dataSlice = createSlice({
  name: 'data',
  initialState: initialState,
  reducers: {
    
  },
})
export const { actions } = dataSlice;
export default dataSlice.reducer