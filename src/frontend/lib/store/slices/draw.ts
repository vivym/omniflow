import { StateCreator } from 'zustand'

export interface Reference {
  file: File
  algoType: string
  algorithm: string
}
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

  references: Reference[]
  setReferences: (references: Reference[]) => void
  setReference: (index: number, reference: Reference) => void
  removeReference: (index: number) => void

  optimizePromptEnabled: boolean
  setOptimizePromptEnabled: (optimizePromptEnabled: boolean) => void
  negativePromptEnabled: boolean
  setNegativePromptEnabled: (negativePromptEnabled: boolean) => void
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
  references: [],
  setReferences: (references) => set({ references }),
  setReference: (index, reference) =>
    set((state) => {
      const references = [...state.references]
      references[index] = reference
      return { references }
    }),
  removeReference: (index) =>
    set((state) => {
      const references = [...state.references]
      references.splice(index, 1)
      return { references }
    }),
  optimizePromptEnabled: true,
  setOptimizePromptEnabled: (optimizePromptEnabled) => set({ optimizePromptEnabled }),
  negativePromptEnabled: false,
  setNegativePromptEnabled: (negativePromptEnabled) => set({ negativePromptEnabled }),
})
