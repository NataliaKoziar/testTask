import {
  faLightbulb,
  faShoppingCart,
  faQuoteRight,
  faBriefcase
} from '@fortawesome/free-solid-svg-icons'
import { TypeObj } from "./models"

export const type: TypeObj = {
  "Task": {
    icon: faShoppingCart
  },
  "Random Thought": {
    icon: faBriefcase
  },
  "Idea": {
    icon: faLightbulb
  },
  "Quote": {
    icon: faQuoteRight
  }
}