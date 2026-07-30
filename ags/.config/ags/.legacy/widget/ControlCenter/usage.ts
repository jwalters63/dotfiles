import Gio from "gi://Gio"
const USAGE_FILE = "/home/jwalters/.config/ags/.app_usage.json"
let usageData: Record<string, number> = {}
export async function loadUsage() {
  try {
    const file = Gio.File.new_for_path(USAGE_FILE)
    const [success, contents] = file.load_contents(null)
    if (success) {
      const decoder = new TextDecoder("utf-8")
      usageData = JSON.parse(decoder.decode(contents))
    }
  } catch {
    usageData = {}
  }
}
export function getUsage(appId: string | null): number {
  if (!appId) return 0
  return usageData[appId] || 0
}
export function recordUsage(appId: string | null) {
  if (!appId) return
  usageData[appId] = (usageData[appId] || 0) + 1
  try {
    const file = Gio.File.new_for_path(USAGE_FILE)
    const encoder = new TextEncoder()
    const content = encoder.encode(JSON.stringify(usageData))
    file.replace_contents(
      content,
      null,
      false,
      Gio.FileCreateFlags.NONE,
      null
    )
  } catch (e) {
    console.error("Failed to save usage data:", e)
  }
}
