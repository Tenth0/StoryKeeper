import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import "../i18n/configs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "@/pages";
import InsertItem from "@/pages";
import CategoryTable from "@/pages";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

const container = document.getElementById("app")!;
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob("./Pages/**/*.tsx")
        ),
    setup({ el, App, props }) {
        createRoot(container).render(
            <RecoilRoot>
                <Router>
                    <Routes>
                        <Route path="/" element={<Index />} />
                        <Route path="/insert_item" element={<InsertItem />} />
                        <Route
                            path="/category_table"
                            element={<CategoryTable />}
                        />
                    </Routes>
                </Router>
            </RecoilRoot>
        );
    },
});

InertiaProgress.init({ color: "#4B5563" });

//  <App {...props} />
