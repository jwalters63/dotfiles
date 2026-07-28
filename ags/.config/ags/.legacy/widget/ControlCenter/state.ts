type Listener = (val: string) => void

class TabState {
  private val = "apps"
  private listeners: Listener[] = []

  get() { return this.val }
  
  set(newVal: string) {
    this.val = newVal
    this.listeners.forEach(l => l(newVal))
  }
  
  subscribe(fn: Listener) {
    this.listeners.push(fn)
    fn(this.val)
  }
}

export const activeTab = new TabState()
