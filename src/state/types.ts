import { Toast } from 'components/Toast'

export interface ToastsState {
  data: Toast[]
}

export interface State {
  toasts: ToastsState
}
