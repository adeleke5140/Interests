import { NotificationProvider } from "@refinedev/core"
import toast from "react-hot-toast"

export const notificationProvider: NotificationProvider = {
  open: ({ message, key, type }) => {
    switch (type) {
      case "success":
        toast.success(message, { id: key })
        break
      case "error":
        toast.error(message, { id: key })
        break
      default:
        toast(message, { id: key })
        break
    }
  },
  close: (key) => {
    toast.dismiss(key)
  },
}
