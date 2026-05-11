import { getDateInfo } from '@/helpers'
import { DateStore } from '@/types/dateStoreType'
import { create } from 'zustand'

export const useDateStore = create<DateStore>((set) => ({
  date: getDateInfo().dateCompleted,
  setDate: (newDate: string) => set({ date: newDate }),
}))