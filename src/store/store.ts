import { create } from "zustand";
import { type MenuItemData } from "../utils/menuData";

interface SelectedItem extends MenuItemData {
  quantity: number;
}

interface CartState {
  selectedItems: SelectedItem[];
  addItem: (menuItem: MenuItemData) => void;
  increase: (itemId: number) => void;
  decrease: (itemId: number) => void;
  clear: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  selectedItems: [],

  addItem: (menuItem) =>
    set((state) => {
      const existingItem = state.selectedItems.find(
        (item) => item.id === menuItem.id
      );
      if (existingItem) {
        return {
          selectedItems: state.selectedItems.map((item) =>
            item.id === menuItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          selectedItems: [...state.selectedItems, { ...menuItem, quantity: 1 }],
        };
      }
    }),

  increase: (itemId) =>
    set((state) => ({
      selectedItems: state.selectedItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),

  decrease: (itemId) =>
    set((state) => {
      const targetItem = state.selectedItems.find((item) => item.id === itemId);
      if (targetItem && targetItem.quantity > 1) {
        return {
          selectedItems: state.selectedItems.map((item) =>
            item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
          ),
        };
      } else {
        return {
          selectedItems: state.selectedItems.filter(
            (item) => item.id !== itemId
          ),
        };
      }
    }),

  clear: () => set({ selectedItems: [] }),
}));
