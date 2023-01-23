import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import "../i18n/configs";
import { BrowserRouter } from "react-router-dom";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

const container = document.getElementById("app")!;
createInertiaApp({
    title: (title) => "StoryKeeper",
    resolve: (name) =>
        resolvePageComponent(
            `./pages/${name}.tsx`,
            import.meta.glob("./pages/**/*.tsx")
        ),
    setup({ el, App, props }) {
        createRoot(container).render(
            <BrowserRouter>
                <RecoilRoot>
                    <App {...props} />
                </RecoilRoot>
            </BrowserRouter>
        );
    },
});

InertiaProgress.init({ color: "#4B5563" });

//  
