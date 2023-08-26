import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Pages/Layout";
import HomePage from "./Pages/HomePage";
import SendMoneyPage from "./Pages/SendMoneyPage";
import NotFoundPage from "./Pages/NotFoundPage";
import SummaryPage from "./Pages/SummaryPage";
import PaymentStatusPage from "./Pages/PaymentStatusPage";
import { ThemeProvider } from "@mui/material";
import theme from "./themes";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="send-money" element={<SendMoneyPage />} />
            <Route path="summary" element={<SummaryPage />} />
            <Route path="payment-status/:status" element={<PaymentStatusPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
