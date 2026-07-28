import app from "ags/gtk4/app"
import Test from "./test_apps_tsx.tsx"

app.start({
  main() {
    Test()
  }
})
