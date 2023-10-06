import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=542c755d"; const _jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=542c755d"; const React = __vite__cjsImport1_react;
import __vite__cjsImport2_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=542c755d"; const ReactDOM = __vite__cjsImport2_reactDom_client;
import { BrowserRouter } from "/node_modules/.vite/deps/react-router-dom.js?v=542c755d";
import { QueryClient, QueryClientProvider } from "/node_modules/.vite/deps/react-query.js?v=542c755d";
import { Provider } from "/node_modules/.vite/deps/react-redux.js?v=542c755d";
import { store } from "/src/store/index.ts?t=1696531857738";
import App from "/src/App.tsx?t=1696531857738";
const root = document.getElementById("root");
export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false
        }
    }
});
ReactDOM.createRoot(root).render(/*#__PURE__*/ _jsxDEV(React.StrictMode, {
    children: /*#__PURE__*/ _jsxDEV(BrowserRouter, {
        children: /*#__PURE__*/ _jsxDEV(QueryClientProvider, {
            client: queryClient,
            children: /*#__PURE__*/ _jsxDEV(Provider, {
                store: store,
                children: /*#__PURE__*/ _jsxDEV(App, {}, void 0, false, {
                    fileName: "D:/PROJECTS/CompanyBench/cb-react-web-app/src/main.tsx",
                    lineNumber: 24,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "D:/PROJECTS/CompanyBench/cb-react-web-app/src/main.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "D:/PROJECTS/CompanyBench/cb-react-web-app/src/main.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "D:/PROJECTS/CompanyBench/cb-react-web-app/src/main.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this)
}, void 0, false, {
    fileName: "D:/PROJECTS/CompanyBench/cb-react-web-app/src/main.tsx",
    lineNumber: 20,
    columnNumber: 3
}, this));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgUXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuL3N0b3JlXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL0FwcFwiO1xuXG5jb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpITtcbmV4cG9ydCBjb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCh7XG4gIGRlZmF1bHRPcHRpb25zOiB7XG4gICAgcXVlcmllczoge1xuICAgICAgcmV0cnk6IGZhbHNlLFxuICAgICAgcmVmZXRjaE9uV2luZG93Rm9jdXM6IGZhbHNlLFxuICAgIH0sXG4gIH0sXG59KTtcblxuUmVhY3RET00uY3JlYXRlUm9vdChyb290KS5yZW5kZXIoXG4gIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgIDxCcm93c2VyUm91dGVyPlxuICAgICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+XG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgIDxBcHAgLz5cbiAgICAgICAgPC9Qcm92aWRlcj5cbiAgICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cbiAgICA8L0Jyb3dzZXJSb3V0ZXI+XG4gIDwvUmVhY3QuU3RyaWN0TW9kZT5cbik7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdERPTSIsIkJyb3dzZXJSb3V0ZXIiLCJRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJQcm92aWRlciIsInN0b3JlIiwiQXBwIiwicm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJxdWVyeUNsaWVudCIsImRlZmF1bHRPcHRpb25zIiwicXVlcmllcyIsInJldHJ5IiwicmVmZXRjaE9uV2luZG93Rm9jdXMiLCJjcmVhdGVSb290IiwicmVuZGVyIiwiU3RyaWN0TW9kZSIsImNsaWVudCJdLCJtYXBwaW5ncyI6IjtBQUFBLFlBQVlBLFdBQVcsUUFBUTtBQUMvQixZQUFZQyxjQUFjLG1CQUFtQjtBQUM3QyxTQUFTQyxhQUFhLFFBQVEsbUJBQW1CO0FBQ2pELFNBQVNDLFdBQVcsRUFBRUMsbUJBQW1CLFFBQVEsY0FBYztBQUMvRCxTQUFTQyxRQUFRLFFBQVEsY0FBYztBQUN2QyxTQUFTQyxLQUFLLFFBQVEsVUFBVTtBQUNoQyxPQUFPQyxTQUFTLFFBQVE7QUFFeEIsTUFBTUMsT0FBT0MsU0FBU0MsY0FBYyxDQUFDO0FBQ3JDLE9BQU8sTUFBTUMsY0FBYyxJQUFJUixZQUFZO0lBQ3pDUyxnQkFBZ0I7UUFDZEMsU0FBUztZQUNQQyxPQUFPO1lBQ1BDLHNCQUFzQjtRQUN4QjtJQUNGO0FBQ0YsR0FBRztBQUVIZCxTQUFTZSxVQUFVLENBQUNSLE1BQU1TLE1BQU0sZUFDOUIsUUFBQ2pCLE1BQU1rQixVQUFVO2NBQ2YsY0FBQSxRQUFDaEI7a0JBQ0MsY0FBQSxRQUFDRTtZQUFvQmUsUUFBUVI7c0JBQzNCLGNBQUEsUUFBQ047Z0JBQVNDLE9BQU9BOzBCQUNmLGNBQUEsUUFBQ0MifQ==