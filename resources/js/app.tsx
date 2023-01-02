import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import "../i18n/configs";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";
    
const container = document.getElementById("app")!
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
                <App {...props} />
            </RecoilRoot>
        );
    },
});

InertiaProgress.init({ color: "#4B5563" });
