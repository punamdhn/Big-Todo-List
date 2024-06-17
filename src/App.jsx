import { Box, CssBaseline } from "@mui/material";
import { AppState } from "./providers/AppState.jsx";
import { AllTodoLists } from "./components/AllTodoLists.jsx";
import { AppHeader } from "./components/AppHeader.jsx";
import { CurrentTodoList } from "./components/CurrentTodoList.jsx";

export function App() {
  return (
    <>
      hi
      <AppState>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppHeader />
          <AllTodoLists />
          <CurrentTodoList />
        </Box>
      </AppState>
    </>
  );
}
