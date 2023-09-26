import { create } from 'zustand'
import { createDrawAppSlice, DrawAppSlice } from './slices/draw'

export const useBoundStore = create<DrawAppSlice>()((...a) => ({
    ...createDrawAppSlice(...a),
}))
