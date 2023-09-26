import { StateCreator } from 'zustand'

export interface DrawAppSlice {
  isWorkflowSelectorOpen: boolean
  openWorkflowSelector: () => void
  closeWorkflowSelector: () => void
  toggleWorkflowSelector: () => void

  width: number
  height: number
  setWidth: (width: number) => void
  setHeight: (height: number) => void

  numOfOutputs: number
  setNumOfOutputs: (numOfOutputs: number) => void
}

export const createDrawAppSlice: StateCreator<
  DrawAppSlice,
  [],
  [],
  DrawAppSlice
> = (set) => ({
  isWorkflowSelectorOpen: false,
  openWorkflowSelector: () => set({ isWorkflowSelectorOpen: true }),
  closeWorkflowSelector: () => set({ isWorkflowSelectorOpen: false }),
  toggleWorkflowSelector: () =>
    set((state) => ({ isWorkflowSelectorOpen: !state.isWorkflowSelectorOpen })),
  width: 1024,
  height: 1024,
  setWidth: (width) => set({ width }),
  setHeight: (height) => set({ height }),
  numOfOutputs: 1,
  setNumOfOutputs: (numOfOutputs) => set({ numOfOutputs }),
})
